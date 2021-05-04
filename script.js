var showingSourceCode = false;
        var isInEditMode = true;

        function enableEditMode (){ 
            richTextField.document.designMode = 'On';
        }

        function execCmd(command) { 
            richTextField.document.execCommand(command, false, null);
        }

        function execCommandWithArg (command, arg){
            richTextField.document.execCommand(command, false, arg);
        }

        function toggleSource(){
            if(showingSourceCode){
                richTextField.document.getElementByTagName('body')[0].innerHTML = richTextField.document.getElementByTagName('body')[0].textContent;
                showingSourceCode = false;
            }else {
                richTextField.document.getElementByTagName('body')[0].textContent = richTextField.document.getElementByTagName('body')[0].innerHTML;
                showingSourceCode = true;
            }
        }
        
        function toggleEdit (){
            if(isInEditMode){
                richTextField.document.designMode = 'Off';
                isInEditMode = false;
            } else {
                richTextField.document.designMode = 'On';
                isInEditMode = true;
            }
        }

        //save
        function check_web_storage_support() {
            if(typeof(Storage) !== "undefined") {
        return(true);
        }
            else {
        alert("Web storage unsupported!");
        return(false);
            }
        }

        function display_saved_note() {
            if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
        }
        if(result === null) {
        result = "No note saved";
        }
        document.getElementById('textArea').contentWindow.document.body.innerHTML = result;
        }
    

        function save() {
            if(check_web_storage_support() == true) {

        var area = document.getElementById("textArea");
        var content = area.contentWindow.document.body.innerHTML;

            if(content != '') {
                localStorage.setItem("note", content);
                console.log(content);
        }
            else {
                alert("Nothing to save");
                    }
                }
            }

            display_saved_note();

            function clearbtn() {
                document.getElementById('textArea').contentWindow.document.body.innerHTML = "";
                
            }