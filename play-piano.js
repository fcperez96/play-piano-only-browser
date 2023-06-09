javascript: (()=>{
    function constructPiano() {
        let notes = {
            Do: "c",
            Re: "d",
            Mi: "e",
            Fa: "f",
            Sol: "g",
            La: "a",
            Si: "b"
        };
        let piano = {};

        Object.entries(notes).forEach(([key,value])=>{
            for (let i = 1; i < 4; i++) {
                let newKey = `${key}${i}`;
                let newValue = key === "La" || key === "Si" ? `${i + 1}${value}` : `${i}${value}`;
                piano[newKey] = newValue;

                if (key !== "Si") {
                    let newSharpKey = `${key}${i}#`;
                    let newSharpValue = key === "La" ? `${i + 1}${value}is` : `${i}${value}is`;
                    piano[newSharpKey] = newSharpValue;
                }
            }
        }
        );
        return piano;
    }

    const chords = ["Mi3", "Re3#", "Mi3", "Re3#", "Mi3", "Si2", "Re3", "Do3", "La2", "Do2", "Mi2", "La2", "Si2", "Mi2", 
                    "Sol2#", "Si2", "Do3", "Mi2", "Mi3", "Re3#", "Mi3", "Re3#", "Mi3", "Si2", "Re3", "Do3", "La2", "Do2", 
                    "Mi2", "La2", "Si2", "Mi2", "Do3", "Si2", "La2", "Mi3", "Re3#", "Mi3", "Re3#", "Mi3", "Si2", "Re3", 
                    "Do3", "La2", "Do2", "Mi2", "La2", "Si2", "Mi2", "Sol2#", "Si2", "Do3", "Mi2", "Mi3", "Re3#", "Mi3", 
                    "Re3#", "Mi3", "Si2", "Re3", "Do3", "La2", "Do2", "Mi2", "La2", "Si2", "Mi2", "Do3", "Si2", "La2", "Si2", 
                    "Do3", "Re3", "Mi3", "Sol2", "Fa3", "Mi3", "Re3", "Fa2", "Mi3", "Re3", "Do3", "Mi2", "Re3", "Do3", "Si2", 
                    "Mi3", "Re3#", "Mi3", "Re3#", "Mi3", "Si2", "Re3", "Do3", "La2", "Do2", "Mi2", "La2", "Si2", "Mi2", "Do3", 
                    "Si2", "La2"];
    let counter = 0;

    chords.forEach((chord)=>{
        let dataNote = constructPiano();
        counter++;
        let locator = document.querySelector(`span[data-note="${dataNote[chord]}"]`);
        setTimeout(()=>{
            locator.dispatchEvent(new Event('mousedown'));
            locator.dispatchEvent(new Event('mouseup'));
        }
        , counter * 350);
    }
    );
}
)()