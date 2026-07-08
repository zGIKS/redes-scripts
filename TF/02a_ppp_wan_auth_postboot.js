// PPP WAN AUTH POST-BOOT
// Ejecutar despues de 02_seguridad_postboot.js.
// WAN1 Lima-La Libertad: CHAP
// WAN2 Lima-Ica: PAP
// WAN3 Lima-Huanuco: CHAP
// WAN4 Lima-Puno: PAP

configureIosDevice("ROUTER_LIMA", "enable\nconfigure terminal\nusername ROUTER_LA_LIBERTAD password WAN1chap2026\nusername ROUTER_ICA password WAN2pap2026\nusername ROUTER_HUANUCO password WAN3chap2026\nusername ROUTER_PUNO password WAN4pap2026\ninterface Serial0/0/0\ndescription WAN1 CHAP a ROUTER_LA_LIBERTAD\nencapsulation ppp\nppp authentication chap\nno shutdown\nexit\ninterface Serial0/0/1\ndescription WAN2 PAP a ROUTER_ICA\nencapsulation ppp\nppp authentication pap\nppp pap sent-username ROUTER_LIMA password WAN2pap2026\nno shutdown\nexit\ninterface Serial0/1/0\ndescription WAN3 CHAP a ROUTER_HUANUCO\nencapsulation ppp\nppp authentication chap\nno shutdown\nexit\ninterface Serial0/1/1\ndescription WAN4 PAP a ROUTER_PUNO\nencapsulation ppp\nppp authentication pap\nppp pap sent-username ROUTER_LIMA password WAN4pap2026\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_LA_LIBERTAD", "enable\nconfigure terminal\nusername ROUTER_LIMA password WAN1chap2026\ninterface Serial0/0/0\ndescription WAN1 CHAP a ROUTER_LIMA\nencapsulation ppp\nppp authentication chap\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_ICA", "enable\nconfigure terminal\nusername ROUTER_LIMA password WAN2pap2026\ninterface Serial0/0/0\ndescription WAN2 PAP a ROUTER_LIMA\nencapsulation ppp\nppp authentication pap\nppp pap sent-username ROUTER_ICA password WAN2pap2026\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_HUANUCO", "enable\nconfigure terminal\nusername ROUTER_LIMA password WAN3chap2026\ninterface Serial0/0/0\ndescription WAN3 CHAP a ROUTER_LIMA\nencapsulation ppp\nppp authentication chap\nno shutdown\nexit\nend");

configureIosDevice("ROUTER_PUNO", "enable\nconfigure terminal\nusername ROUTER_LIMA password WAN4pap2026\ninterface Serial0/0/0\ndescription WAN4 PAP a ROUTER_LIMA\nencapsulation ppp\nppp authentication pap\nppp pap sent-username ROUTER_PUNO password WAN4pap2026\nno shutdown\nexit\nend");
