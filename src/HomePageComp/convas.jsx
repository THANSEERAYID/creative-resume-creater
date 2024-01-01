import React, { useEffect, useRef } from 'react';

const FluidSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    }

    // ... (Copy the rest of your existing code here)

    window.onload = function () {
      m("h1");
    };

    function m(t) {
      for (
        var e,
          n = document.getElementById(t),
          i = n.innerHTML.replace("&amp;", "&").split(""),
          a = "",
          o = 0,
          s = i.length;
        s > o;
        o++
      ) {
        e = i[o].replace("&", "&amp");
        a += e.trim()
          ? '<span class="letter-' + o + '">' + e + "</span>"
          : "&nbsp;";
      }

      n.innerHTML = a;

      setTimeout(function () {
        n.className = "transition-in";
      }, 500 * Math.random() + 500);
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {/* You can add any additional React components or elements here */}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default FluidSimulation;
