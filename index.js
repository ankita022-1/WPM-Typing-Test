const sec1 = document.getElementById("sec1");
        const sec2 = document.getElementById("sec2");
        const retake = document.getElementById("retake");
        const arr = document.getElementById("arr");
        const textarea = document.getElementById("textarea");
        const start = document.getElementById("start");

        let array = [
            "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
            "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go",
            "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
        ];
        let start_time;
        let end_time;

        // calculation
        function cal(total_time) {
            const r_wpm = document.getElementById("r_wpm");
            const r_accuracy = document.getElementById("r_accuracy");
            const r_net_wpm = document.getElementById("r_net_wpm");
            // para
            let arr_words = arr.innerHTML.split(" ");
            let arr_count = arr_words.length;
            //textarea
            let textarea_ = textarea.value.trim();
            let textarea_words = textarea_.split(" ");
            let textarea_count = textarea_words.length;
            // wpm 
            let wpm = Math.round((textarea_count / total_time) * 60);
            if (textarea_.length == 0) {
                r_wpm.innerHTML = 0;
            } else {
                r_wpm.innerHTML = wpm;
            }
            // accuracy
            let num = 0;
            for (let i = 0; i < textarea_count; i++) {
                if (textarea_words[i] == arr_words[i]) {
                    num++;
                }
            }
            let accuracy = Math.round((num / textarea_count) * 100);
            r_accuracy.innerHTML = accuracy + "%";
            // net wpm       
            let net_wpm = Math.round(wpm * accuracy / 100);
            r_net_wpm.innerHTML = net_wpm;
        }

        let submit = "start";
        start.addEventListener('click', () => {
            if (submit == "start") {
                submit = "done";
                let ran = Math.floor(Math.random() * array.length);
                arr.innerHTML = array[ran];
                arr.setAttribute("style", "font-size: 20px; text-shadow:none;");
                textarea.disabled = false;
                start.setAttribute("style", "animation:none;");
                start.value = "Done";
                let d = new Date();
                start_time = d.getTime();
            }
            else {
                let d = new Date();
                end_time = d.getTime();
                // total time in seconds
                let total_time = (end_time - start_time) / 1000;
                // calculation
                cal(total_time);

                sec1.style.display = "none";
                sec2.style.display = "flex";
            }
        })

        retake.addEventListener('click', () => {
            window.location.reload();
        })