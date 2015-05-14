{spawn}     = require "child_process"
{platform}  = require "os"
{chmodSync} = require "fs"


class Encoder
  constructor: ({@source, @bitrate, @target, @log}) ->
    @target  ||= @source.replace /\.wav$/, ".mp3"
    if @target == @source
      @target = @target.replace(/\.([^.]+)$/, ' encoded.$1')

    @bitrate ||= 128

    switch platform()
      when "darwin"
        @pathToBin = "vendor/bin/osx/shineenc"
      when "win32"
        @pathToBin = "vendor/bin/win32/shineenc.exe"

    # binary may not be executable due to zip compression..
    chmodSync @pathToBin, 0o755

  process: ->
    @log "Starting encoding process.."

    @child = spawn @pathToBin, ["-b", @bitrate, @source, @target]

    @child.stdout.on "data", (data) =>
      @log "#{data.toString().replace(/\n/g, '<br>')}"

    @child.stderr.on "data", (data) =>
      @log "ERROR: #{data.toString().replace(/\n/g, '<br>')}", 'error'

    @child.on "exit", (code) =>
      style = if code == 0 then 'good' else 'error'
      @log "Encoding process exited with code: #{code}", style
