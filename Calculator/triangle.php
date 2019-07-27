<?php include 'includes/before_content.code';?>




<div class="calculator">
    <div class="inner">
        <h1 id="calcLabel">Basic calculations</h1>
        <div class="calc-boxes">
        <form id="calcForm" action="">
            <input type="number" id="calcBox1" onkeyup="calcTriangle()">
            <select id="options">
                <option value="+">P</option>
                <option value="-">S</option>
                <option value="x">Pythagoras</option>
             </select>
            <input type="number" id="calcBox2" onkeyup="calcTriangle()">
        </div>
        <div class="result-box" id="result-container">
            <div class="inner-result">
               
                    <input type="number" id="resultBox" class="resultOutput">
                    <input type="button" onclick="floor()" value="Floor" id="floorBtn" class="floorBtn resultBtn">
                    <input type="reset" value="Reset" id="clearButton" class="clearBtn resultBtn">
        </form>
            </div>
        </div>
    </div>
 </div>
</section>

<?php include 'includes/after-content.code';?>