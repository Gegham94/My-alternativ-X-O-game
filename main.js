var startCount = false;
var fonContent = '';
var inputArr = [];
var inputValue = '';

function selectCount(count) {
    if (count != '' && count[0]!=0 && count >= 5 && count <= 100) {
        inputValue = count*1;
        createCount(count*1);
        $('.buttons').html(`<h2>Ո՞վ է սկսում խաղը՝</h2>
        <button class="user" onclick="userFu()">Մասնակիցը</button>
        <button class="pc" onclick="pcFu()">Համակարգիչը</button>
        <input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">`);
    } else {
        $('.buttons').html(`<br><h2 style="color:red; font-size:bold; margin-top:5px">Մուտքագրված տվյալը սխալ է... Ընտրեք 5-100 սահմանում որևէ թիվ։</h2>
        <input placeholder="n" type="text" id="areaCount" value="" style="width:50px">
        <button onclick="selectCount($('#areaCount').val())" style="color:green">✔</button>
        `);
    }
}
function createCount(Count) {
    var boxSize = 0;
    var nameCount = 0;
    if (Count <= 30) {
        boxSize = (500 / Count);
    } else boxSize = (940 / Count);
    for (var i = 0; i < Count; i++) {
        for (var j = 0; j < Count; j++) {
            fonContent +=
                (`<input id=` + nameCount + ` class="box webkit" onclick="fu(this.id)" style="width:` + boxSize + `px; height:` + boxSize + `px" readonly>`);
            inputArr.push(`` + nameCount + ``);
            nameCount++;
        }
        fonContent += `<br>`;
    }
    $('#board').html(fonContent);
}
function resetFu() {
    $('.fon').html('');
    fonContent = '';
    inputArr = [];
    inputValue = '';
    startCount = false;
    $('.buttons').html(`
    <h2 class="firstText">Մուտքագրի՛ր խաղատախտակի չափսերը (nxn)։ Նվ․ 5,  առ․ 100 չափանի:<br></h2>
    <input placeholder="n" type="text" id="areaCount" value="" style="width:50px">
    <button onclick="selectCount($('#areaCount').val())" style="color:green">✔</button>
    `);
}
function userFu() {
    startCount = true;
    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
}
function pcFu() {
    $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
    setTimeout(addRandomIcon, 1000);
}

//_______________________________________________________________________________User Step ___________________________________________________________________________________

