#!/usr/bin/env python

import jinja2
import os
import json
import sys
import codecs
from subprocess import check_call

# http://eosrei.net/articles/2015/11/latex-templates-python-and-jinja2-generate-pdfs

CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))

DATA_EN = os.path.join(CURRENT_DIR, '..', 'data', 'user_en.json')
DATA_ES = os.path.join(CURRENT_DIR, '..', 'data', 'user_es.json')

TEMPLATE_FILENAME = 'CV_template.tex'
TEMPLATE_OUTPUT_EN = 'CV_en'
TEMPLATE_OUTPUT_ES = 'CV_es'

PUBLIC_DIR = os.path.join(CURRENT_DIR, '..', 'public')


def open_template(filename):
    latex_jinja_env = jinja2.Environment(
        block_start_string='\BLOCK{',
        block_end_string='}',
        variable_start_string='\VAR{',
        variable_end_string='}',
        comment_start_string='\#{',
        comment_end_string='}',
        line_statement_prefix='%%',
        line_comment_prefix='%#',
        trim_blocks=True,
        autoescape=False,
        loader=jinja2.FileSystemLoader(os.path.abspath('.'))
    )
    return latex_jinja_env.get_template(filename)


def open_data(filename):
    try:
        with open(filename) as f:
            user_data = json.load(f)
            print "Data obtained"
    except:
        print "There was a problem opening data %s" % filename
        raise

    # Fix data
    for item in user_data['studies']['other']['items']:
        if 'description' in item:
            text_description = '\\newline{}'.join(item['description']['text'])
            item['description']['text'] = text_description
        else:
            item['description'] = {'text': ''}

    for item in user_data['awards']['items']:
        if 'description' in item:
            text_description = '\\newline{}'.join(item['description']['text'])
            item['description']['text'] = text_description
        else:
            item['description'] = {'text': ''}

    for subsection in user_data['experience']['subsections']:
        for item in subsection['list']:
            if 'description' in item:
                text_description = '\\newline{}'.join(item['description']['text'])
                item['description']['text'] = text_description
            else:
                item['description'] = {'text': ''}

    # Complete skills 2 items
    user_data['skills']['items'] = []
    skill_list = {}
    i = 1
    for skill in user_data['skills']['list']:
        if i % 2:
            skill_list['name1'] = skill['name']
            skill_list['list1'] = ', '.join(skill['list'])
        else:
            skill_list['name2'] = skill['name']
            skill_list['list2'] = ', '.join(skill['list'])
            user_data['skills']['items'].append(skill_list)
            skill_list = {}
        i += 1

    if skill_list:
        skill_list['name2'] = ''
        skill_list['list2'] = ''
        user_data['skills']['items'].append(skill_list)

    return user_data


def save_tex_file(template, data, output_filename):
    try:
        latex_output = template.render(data)
        with codecs.open(output_filename, "w", "utf-8") as f:
            f.write(latex_output)
            print "latex file successfully created"
    except:
        print "There was an error saving the latex file %s" % output_filename

# open template
template = open_template(TEMPLATE_FILENAME)

# open data
try:
    data_en = open_data(DATA_EN)
    data_es = open_data(DATA_ES)
except:
    sys.exit(1)

# render and save template
save_tex_file(template, data_en, TEMPLATE_OUTPUT_EN + '.tex')
save_tex_file(template, data_es, TEMPLATE_OUTPUT_ES + '.tex')

# create pdf file and delete temporal files if possible
try:
    # create pdf
    check_call(['pdflatex', TEMPLATE_OUTPUT_EN + '.tex'])
    check_call(['pdflatex', TEMPLATE_OUTPUT_ES + '.tex'])
    # remove temporal files
    for ext in ['.tex', '.log', '.out', '.aux']:
        try:
            os.remove(TEMPLATE_OUTPUT_EN + ext)
            os.remove(TEMPLATE_OUTPUT_ES + ext)
        except:
            pass
    print "Moving files to %s" % PUBLIC_DIR
    # Move to public dir
    os.rename(TEMPLATE_OUTPUT_EN + '.pdf', os.path.join(PUBLIC_DIR, TEMPLATE_OUTPUT_EN + '.pdf'))
    os.rename(TEMPLATE_OUTPUT_ES + '.pdf', os.path.join(PUBLIC_DIR, TEMPLATE_OUTPUT_ES + '.pdf'))
except:
    print "It's not possible to create a pdf file"
