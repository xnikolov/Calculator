<?php include 'includes/before_content.code';?>


<div class="calculator">
    <div class="inner">
        <h1 id="calcLabel">Calculate the Current Price of Your Car</h1>
        <div class="calc-boxes">
        <form id="calcForm" action="">

            <input type="text" id="priceInput" placeholder="Price When Bought" class="inputYourCar" onkeyup="execute()"><br>
            <input type="text" id="init_mileage" placeholder="Mileage When Bought" class="inputYourCar" onkeyup="execute()">
            <input type="text" id="current_mileage" placeholder="Current Mileage" class="inputYourCar" onkeyup="execute()"><br>
            <select name="condition" id="car_condition" class="select-box" onchange="execute()">
                <option class="options" value="default_exterior">Overall Condition</option>
                <option class="options" value="good">Good</option>
                <option class="options" value="reasonable">Reasonable</option>
                <option class="options" value="poor">Poor</option>
            </select>
        </div>
        <div class="result-box" id="result-container">
            <div class="inner-result">
                <input type="text" id="resultBoxCarPrice" class="inputFuel"><br>
                <input type="submit" onclick="floor()" value="Floor" id="floorBtn" class="resultBtn">
                <input type="reset" value="Reset" class="clearBtn resultBtn">
            </div>
        </div>
    </form>
    </div>
 </div>
</section>

<?php include 'includes/after-content.code';?>