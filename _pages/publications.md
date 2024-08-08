---
layout: page
permalink: /publications/
title: Research
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<div class="publications">
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
    border-top: none; /* Remove the top border */
  }
  .publication-item {
    padding: 10px 0;
    border-bottom: none; /* Remove the bottom border */
  }
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    text-align: center;
    color: #007bff; /* Set text color to blue */
    background-color: transparent; /* Set background to transparent */
    text-decoration: none;
    border: 2px solid #007bff; /* Optional: Add a border to maintain button appearance */
  }
  .btn:hover {
    background-color: transparent; /* Ensure background stays transparent on hover */
    color: #0056b3; /* Optional: Change text color on hover */
  }
</style>
