# GameDev Simple Utils

A lightweight utility package for game development, providing simple helper functions to streamline common tasks in JavaScript-based games.

![image](https://github.com/user-attachments/assets/f80c5dc8-d7bd-4d45-bbed-1595827ac983)

---

## 📦 Installation

Install the package via npm:

```bash
npm i gamedev-simple-utils
```

---

## 🚀 Usage

The package currently provides a `randomNumber` function to generate a random integer between a minimum and maximum value — useful for:

- Random enemy placement
- Dice rolls
- Random events

### Basic Example

```js
const { randomNumber } = require('gamedev-simple-utils');

// Generate a random number between 1 and 100
console.log(randomNumber(1, 100)); // e.g., 42
```

---

### 🎮 In a Phaser Game

```js
const { randomNumber } = require('gamedev-simple-utils');

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        // Place a sprite at a random x-coordinate
        const x = randomNumber(0, 800);
        this.add.sprite(x, 300, 'player');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: GameScene
};

const game = new Phaser.Game(config);
```

---

## 📖 API

### `randomNumber(min, max)`

**Description:**  
Generates a random integer between `min` and `max` (inclusive).

**Parameters:**

- `min` (number): The minimum value.
- `max` (number): The maximum value.

**Returns:**  
A random integer between `min` and `max`.

**Example:**

```js
const { randomNumber } = require('gamedev-simple-utils');
console.log(randomNumber(10, 20)); // e.g., 15
```

---

## ⚙️ Installation Requirements

- Node.js (version 14 or higher)
- npm (comes with Node.js)

---

## 🛠️ Building the Package

The package uses `esbuild` to compile the source code.

### Steps:

1. **Clone the repository:**

```bash
git clone https://github.com/SamparkBhol/gamedev-simple-utils.git
cd gamedev-simple-utils
```

2. **Install dependencies:**

```bash
npm install
```

3. **Build the package:**

```bash
npm run build
```

> This creates `dist/index.js`, the main entry point.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Sampark Bhol**  
[GitHub Profile](https://github.com/SamparkBhol)

---

## 🐞 Issues

Report bugs or suggest features in the [Issues](https://github.com/SamparkBhol/gamedev-simple-utils/issues) section.
