<?php include 'includes/before_content.code';?>


<div class="calculator">
    <div class="inner">
        <h1 id="calcLabel">Power</h1>
        <div class="calc-boxes">
        <form id="calcForm" action="">
            <input type="text" id="calcBoxPower1" onkeyup="power()">
            <p><span id="xSpan">x</span><sup id="powerSpan">y</sup></p>
            <input type="text" id="calcBoxPower2" onkeyup="power()">
        </div>
        <div class="result-box" id="result-container">
            <div class="inner-result">
                <input type="text" id="resultBoxPower" ><br>
                <input type="submit" onclick="floor()" value="Floor" id="floorBtn" class="resultBtn">
                <input type="reset" value="Reset" class="clearBtn resultBtn">
            </div>
        </div>
        </form>
    </div>
 </div>
</section>

<?php include 'includes/after-content.code';?>