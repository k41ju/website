---
title: Home
description: Updates and resources.
---

# Welcome

This site publishes articles and resources on technology and society.

{% if paginator %}
<ul class="feed">
  {% for post in paginator.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <time datetime="{{ post.date | date_to_xmlschema }}"> · {{ post.date | date: "%b %-d, %Y" }}</time>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>

<nav class="pager" aria-label="Pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">&larr; Newer</a>
  {% endif %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" style="float:right">Older &rarr;</a>
  {% endif %}
</nav>
{% else %}
<p>No posts yet.</p>
{% endif %}
