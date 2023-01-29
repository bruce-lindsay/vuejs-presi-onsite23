<template>
  <div>
    <h1>Data Flow Pattern</h1>
    <img class="flow" src="../assets/flow.png">
  <ul>
    <li>Unidirectional dataflow
      <a
          target="_blank"
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)#Unidirectional_data_flow">See Flux</a>
    </li>
    <li>
      Actions trigged by native browser events and XHR callbacks/promises
    </li>
    <li>
      State is wrapped with reactive implementation by the framework
    </li>
    <li>
      Dom elements automatically update when changes reactive state changes
    </li>
    <li>
      Efficient rendering (filtered to changed elements)
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "DataFlowPattern"
}
</script>

<style scoped>
.flow { width: 50%;}
</style>