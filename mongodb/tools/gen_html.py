#!/usr/bin/env python
# coding: utf-8

import io

INCLUDE_MARK = '<!-- include:books.json -->'

for prefix in ['', 'test-']:

    template = io.open(prefix+'template.html', encoding='utf-8').read()
    books_json = io.open('../books.json', encoding='utf-8').read()

    with io.open(prefix+'aggregation.html', 'wt', encoding='utf-8') as outfile:
        html = template.replace(INCLUDE_MARK, books_json)
        outfile.write(html)

