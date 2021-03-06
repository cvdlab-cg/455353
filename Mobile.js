//Primo mobile

	var pareti1 = SIMPLEX_GRID([[0.40],REPLICA(2)([0.02,-0.76]),[0.9]]);
	var ripiani1 = SIMPLEX_GRID([([0.40]),([0.78]),REPLICA(2)([0.02,-0.36])]);
	var ripianosup = SIMPLEX_GRID([([0.40]),([0.78]),[-0.88,0.02]]);
	var pannello = SIMPLEX_GRID([([0.02]),([0.80]),[0.40]]);
	var mediana1 = SIMPLEX_GRID([([0.4]),([-0.25,0.02]),[-0.635,0.265]]);
	var mediana2 = T([1,2])([0.25,-0.255])(mediana1)
	var ripianomediano = SIMPLEX_GRID([([0.40]),([0.78]),[-0.635,0.02]]);
	var separe = SIMPLEX_GRID([([-0.02,0.3]),([-0.385,0.02]),[-0.02,0.36]]);
	var out1 = COLOR([1,0.87,0.67])(STRUCT([pareti1,ripiani1,ripianosup,pannello,ripianomediano,mediana1,mediana2,separe]));
	var vetro1 = BOUNDARY(CUBOID([0.01,0.76,0.36]))
	var vetrocolorato1 = T([0,1,2])([0.39,0.02,0.02])(COLOR([0.49,0.62,0.75,0.5])(vetro1))
	var pomello1 = T([0,1,2])([0.40,0.38,0.32])(CUBOID([0.01,0.01,0.01]));
	var pomello2 = T([1])([0.04])(pomello1);
	var pomelli = COLOR([1,0.84,0])(STRUCT([pomello1,pomello2]))
	var out = STRUCT([out1,vetrocolorato1,pomelli])
DRAW(out);

//Secondo mobile

	var pareti2 = SIMPLEX_GRID([[-0.02,0.38],REPLICA(2)([0.02,-0.96]),[0.4]]);
	var ripiani2 = SIMPLEX_GRID([([0.40]),([0.98]),REPLICA(2)([0.02,-0.36])]);
	var pannello2 = SIMPLEX_GRID([([0.02]),[1],[-0.1,0.30]]);
	var mediana3 = SIMPLEX_GRID([[-0.02,0.30],[-0.32,0.02],[-0.02,0.36]]);
	var mediana4 = SIMPLEX_GRID([[-0.05,0.25],[-0.34,0.66],[-0.20,0.02]]);
	var struttura = COLOR([1,0.87,0.67])(STRUCT([pareti2,ripiani2,pannello2,mediana3,mediana4]))
	var vetro2 = BOUNDARY(CUBOID([0.01,0.96,0.36]))
	var vetrocolorato2 = T([0,1,2])([0.39,0.02,0.02])(COLOR([0.49,0.62,0.75,0.5])(vetro2))
	var pomello3 = T([1])([0.1])(pomelli)
	var out2 = T([1])([0.8])(STRUCT([struttura]))
DRAW(out2);

//Terzo Mobile

	var out3 = T([1])([1.8])(out)
DRAW(out3);

//Televisore

	var contorno1 = SIMPLEX_GRID([[0.02],REPLICA(2)([0.02,-0.80]),[0.44]]);
	var contorno2 = SIMPLEX_GRID([[0.02],[0.84],REPLICA(2)([0.02,-0.4])]);
	var retro = T([0,1,2])([-0.005,0.02,0.02])(CUBOID([0.005,0.80,0.4]))
	var schermo = BOUNDARY(CUBOID([0.02,0.80,0.4]))
	var schermocolorato = T([0,1,2])([0,0.02,0.02])(COLOR([0.15,0.15,0.15])(schermo));
	var scheletro = T([0,1,2])([0.2,0.88,0.45])(STRUCT([contorno1,contorno2,schermocolorato,retro]));
DRAW(scheletro);

//Piedistallo decente

	var domain = PROD1x1([INTERVALS(1)(40),INTERVALS(1)(40)]);
	var c1 = CUBIC_HERMITE(S0)([[0,0,0.3],[0,0,0.3],[-0.1,0.1,0],[0.1,0.1,0]]);
	var c2 = CUBIC_HERMITE(S0)([[0.1,0,0],[0.1,0,0],[-0.5,2,0],[0.5,2,0]]);
	var sur3 = CUBIC_HERMITE(S1)([c1,c2,[0,0,0.4],[1,0,0]]);
	var piedistallo = MAP(sur3)(domain);
	var piedistalloFinale = T([0,1,2])([0.2,1.30,0.4])(piedistallo)
DRAW(piedistalloFinale);

//Libri

	var libri1 = COLOR([1,0.27,0.1])(T([0,1,2])([0.05,0.02,0.65])(CUBOID([0.1,0.03,0.15])))
	var libri2 = COLOR([0.54,0.27,0.07])(T([0,1,2])([0.02,0.04,0.65])(CUBOID([0.15,0.032,0.17])))
	var libri3 = COLOR([0.28,0.249,0.54])(T([0,1,2])([0.02,0.062,0.65])(CUBOID([0.14,0.032,0.10])))
	var libri = STRUCT([libri1,libri2,libri3])
DRAW(libri);

