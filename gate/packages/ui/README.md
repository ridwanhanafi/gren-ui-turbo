# GRAN-UI

> Magelangkab UI Component Library berbasis **Tailwind CSS**

## 🚀 Requirements

Pastikan environment kamu memenuhi:

- Node.js ≥ 18
- React ≥ 18
- Package Manager: `npm`, `pnpm`, atau `bun`

---

## 📦 Installation

Install langsung dari GitHub:

```bash
bun add github:ridwanhanafi/gren-ui
```

---

## 🧩 Pre-Use

Install Tailwind

```python
bun add tailwindcss
```

## ⚙️ Configuration

Tambahkan di global.css

```python
@import "tailwindcss";
@import "@gren/ui/tailwind";
@import "@gren/ui/style";

@custom-variant dark (&:where(.dark, .dark *)); 
.... # all css file
```

**note**: pastikan paling atas

Jika menggunakan framework


| Frawework | Additional Packages    |
| --------- | ---------------------- |
| Next Js   | `postcss`              |


### React

- Minimum react js ≥18


| Component | Note                              |
| --------- | ----------------------------------|
| Button    |  -                                |
| Icon      | install `bootstrap 5`             |
| Input     |  -                                |
| Select    |  -                                |
| Textarea  |  -                                |
| Spinner   |  -                                |
| Badge     | `'gray', 'red', 'yellow' ...etc.` |
| Alert     | `'gray', 'red', 'yellow' ...etc.` |

Contoh:

<details>
  <summary>Button</summary>

```tsx
<Button>Simpan</Button>
```

Custom:

- variant: ```primary```, ```secondary```
- size: ```small```, ```medium```
- disabled: ```true``` / ```false``` (boolean)

```tsx
<Button variant={"primary"}>Simpan</Button>
```
</details>

<details>
  <summary>Icon</summary>

```tsx
<Icon name="plus-lg" />
```
</details>

<details>
  <summary>Input</summary>

```tsx
const [data, setData] = React.useState("")

<Input onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setData(e.target.value)} 
/>
```
</details>

<details>
  <summary>Label</summary>

```tsx
<Label>Username</Label>
```
</details>

<details>
  <summary>Select</summary>

```tsx
<Select>
    <Select.Option>Makan</Select.Option>
    <Select.Option>Minum</Select.Option>
</Select>
```
</details>

## License

![Preview App](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSam3KP97I61YnQKh6pOK2Khr1lY3CiCNN7QQ&s)