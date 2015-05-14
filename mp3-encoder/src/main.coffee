$ ->
  form = new EncodeFormView
    logsElem: $("div.logs")

  form.render().$el.appendTo $("div.form")
