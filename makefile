run :
	node .\src\index.js

forever:
	forever start ./src/index.js

stop:
	forever stop ./src/index.js