# Symmetric_CypherSite
A JS Website with Caesar &amp; Polyalphabetic & vernam cyphers + deciphers. It also has frequency analysis using a graph.

View the site at: https://george9waller.github.io/Symmetric_CypherSite/

**Site Functions**
-
#####**Ceaser Shift**
- Shifts input box by chosen value. Converts input to all lowercase and only shifts within range of lowercase letters. 
All punctuation and special characters are preserved.
- To decypher the shift is again reduced to within 0-26 and subtracted from the ASCII of the input, rolling back to the
end of lowercase characters is necessary.

#####**Polyalphabetic shift**
- Takes an input and shift string. Shifts each input by the corresponding character in shift string looping shift string 
if necessary. All punctuation and special characters are preserved.
- To decypher the ASCII of the shift string is subtracted from the input rolling back to the end of lowercase characters
if necessary.

#####**Vernam Shift**
- Takes an input string. Generates a shift string the same length as the input from ASCII 33 to 126 inclusive. Using 
bitwise XOR the input and key are combined to produce a resulting encrypted string. If the result is less than 33 then
the code is shifted by 126 to make all characters visible using extended unicode characters.
- To decypher the XOR operation is performed on the input and shift string. if the result is greater than 127 it is 
reduced by 176 to reverse the use of extended unicode characters and return the special characters from the original
text.

**Usability Features**
-
- Copy buttons below original and result text elements to copy all the text in the element to clipboard.
- Textarea fields select all text when clicked on to aid deleted and copy/pasting text into them.
- On second use the cypher/decyper buttons scroll to the original & resulting text elements below graph.
- Graph shows values in hovered on.
- Up arrow scroll to top appears when scrolling down page to get back to interface once a graph is in the way.