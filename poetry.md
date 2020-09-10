---
layout: default
title: TH - Poetry
cssBundles:
  - main.min.css
jsBundles:
  - main.min.js
---

<div class="path-container">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="page-path">
            <a href="index.html">Home</a>
            <a href="creative-writing.html">/Creative Writing</a>
            <a href="poetry.html">/Poetry</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="page-content-container">
    <div class="container inner-content-container">
      <div class="row">
        <div class="col-md-6">
          <ul>
            <li class="page-list"><span class="page-list-title" >List</span>
              <ul class="page-item-list">
                {% for post in site.posts %}
                  {% if post.category == "poetry" %}
                    <li><a class="page-item-title" href="{{post.permalink}}">{{post.title}}</a></li>
                  {% endif %}
                {% endfor %}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>