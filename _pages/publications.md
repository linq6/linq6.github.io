---
layout: page
permalink: /publications/
title: Research
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<div class="publications">

  <!-- Custom Introduction -->
  <section class="introduction">
    <h2>Welcome to My Research Page</h2>
    <p>Here you can find a list of my publications, categorized by year and type of research.</p>
  </section>

  <!-- Publications List -->
  <section class="publications-list">
    {% bibliography %}
    {% for publication in site.scholar.publications %}
      <div class="publication-item">
        <h3>{{ publication.title }}</h3>
        <p>Debug: {{ publication | inspect }}</p>

        <p><strong>Author:</strong> {{ publication.author }}</p>
        <p><strong>Year:</strong> {{ publication.year }}</p>
        <p><strong>Year:</strong> {{ publication.year }}</p>
        <p>{% if publication.note %}<strong>Note:</strong> {{ publication.note }}{% endif %}</p>
        {% if publication.draft_url %}
          <a href="{{ publication.url }}" class="btn btn-primary" target="_blank">Draft</a>
        {% endif %}
      </div>
    {% endfor %}

  </section>
</div>

<!-- Add CSS styles for better formatting (optional) -->
<style>
  .publications {
    margin: 20px;
  }
  .introduction {
    margin-bottom: 20px;
  }
  .publications-list {
    border-top: 1px solid #ddd;
  }
  .publication-item {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    text-align: center;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
  }
  .btn:hover {
    background-color: #0056b3;
  }
</style>
