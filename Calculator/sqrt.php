<?php include 'includes/before_content.code';?>


<div class="calculator">
    <div class="inner">
        <h1 id="calcLabel">Square root</h1>
        <div class="calc-boxes">
        <form id="calcForm" action="">
            <input type="text" id="calcBoxSqrt1" onkeyup="calcSqrt()"><br>
            <p>√</p>

        </div>
        <div class="result-box" id="result-container">
            <div class="inner-result">
                <input type="text" id="resultBoxSqrt"><br>  
                <input type="submit" onkeypress="floor()" value="Floor" id="floorBtn" class="resultBtn">
                <input type="reset" value="Reset" class="clearBtn resultBtn">
            </div>
         </div>
         </form>
    </div>
 </div>
</section>

<?php include 'includes/after-content.code';?>