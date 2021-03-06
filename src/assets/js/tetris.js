// document.getElementById('apahejhej').addEventListener('click', tet);
// document.getElementById("start").addEventListener("click", tetris)


   const canvas = document.getElementById('tetris');
    const context = canvas.getContext('2d');

    context.scale(20, 20);

    function arenaSweep() {
        outer: for (let y = arena.length - 1; y > 0; --y) {
            for (let x = 0; x < arena[y].length; ++x) {
                if (arena[y][x] === 0) {
                    continue outer;
                }
            }
            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            ++y;
        }
    }

    function collide(arena, player) {
        const [m, o] = [player.matrix, player.pos];
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 &&
                    (arena[y + o.y] &&
                        arena[y + o.y][x + o.x]) !== 0) {
                    return true;

                }

            }
        }
        return false;
    }

    function createMatrix(w, h) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }

    function createPiece(type) {
        let matrix = [];

        if (type === "T") {
            matrix = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0],
            ];
        } else if (type === "O") {
            matrix = [
                [2, 2],
                [2, 2]
            ];
        } else if (type === "J") {
            matrix = [
                [0, 3, 0],
                [0, 3, 0],
                [3, 3, 0]
            ];
        } else if (type === "L") {
            matrix = [
                [0, 4, 0],
                [0, 4, 0],
                [0, 4, 4]
            ];
        } else if (type === "I") {
            matrix = [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0]
            ];
        } else if (type === "Z") {
            matrix = [
                [6, 6, 0],
                [0, 6, 6],
                [0, 0, 0]
            ];
        } else if (type === "S") {
            matrix = [
                [0, 7, 7],
                [7, 7, 0],
                [0, 0, 0]
            ];
        } else {
            throw new Error(`Type of piece not defined: ${type}`);
        }
        // console.log(`createPiece: ${type}`, matrix);

        return matrix;
    }

    function draw() {
        if (lockMatrix) return;
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawMatrix(arena, {
            x: 0,
            y: 0
        });
        drawMatrix(player.matrix, player.pos);
    }

    function drawMatrix(matrix, offset) {

        matrix.forEach((row, y) => {

            if (!row) {
                throw new Error(`drawMatix: ROW is null`)
            }
            try {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        context.fillStyle = colors[value];
                        context.fillRect(x + offset.x,
                            y + offset.y, 1, 1);
                    }
                });
            } catch (caught) {
                // console.error(`drawMatrix EXCEPTION:`, row, caught);
                throw (caught);

            }

        });
    }

    function merge(arena, player) {
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    arena[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }

    function playerDrop() {

        if (lockMatrix) return;

        player.pos.y++;
        if (collide(arena, player)) {
            player.pos.y--;
            merge(arena, player);
            playerReset();
            arenaSweep();
        }
        dropCounter = 0;
    }

    function playerMove(dir) {
        if (lockMatrix) return;

        player.pos.x += dir;
        if (collide(arena, player)) {
            player.pos.x -= dir;
        }
    }



    function playerReset() {

        const pieces = 'ILJOSZT';

        lockMatrix = 1;

        player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
        player.pos.y = 0;
        player.pos.x = (arena[0].length / 2 | 0) -
            (player.matrix[0].length / 2 | 0);

        if (collide(arena, player)) {
            arena.forEach(row => row.fill(0));
        }
        lockMatrix = 0;
    }

    function playerRotate(dir) {

        const pos = player.pos.x;
        let offset = 1;
        rotate(player.matrix, dir);
        while (collide(arena, player)) {
            player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > player.matrix[0].length) {
                rotate(player.matrix, -dir);
                player.pos.x = pos;
                return;
            }
        }
    }

    function rotate(matrix, dir) {
        for (let y = 0; y < matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    matrix[x][y],
                    matrix[y][x],
                ] = [
                    matrix[y][x],
                    matrix[x][y],

                ];
            }
        }
        if (dir > 0) {
            matrix.forEach(row => row.reverse());
        } else {
            matrix.reverse();
        }
    }
    let dropCounter = 0;
    let dropInterval = 1000;

    let lastTime = 0;
    let lockMatrix = 0;

    function update(time = 0) {
        if (lockMatrix) return;

        const deltaTime = time - lastTime;

        dropCounter += deltaTime;
        if (dropCounter > dropInterval) {
            playerDrop();
        }

        lastTime = time;

        draw();
        requestAnimationFrame(update);
    }

    const colors = [
        null,
        '#ffa3a9',
        '#a3c6ff',
        '#fda3ff',
        '#adfff2',
        '#c0a3ff',
        '#f7ffa3',
        '#ffc6a3',

    ]

    const arena = createMatrix(12, 20);

    const player = {
        pos: {
            x: 0,
            y: 0
        },
        matrix: null

    };

    document.addEventListener('keydown', event => {

        if (lockMatrix) return;
        if (event.keyCode === 37) {
            playerMove(-1);
        } else if (event.keyCode === 39) {
            playerMove(1);
        } else if (event.keyCode === 40) {
            playerDrop();
        } else if (event.keyCode === 38) {
            playerRotate(-1);
        } else if (event.keyCode === 87) {
            playerRotate(1);
        } else if (event.keyCode === 32) {
            setTimeout(playerRotate(-1), 3000);


        }
    })
    playerReset();
    update();