//Bajour

	var domain = PROD1x1([INTERVALS(1)(30),INTERVALS(1)(30)]);
	var b0 = BEZIER(S0)([[0,0,0.2],[0,-0.1,0.2],[-0.2,-0.1,0.2],[-0.2,0.1,0.2],[0,0.1,0.2],[0,0,0.2]]);
	var b1 = BEZIER(S0)([[0.1,0,0.1],[0.1,-0.3,0.1],[-0.4,-0.3,0.1],[-0.4,0.3,0.1],[0.1,0.3,0.1],[0.1,0,0.1]]);
	var b2 = BEZIER(S0)([[0,0,0],[0,-0.1,0],[-0.2,-0.1,0],[-0.2,0.1,0],[0,0.1,0],[0,0,0]]);
	var bout = MAP(BEZIER(S1)([b0,b1,b2]))(domain);
	var bout2 = COLOR([1,0.89,0.76])(bout)
	var b00 = BEZIER(S0)([[0,0,0.3],[0,-0.1,0.3],[-0.2,-0.1,0.3],[-0.2,0.1,0.3],[0,0.1,0.3],[0,0,0.3]]);
	var b10 = BEZIER(S0)([[0.05,0,0.2],[0.05,-0.15,0.2],[-0.2,-0.15,0.2],[-0.2,0.15,0.2],[0.05,0.15,0.2],[0.05,0,0.2]]);
	var b20 = BEZIER(S0)([[0.1,0,0.15],[0.1,-0.3,0.15],[-0.4,-0.3,0.15],[-0.4,0.3,0.15],[0.1,0.3,0.15],[0.1,0,0.15]]);
	var bout0 = MAP(BEZIER(S1)([b00,b10,b20]))(domain);
	var bout20 = COLOR([1,0.97,0.86])(bout0);
	var bajour = T([0,1,2])([0.20,2.4,0.9])(STRUCT([bout2,bout20]))
DRAW(bajour);

//Sub

	var sub1 = CUBOID([0.15,0.2,0.3])
	var sub2 = T([0,1,2])([0.15,0,0.1])(CUBOID([0.1,0.2,0.2]))
	var sub3 = SIMPLEX_GRID([[-0.15,0.1],REPLICA(2)([0.05,-0.1]),[0.1]]);
	var sub4 = SIMPLEX_GRID([[-0.15,0.1],([0.20]),[0.05]]);
	var sub5 = T([0,1,2])([0.1,0.86,0.02])(STRUCT([sub1,sub2,sub3,sub4]))
DRAW(sub5);

//Vaso

var domain = PROD1x1([INTERVALS(1)(40),INTERVALS(1)(40)]);
var bv0 = BEZIER(S0)([[0,0,0],[0,-0.022,0],[-0.04,-0.022,0],[-0.04,0.022,0],[0,0.022,0],[0,0,0]]);
var bv1 = BEZIER(S0)([[0.05,0,0.01],[0.05,-0.072,0.01],[-0.14,-0.072,0.01],[-0.14,0.072,0.01],[0.05,0.072,0.01],[0.05,0,0.01]]);
var bv11 = BEZIER(S0)([[0,0,0.03],[0,-0.012,0.03],[-0.03,-0.012,0.03],[-0.03,0.012,0.03],[0,0.012,0.03],[0,0,0.03]]);
var bv2 = BEZIER(S0)([[0,0,0.05],[0,-0.022,0.05],[-0.04,-0.022,0.05],[-0.04,0.022,0.05],[0,0.022,0.05],[0,0,0.05]]);
var bvout = MAP(BEZIER(S1)([bv0,bv1,bv11,bv2]))(domain);
var bvout2 = COLOR([1,0.89,0.76])(bvout)

//STELO fiore
	var domain = INTERVALS(1)(20);
	var curveMapping = BEZIER(S0)([[0.1,0.1,0],[0.1,0.1,0.05],[0.12,0.12,0.07],[0.15,0.08,0.1]]);
	var curve = MAP(curveMapping)(domain);
		var stelo = STRUCT([COLOR([0,1,0])(curve)])
//Petalo 1
	var domain = INTERVALS(1)(20);
	var curveMapping = BEZIER(S0)([[0.15,0.08,0.1],[0.15,0.06,0.11],[0.10,0.06,0.10],[0.10,0.08,0.1],[0.15,0.08,0.1]]);
	var curve = MAP(curveMapping)(domain);
		var petalo1 = STRUCT([COLOR([1,0,0])(curve)])
//Petalo 2	
	var domain = INTERVALS(1)(20);
	var curveMapping = BEZIER(S0)([[0.15,0.08,0.1],[0.1,0.08,0.1],[0.1,0.12,0.1],[0.15,0.12,0.11],[0.15,0.08,0.1]]);
	var curve = MAP(curveMapping)(domain);
		var petalo2 = STRUCT([COLOR([1,0,0])(curve)])
//Petalo 3 
	var domain = INTERVALS(1)(20);
	var curveMapping = BEZIER(S0)([[0.15,0.08,0.1],[0.15,0.1,0.11],[0.2,0.1,0.10],[0.2,0.08,0.1],[0.15,0.08,0.1]]);
	var curve = MAP(curveMapping)(domain);
		var petalo3 = STRUCT([COLOR([1,0,0])(curve)])
//Petalo 4
	var domain = INTERVALS(1)(20);
	var curveMapping = BEZIER(S0)([[0.15,0.08,0.1],[0.2,0.08,0.1],[0.2,0.04,0.1],[0.15,0.04,0.11],[0.15,0.08,0.1]]);
	var curve = MAP(curveMapping)(domain);
		var petalo4 = STRUCT([COLOR([1,0,0])(curve)])

		var fiore = T([0,1])([-0.12,-0.1])(STRUCT([stelo,petalo1,petalo2,petalo3,petalo4]));
		DRAW(fiore);

	var vasotot = T([0,1,2])([0.2,0.65,0.40])(STRUCT([bvout2,fiore]));
	DRAW(vasotot);