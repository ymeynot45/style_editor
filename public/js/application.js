$(document).ready(function() {
  
  var styling = function(submission){ 
    var data = {};

    $(submission).find('input').each(function(i, field){
      data[field.name] = field.value;
      $(data.selector).css(data.property, data.value);
    });
  };

  $('#style_editor').on('submit',function(event){
    event.preventDefault();
    styling(this);
  });

  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
