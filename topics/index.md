---
layout: default
title: "Topics"
---

# Topics

<ul>
{% assign tags = site.tags | sort %}
{% for tag in tags %}
  {% assign tag_name = tag[0] %}
  <li><a href="{{ '/tag/' | append: tag_name | append: '/' | relative_url }}">#{{ tag_name }}</a> ({{ tag[1].size }})</li>
{% endfor %}
</ul>
