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
    If "total" är en siffra RETURN Input och fortsätt till nästa steg;
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

SET variabel ordbok = [..., ..., ...]; simulerar alla ord i en ordbok.
variabel nyaOrdet till (nyaOrdet)
SET variabel changeCount till 0;

Start puzzle
    PRINT "Välkommen till ordspelet!"

Input
    SET variabel startOrd = "four" (four kan bytas ut mot userInput eller random)
        Return startOrd
    If startOrd är ett ord och är i ordboken
        PRINT "Fortsätt till Slutordet och skriva in ett nytt ord med samma antal bokstäver."
    End If
    Else
        PRINT "Oj, ordet finns inte i ordboken, försök igen!"

Input
    SET variabel SlutOrd = "five" (four kan bytas ut mot userInput eller random)
        RETURN slutOrd
    If slutOrd = startOrd
        PRINT "Du får inte använda samma ord. Försök igen."
    End If
    If slutOrd har annan antal bokstäver än startOrd
        PRINT "Orden måste ha samma antal bokstäver. Försök igen och skriv ett ord med samma antal boksäver som startordet."
        Return slutOrd
    End If
    If slutOrd är ett ord och är i ordboken
        PRINT "Nu är vi redo att gå till nästa steg"
    End If
    Else
        PRINT "Oj, ordet finns inte i ordboken, försök igen!"

Loop där användaren kan byta ut bokstäver och skapa nya ord
    PRINT "Välj bokstav att byta ut"

    Input variabel NyBokstav
        If nyBokstav är en bokstav
            Byt ut vald bokstav i nyaOrdet med nyBokstav;
            If nyaOrdet finns i ordboken;
                SET changeCount till changeCount + 1;
                RETURN nyaOrdet
            Else
                PRINT "Oj, ordet finns inte i ordboken, försök igen!"
            End If
        End If
        If nyBokstav >< 1 bokstav
            PRINT "Oj, det blev fel. Här ska du bara skriva in en bokstav."
        End If
    End Input

    If nyaOrdet = slutOrd
        PRINT "Grattis, det tog +changeCount+ försök."
    Else
        PRINT nyaOrdet och gå tillbaka till Input "Välj bokstav att byta ut"
    End If
End Loop

*/

