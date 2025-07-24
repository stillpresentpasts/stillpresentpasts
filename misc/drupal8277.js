// Minimal Drupal JavaScript API for archived site
var Drupal = Drupal || {};

// Drupal behaviors system
Drupal.behaviors = {};

// Drupal settings object
Drupal.settings = Drupal.settings || {};

// Basic Drupal.t translation function
Drupal.t = function(str) {
  return str;
};

// Initialize behaviors when document is ready
jQuery(document).ready(function($) {
  // Run all registered behaviors
  for (var behavior in Drupal.behaviors) {
    if ($.isFunction(Drupal.behaviors[behavior])) {
      try {
        Drupal.behaviors[behavior](document);
      } catch (e) {
        // Silently handle behavior errors
      }
    }
  }
});