function fu(getID) {
    if (startCount == true) {
        if ($('#' + getID).hasClass('addKrestik') || $('#' + getID).hasClass('addNolik')) {
            $('.buttons').html('<h2 style="color:red">Նշված վանդակը արդեն զբաղված է․․․</h2><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
        }
        else {
            $('#' + getID).addClass('addKrestik');
            startCount = false;
            inputArr.splice(inputArr.indexOf(getID), 1);
            checkFirstDiagonal();

            //___________________________________________________________________Check First Diagonal _____________________________________________________________________
            function checkFirstDiagonal(){
                if($('#' + (getID*1 + (inputValue+1))).hasClass('addKrestik')){
                    if($('#' + (getID*1 - (inputValue+1))).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 2*(inputValue+1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 2*(inputValue+1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else if($('#' + (getID*1 + 3*(inputValue+1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkSecondDiagonal();
                            }
                        }else if($('#' + (getID*1 - 2*(inputValue+1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 3*(inputValue+1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkSecondDiagonal();
                            }
                        }else{
                            checkSecondDiagonal();
                        }
                    } else if($('#' + (getID*1 + 2*(inputValue+1))).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 3*(inputValue+1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 + 4*(inputValue+1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkSecondDiagonal();
                            }
                        }else{
                            checkSecondDiagonal();
                        }
                    }else{
                        checkSecondDiagonal();
                    }
                }else if($('#' + (getID*1 - (inputValue+1))).hasClass('addKrestik')){
                    if($('#' + (getID*1 - 2*(inputValue+1))).hasClass('addKrestik')){
                        if($('#' + (getID*1 - 3*(inputValue+1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 4*(inputValue+1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkSecondDiagonal();
                            }
                        }else{
                            checkSecondDiagonal();
                        }
                    }else{
                        checkSecondDiagonal();
                    }
                }else{
                    checkSecondDiagonal();
                }
            };

            //____________________________________________________________________Check Second Diagonal ___________________________________________________________________________
            function checkSecondDiagonal(){
                if($('#' + (getID*1 + (inputValue-1))).hasClass('addKrestik')){   
                    if($('#' + (getID*1 -(inputValue-1))).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 2*(inputValue-1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 2*(inputValue-1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else if($('#' + (getID*1 + 3*(inputValue-1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkColumn();
                            }
                        }else if($('#' + (getID*1 - 2*(inputValue-1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 3*(inputValue-1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkColumn();
                            }
                        }else{
                            checkColumn();
                        }
                    } else if($('#' + (getID*1 + 2*(inputValue-1))).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 3*(inputValue-1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 + 4*(inputValue-1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkColumn();
                            }
                        }else{
                            checkColumn();
                        }
                    }else{
                        checkColumn();
                    }
                }else if($('#' + (getID*1 - (inputValue-1))).hasClass('addKrestik')){
                    if($('#' + (getID*1 - 2*(inputValue-1))).hasClass('addKrestik')){
                        if($('#' + (getID*1 - 3*(inputValue-1))).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 4*(inputValue-1))).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkColumn();
                            }
                        }else{
                            checkColumn();
                        }
                    }else{
                        checkColumn();
                    }
                }else{
                    checkColumn();
                }
            };

            //___________________________________________________________________Check Column _________________________________________________________________________________
            function checkColumn(){
                if($('#' + (getID*1 + inputValue)).hasClass('addKrestik')){   
                    if($('#' + (getID*1 - inputValue)).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 2*inputValue)).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 2*inputValue)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else if($('#' + (getID*1 + 3*inputValue)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkRow();
                            }
                        }else if($('#' + (getID*1 - 2*inputValue)).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 3*inputValue)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkRow();
                            }
                        }else{
                            checkRow();
                        }
                    }else if($('#' + (getID*1 + 2*inputValue)).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 3*inputValue)).hasClass('addKrestik')){
                            if($('#' + (getID*1 + 4*inputValue)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkRow();
                            }
                        }else{
                            checkRow();
                        }
                    }else{
                        checkRow();
                    }
                }else if($('#' + (getID*1 - inputValue)).hasClass('addKrestik')){
                    if($('#' + (getID*1 - 2*inputValue)).hasClass('addKrestik')){
                        if($('#' + (getID*1 - 3*inputValue)).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 4*inputValue)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                checkRow();
                            }
                        }else{
                            checkRow();
                        }
                    }else{
                        checkRow();
                    }
                }else{
                    checkRow();
                }
            };

            //_____________________________________________________________________Check Row _______________________________________________________________________________
            function checkRow(){
                if($('#' + (getID*1 + 1)).hasClass('addKrestik')){   
                    if($('#' + (getID*1 - 1)).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 2)).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 2)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else if($('#' + (getID*1 + 3)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                setTimeout(addRandomIcon,1000);
                                $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }
                        }else if($('#' + (getID*1 - 2)).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 3)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                setTimeout(addRandomIcon,1000);
                                $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }
                        }else{
                            setTimeout(addRandomIcon,1000);
                            $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                        }
                    }else if($('#' + (getID*1 + 2)).hasClass('addKrestik')){
                        if($('#' + (getID*1 + 3)).hasClass('addKrestik')){
                            if($('#' + (getID*1 + 4)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                setTimeout(addRandomIcon,1000);
                                $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }
                        }else{
                            setTimeout(addRandomIcon,1000);
                            $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                        }
                    }else{
                        setTimeout(addRandomIcon,1000);
                        $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                    }
                }else if($('#' + (getID*1 - 1)).hasClass('addKrestik')){
                    if($('#' + (getID*1 - 2)).hasClass('addKrestik')){
                        if($('#' + (getID*1 - 3)).hasClass('addKrestik')){
                            if($('#' + (getID*1 - 4)).hasClass('addKrestik')){
                                $('.buttons').html('<h1 style="color:blue">ԴՈՒՔ ՀԱՂԹԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }else{
                                setTimeout(addRandomIcon,1000);
                                $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                            }
                        }else{
                            setTimeout(addRandomIcon,1000);
                            $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                        }
                    }else{
                        setTimeout(addRandomIcon,1000);
                        $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                    }
                }else{
                    setTimeout(addRandomIcon,1000);
                    $('.buttons').html('<h3>Սպասի՛ր համակարգչի քայլին․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }
            };

        }
    }
    if(inputArr.length==0){
        $('.buttons').html('<h1>ՈՉ ՈՔԻ...</h1>');
    }
};

// ______________________________________________________________________ Computer Random Step ____________________________________________________________________

function addRandomIcon() {
    startCount = true;
    var randID = Math.floor(Math.random() * inputArr.length);
    $('#' + inputArr[randID]).addClass('addNolik');
    inputArr.splice(randID, 1);
    checkFirstDiagonalRandom();

// ______________________________________________________________________Check First Diagonal Random _______________________________________________________________
function checkFirstDiagonalRandom(){
    if($('#' + (randID + (inputValue+1))).hasClass('addNolik')){
        if($('#' + (randID - (inputValue+1))).hasClass('addNolik')){
            if($('#' + (randID + 2*(inputValue+1))).hasClass('addNolik')){
                if($('#' + (randID - 2*(inputValue+1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else if($('#' + (randID + 3*(inputValue+1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkSecondDiagonalRandom();
                }
            }else if($('#' + (randID - 2*(inputValue+1))).hasClass('addNolik')){
                if($('#' + (randID - 3*(inputValue+1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkSecondDiagonalRandom();
                }
            }else{
                checkSecondDiagonalRandom();
            }
        } else if($('#' + (randID + 2*(inputValue+1))).hasClass('addNolik')){
            if($('#' + (randID + 3*(inputValue+1))).hasClass('addNolik')){
                if($('#' + (randID + 4*(inputValue+1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkSecondDiagonalRandom();
                }
            }else{
                checkSecondDiagonalRandom();
            }
        }else{
            $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
        }
    }else if($('#' + (randID - (inputValue+1))).hasClass('addNolik')){
        if($('#' + (randID - 2*(inputValue+1))).hasClass('addNolik')){
            if($('#' + (randID - 3*(inputValue+1))).hasClass('addNolik')){
                if($('#' + (randID - 4*(inputValue+1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkSecondDiagonalRandom();
                }
            }else{
                checkSecondDiagonalRandom();
            }
        }else{
            checkSecondDiagonalRandom();
        }
    }else{
        checkSecondDiagonalRandom();
    }
};

//____________________________________________________________________Check Second Diagonal Random _____________________________________________________________________
function checkSecondDiagonalRandom(){
    if($('#' + (randID + inputValue-1)).hasClass('addNolik')){   
        if($('#' + (randID - inputValue-1)).hasClass('addNolik')){
            if($('#' + (randID + 2*(inputValue-1))).hasClass('addNolik')){
                if($('#' + (randID - 2*(inputValue-1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else if($('#' + (randID + 3*(inputValue-1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkColumnRandom();
                }
            }else if($('#' + (randID - 2*(inputValue-1))).hasClass('addNolik')){
                if($('#' + (randID - 3*(inputValue-1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkColumnRandom();
                }
            }else{
                checkColumnRandom();
            }
        } else if($('#' + (randID + 2*(inputValue-1))).hasClass('addNolik')){
            if($('#' + (randID + 3*(inputValue-1))).hasClass('addNolik')){
                if($('#' + (randID + 4*(inputValue-1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkColumnRandom();
                }
            }else{
                checkColumnRandom();
            }
        }else{
            checkColumnRandom();
        }
    }else if($('#' + (randID - inputValue-1)).hasClass('addNolik')){
        if($('#' + (randID - 2*(inputValue-1))).hasClass('addNolik')){
            if($('#' + (randID - 3*(inputValue-1))).hasClass('addNolik')){
                if($('#' + (randID - 4*(inputValue-1))).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkColumnRandom();
                }
            }else{
                checkColumnRandom();
            }
        }else{
            checkColumnRandom();
        }
    }else{
        checkColumnRandom();
    }
};

//________________________________________________________________Check Column Random ___________________________________________________________________________________
function checkColumnRandom(){
    if($('#' + (randID + inputValue)).hasClass('addNolik')){   
        if($('#' + (randID - inputValue)).hasClass('addNolik')){
            if($('#' + (randID + 2*inputValue)).hasClass('addNolik')){
                if($('#' + (randID - 2*inputValue)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else if($('#' + (randID + 3*inputValue)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkRowRandom();
                }
            }else if($('#' + (randID - 2*inputValue)).hasClass('addNolik')){
                if($('#' + (randID - 3*inputValue)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkRowRandom();
                }
            }else{
                checkRowRandom();
            }
        }else if($('#' + (randID + 2*inputValue)).hasClass('addNolik')){
            if($('#' + (randID + 3*inputValue)).hasClass('addNolik')){
                if($('#' + (randID + 4*inputValue)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkRowRandom();
                }
            }else{
                checkRowRandom();
            }
        }else{
            checkRowRandom();
        }
    }else if($('#' + (randID - inputValue)).hasClass('addNolik')){
        if($('#' + (randID - 2*inputValue)).hasClass('addNolik')){
            if($('#' + (randID - 3*inputValue)).hasClass('addNolik')){
                if($('#' + (randID - 4*inputValue)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    checkRowRandom();
                }
            }else{
                checkRowRandom();
            }
        }else{
            checkRowRandom();
        }
    }else{
        checkRowRandom();
    }
};

//_____________________________________________________________________Chech Row Random _________________________________________________________________________
function checkRowRandom(){
    if($('#' + (randID + 1)).hasClass('addNolik')){   
        if($('#' + (randID -1)).hasClass('addNolik')){
            if($('#' + (randID + 2)).hasClass('addNolik')){
                if($('#' + (randID - 2)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else if($('#' + (randID + 3)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }
            }else if($('#' + (randID - 2)).hasClass('addNolik')){
                if($('#' + (randID - 3)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }
            }else{
                $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
            }
        }else if($('#' + (randID + 2)).hasClass('addNolik')){
            if($('#' + (randID + 3)).hasClass('addNolik')){
                if($('#' + (randID + 4)).hasClass('addNolik')){
                    $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }else{
                    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }
            }else{
                $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
            }
        }else{
            $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
        }
    }else if($('#' + (randID - 1)).hasClass('addNolik')){
            if($('#' + (randID - 2)).hasClass('addNolik')){
                if($('#' + (randID - 3)).hasClass('addNolik')){
                    if($('#' + (randID - 4)).hasClass('addNolik')){
                        $('.buttons').html('<h1 style="color:red">ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ...</h1><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                    }else{
                        $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                    }
                }else{
                    $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
                }
            }else{
                $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
            }
        }else{
            $('.buttons').html('<h3>Ընտրի՛ր Քո վանդակը․․․</h3><br><input type="reset" class="user" onclick="resetFu()" value="Վերսկսել խաղը ↻">');
        } 
    };
    if(inputArr.length==0){
        $('.buttons').html('<h1>ՈՉ ՈՔԻ...</h1>');
    }
};