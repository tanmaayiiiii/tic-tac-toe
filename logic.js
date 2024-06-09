let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let result;
let x = true;

const winPattern = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];




let turns = 0;
boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (x == true) {
            box.innerText = "X";
            box.disabled = true;
            turns++;
            x = false;
        }
        else {
            box.innerText = "O";
            x = true;
            turns++;
            box.disabled = true;
        }
        console.log(turns);


        if (turns >= 5) {
            winPattern.forEach((pattern) => {

                if ((boxes[pattern[0]].innerText == "X" && boxes[pattern[1]].innerText == "X" && boxes[pattern[2]].innerText == "X") || (boxes[pattern[0]].innerText == "O" && boxes[pattern[1]].innerText == "O" && boxes[pattern[2]].innerText == "O")) {
                    console.log("winner");
                    result = document.createElement("h1");
                    boxes.forEach((box) => {
                        box.disabled = true;
                    });

                    result.innerText = boxes[pattern[0]].innerText + " is the winner!";
                    document.querySelector("body").append(result);
                }
            });
        }

    });

});


reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        result.remove();
    });
});