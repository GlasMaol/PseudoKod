// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

SET variabel numberOfFriends till användarInput i siffror;
SET variabel tip till användarInput i procent; (en procentsats 10% = 0.10)
SET variabel total till användarInput i siffror;


Input "tip"
    If "tip" är en siffra RETURN Input och fortsätt till nästa steg;
        If tip > 0; (Kollar om siffran är mer än noll)
        End If    
    End If
    Else If "tip" är annat än siffra gå tillbaka till input "tip";
        PRINT "Oj, verkar som du inte skrev in en giltig siffra!"
    End Else
End Input

Input "total"
    If "total" är en siffra RETUEN Input och fortsätt till nästa steg;
        If total > 0; 
        End If
    End If
    Else If "total" är annat än siffra gå tillbaka till input "total";
        PRINT "Oj, verkar som du inte skrev in en giltig siffra!"
    End Else
End Input

Calculate variabel totalSumman
        totalSumman === (total + (total * tips))
        PRINT totalsumman

Input "numberOfFriends"
    If "numberOfFriends" är en siffra RETURN Input och fortsätt till nästa steg;
        If numberOfFriends > 0; 
        End If
    End If
    Else If "numberOfFriends" är annat än siffra gå tillbaka till input "numberOfFriends";
        PRINT "Oj, verkar som du inte skrev in en giltig siffra!"
    End Else
End Input

Calculate variabel pricePerPerson
    pricePerPerson === (totalsumman / numberOfFriends)
    PRINT "Varje person ska betala: (pricePerPerson)" 

*/






// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
     // Innehåller ALLA ord i det engelska språket        


end function

function isOneLetterApart(wordOne, wordTwo) Vad betyder isoneletterapart? Bättre med oneLetterChanged
    SET variabel diffCount till 0;


    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

-------------------------------------------------------------------------------------------
SET variabel ordbok = [..., ..., ...];
SET variabel startOrd till "FOUR";                                                         
SET variabel slutordOrd till "FIVE";
SET variabel nyaOrdet till (nyaOrdet)
SET variabel changeCount till 0;

Start puzzle
    PRINT "Välkommen till ordspelet!"

Input
    SET variabel startOrd = "four"
        är detta ett ord
        finns ordet i ordboken
    Return startOrd
    If startOrd är ett ord och är i ordboken
        PRINT "Fortsätt till Slutordet"
    End If

Input
    SET variabel SlutOrd = "five"
        är detta ett ord
        finns ordet i ordboken
        If slutord = startOrd
            PRINT "Du får inte använda samma ord. Försök igen."
        End If
        If slutOrd har annan antal bokstäver än startOrd
            PRINT "Orden måste samma antal bokstäver. Försök igen."
    Return slutOrd
    If startOrd är ett ord och är i ordboken
        PRINT "Nu är vi redo att gå till nästa steg"
    End If

Loop
    PRINT "Välj bokstav att byta ut"

    Input variabel NyBokstav
            If nyBokstav är en bokstav RETURN nybokstav
            End If
            If nyBokstav >< 1 bokstav
                PRINT "Oj, det blev fel. Här ska du bara skriva in en bokstav."
            End If
            If nyaOrdet är ett ord RETURN nyaOrdet
            End If
    End Input

    Calculate changeCount
        (changecount + 1) RETURN changeCount
    If nyaordet = slutOrd
        PRINT "Grattis, det tog +changeCount+ försök."
    Else
        PRINT nyaOrdet och gå tillbaka till Input "Välj bokstav att byta ut"
        End If

*/

