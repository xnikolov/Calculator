<?php include 'includes/before_content.code';?>


<div class="calculator">
    <div class="inner">
        <h1 id="calcLabel">Fuel Economy</h1>
        <div class="calc-boxes">
        <form id="calcForm" action="">
            <input type="text" id="distanceInput" placeholder="Distance travelled" class="inputFuel" onkeyup="calcFuelEconomy()">
            <p>&</p>
            <input type="text" id="fuelInput" placeholder="Fuel quantity" class="inputFuel" onkeyup="calcFuelEconomy()">
        </div>
        <div class="result-box" id="result-container">
            <div class="inner-result">
                <input type="text" id="resultBoxFuel" class="inputFuel"><br>
                <input type="submit" onclick="floor()" value="Floor" id="floorBtn" class="resultBtn">
                <input type="reset" value="Reset" class="clearBtn resultBtn">
            </div>
        </div>
    </form>
    </div>
 </div>
</section>

<?php include 'includes/after-content.code';?>