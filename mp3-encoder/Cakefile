{spawn, exec} = require "child_process"

task 'build', 'Compile coffee scripts into plain Javascript files', ->
  child = exec "coffee -c -j lib/main.js src/*.coffee src/**/*.coffee", (err, stdout, stderr) ->
    if err?
      console.error "Error :"
      console.dir   err
      console.log stdout
      console.error stderr
    else
      console.log "Done!"
