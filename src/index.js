import './sass/styles.scss';
import $ from 'jquery';
import { Entry } from './journal';

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    $(".output").append(entry.count());
    $(".output").append(entry.charCount());
    $(".output").append(entry.getTeaser());
  });
});
