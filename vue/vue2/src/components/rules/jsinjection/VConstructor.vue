<template>
  <div class="1">
    <div>
      Using constructor directive:
      <div class="card" style="text-align: left; height: 100%">
        <textarea id="editor"></textarea>
      </div>
    </div>
    <br/>
    <div>
      <b>Output:</b>
      <h1 v-if="message">{{ constructor.constructor(message)() }}</h1>
    </div>
  </div>
</template>

<script>
const example = `
//HTML template
  <h1 v-if="message">{{ constructor.constructor(message)() }}</h1>

//Vue component code 
/* Example attack vector: alert(1) */  
let message = document.location.hash.substring(1);

export default {
  name: "VConstructor",
  data: function () {
    return {
      message: message
    };
  },
};`;

//Vue
let message = document.location.hash.substring(1);

export default {
  name: "VConstructor",
  data: function () {
    return {
      message: message,
    };
  },
  mounted: function () {
    let editorEle = document.getElementById("editor");

    if (editorEle) {
      var editor = window.CodeMirror.fromTextArea(editorEle, {
        mode: "javascript",
        lineNumbers: true,
        matchBrackets: true,
      });
      editor.setValue("");
      editor.setValue(example);
      editor.save();
    }
  },
};
</script>
