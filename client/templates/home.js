Template.home.events({
    "change #upload-file": function(e, t) {
        var input = t.find("#upload-file");
        var text = t.$("#upload-text");

        if (input.files.length === 0) {
            text.text("Click here to browse for your broken save file (or drag and drop)");
            return;
        }

        var file = input.files[0];
        text.text("Reading '" + file.name + "'...");

        // Prepare to read.
        var reader = new FileReader();
        reader.onload = function() {
            var arrayBuffer = reader.result;
            var len = arrayBuffer.byteLength;
            var uint8Array = new Uint8Array(arrayBuffer);

            if (uint8Array[594] === 99) {
                uint8Array[594] = 100;
                var blob = new Blob([uint8Array]);
                text.text("Success!  Saving...");
                setTimeout(function() {
                    saveAs(blob, file.name);
                }, 1000);
            } else {
                text.text("That doesn't look like a 99% completion save file.  Please open a support issue on GitHub (unless you made a mistake)");
            }
        };

        // Read.
        reader.readAsArrayBuffer(file);
    }
});

