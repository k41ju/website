---
layout: default
title: "Publications"
---

# Publications

{% assign pubs = site.posts | where_exp: "p", "p.tags contains 'publication' or p.categories contains 'publications'" %}
{% if pubs.size == 0 %}
<p>No publications yet.</p>
{% else %}
<ul>
  {% for post in pubs %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}</li>
  {% endfor %}
</ul>
{% endif %}
