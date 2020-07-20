<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
    <defs>
      <linearGradient
        id="grad1"
        x1="0%"
        y1="0%"
        x2="50%"
        y2="0%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.9" stop-color="#f97575" />
        <stop offset="1" stop-color="#ffffff" />
      </linearGradient>
      <marker
        id="startArrow"
        :markerWidth="markerWidth"
        :markerHeight="markerHeight"
        :refX="refX"
        :refY="refY"
        orient="auto"
      >
        <polygon :points="points" :fill="arrowColor" />
      </marker>
    </defs>
    <line
      :x1="x1"
      :y1="y1"
      :x2="x2"
      :y2="y2"
      stroke="url(#grad1)"
      stroke-width="4"
      marker-start="url(#startArrow)"
    />
    <text x="145" y="40" font-size="8" :fill="arrowColor">공격 방향</text>
  </svg>
</template>

<script>
export default {
  data: () => ({
    arrowColor: "#f97575",
    markerWidth: 5,
    markerHeight: 7,
    refX: 5,
    refY: 3.5,
    points: "8 0, 8 7, 2 3.5",
    x1: 150,
    y1: 20,
    x2: 180,
    y2: 20
  })
};
</script>

<style></style>
