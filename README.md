# Here comes the sun  :sunny:
Exemple de com fer interactiu un pòster que ens va ensenyar el Dani a la seva presentació.

La interactivitat és bastant bàsica: treballem amb els events `mouseover` per desplegar el sol, i l'event `mouseout` per plegar-lo de nou. Hem vist a classe que podem definir respostes a events de diverses maneres, en aquest cas ho hem fet des de l'HTML. 

Quan el ratolí passa per sobre del div groc (`onmouseover`), cridem a la funció que posa cada cercle a l'alçada que toca, modificant la propietat d'estil `bottom`. De la mateixa manera, fem servir un altre event de ratolí (`onmouseout`) per cridar a una altra funció que torna a posar els divs avall.
