---
title: "Number Systems & Bitwise"
subtitle: "Binary, hex, and octal, two's complement, floating point, and bitwise operators and tricks."
description: "Number systems and bitwise cheatsheet — binary, octal, hexadecimal, base conversion, two's complement, IEEE 754 floats, bitwise operators, masks, and bit tricks."
category: "CS Fundamentals"
icon: "binary"
---

## Number Bases

| Base | Name | Digits | Prefix | Example (decimal 202) |
|------|------|--------|--------|-----------------------|
| 2 | Binary | `0 1` | `0b` | `0b11001010` |
| 8 | Octal | `0-7` | `0o` (or `0`) | `0o312` |
| 10 | Decimal | `0-9` | none | `202` |
| 16 | Hexadecimal | `0-9 A-F` | `0x` | `0xCA` |

```plaintext
Dec  Bin   Hex       Dec  Bin   Hex
 0   0000   0         8   1000   8
 1   0001   1         9   1001   9
 2   0010   2        10   1010   A
 3   0011   3        11   1011   B
 4   0100   4        12   1100   C
 5   0101   5        13   1101   D
 6   0110   6        14   1110   E
 7   0111   7        15   1111   F
```

One hex digit is exactly **4 bits** (a nibble), and two hex digits are one **byte**. One octal
digit is 3 bits.

## Place Value

```plaintext
Binary 1 1 0 0 1 0 1 0
Weight 128 64 32 16 8 4 2 1

128 + 64 + 8 + 2 = 202
```

Powers of two worth memorising:

| Power | Value | Power | Value |
|-------|------:|-------|------:|
| 2^0 | 1 | 2^8 | 256 |
| 2^1 | 2 | 2^10 | 1,024 (1 KiB) |
| 2^2 | 4 | 2^16 | 65,536 |
| 2^3 | 8 | 2^20 | 1,048,576 (1 MiB) |
| 2^4 | 16 | 2^30 | about 1.07 billion (1 GiB) |
| 2^5 | 32 | 2^31 | 2,147,483,648 |
| 2^6 | 64 | 2^32 | 4,294,967,296 |
| 2^7 | 128 | 2^64 | about 1.8 x 10^19 |

## Converting Between Bases

**Decimal to binary**: divide by 2 and read the remainders from the bottom up.

```plaintext
202 / 2 = 101  remainder 0   ▲
101 / 2 =  50  remainder 1   │
 50 / 2 =  25  remainder 0   │  read upward
 25 / 2 =  12  remainder 1   │
 12 / 2 =   6  remainder 0   │
  6 / 2 =   3  remainder 0   │
  3 / 2 =   1  remainder 1   │
  1 / 2 =   0  remainder 1   │

202 = 11001010 (binary)
```

**Binary to hex**: group bits in fours from the right.

```plaintext
1100 1010  →  C A  →  0xCA
```

**Binary to octal**: group bits in threes from the right.

```plaintext
011 001 010  →  3 1 2  →  0o312
```

```python
bin(202)            # '0b11001010'
hex(202)            # '0xca'
oct(202)            # '0o312'
int("11001010", 2)  # 202
int("ca", 16)       # 202
f"{202:08b}"        # '11001010'  (zero-padded to 8 bits)
f"{202:#x}"         # '0xca'
```

## Binary Arithmetic

```plaintext
  0 0 1 1   (3)             1 0 1 0   (10)
+ 0 1 1 0   (6)           - 0 0 1 1   (3)
---------                 ---------
  1 0 0 1   (9)             0 1 1 1   (7)
```

Carry rules for addition: `0+0=0`, `0+1=1`, `1+0=1`, `1+1=10` (write 0, carry 1),
`1+1+1=11` (write 1, carry 1).

## Signed Integers: Two's Complement

The top bit is the **sign bit**. A negative number is stored as the complement of its
positive value, plus one.

```plaintext
 5 =  0000 0101
~5 =  1111 1010     (flip every bit)
+1 =  1111 1011  =  -5
```

| Bits | Unsigned range | Signed range (two's complement) |
|-----:|----------------|----------------------------------|
| 8 | 0 to 255 | -128 to 127 |
| 16 | 0 to 65,535 | -32,768 to 32,767 |
| 32 | 0 to 4,294,967,295 | -2,147,483,648 to 2,147,483,647 |
| 64 | 0 to 1.8 x 10^19 | -9.2 x 10^18 to 9.2 x 10^18 |

```plaintext
8-bit values as a wheel:

  0111 1111 = 127   ← largest
  1000 0000 = -128  ← smallest (127 + 1 overflows to this)
  1111 1111 = -1
  0000 0000 = 0
```

| Fact | Detail |
|------|--------|
| Range is asymmetric | There is one more negative number than positive |
| Negate | Flip all bits, add 1 |
| Overflow | Adding past the max wraps around to the negative end |
| Sign extension | Widening a signed value copies the sign bit |
| Same adder | Addition and subtraction use the same circuit |

## Bitwise Operators

| Operator | Name | Rule | Example |
|----------|------|------|---------|
| `&` | AND | 1 if both are 1 | `0b1100 & 0b1010 = 0b1000` |
| `|` | OR | 1 if either is 1 | `0b1100 | 0b1010 = 0b1110` |
| `^` | XOR | 1 if they differ | `0b1100 ^ 0b1010 = 0b0110` |
| `~` | NOT | Flip every bit | `~0b1100 = ...0011` |
| `<<` | Left shift | Multiply by 2 per shift | `3 << 2 = 12` |
| `>>` | Right shift | Divide by 2 per shift (floor) | `12 >> 2 = 3` |

```plaintext
Truth table
 a b | AND OR XOR
 0 0 |  0   0   0
 0 1 |  0   1   1
 1 0 |  0   1   1
 1 1 |  1   1   0
```

- `>>` on a signed value usually copies the sign bit (**arithmetic** shift). JavaScript also has
  `>>>` for a **logical** shift that fills with zeros.
- Shifting by the width of the type or more is undefined in C and C++.
- In Python, integers have unlimited size, so `~x` equals `-x - 1`.
- Operator precedence is low: write `(x & 1) == 0`, not `x & 1 == 0`.

## Common Bit Operations

Bit positions count from `0` at the right.

```python
x |= (1 << n)             # set bit n
x &= ~(1 << n)            # clear bit n
x ^= (1 << n)             # toggle bit n
(x >> n) & 1              # read bit n
x & 1                     # odd? (1 = odd, 0 = even)
x << k                    # x * 2^k
x >> k                    # x // 2^k
```

| Task | Expression |
|------|------------|
| Check the lowest bit | `x & 1` |
| Is a power of two? | `x > 0 and (x & (x - 1)) == 0` |
| Clear the lowest set bit | `x & (x - 1)` |
| Isolate the lowest set bit | `x & -x` |
| Make a mask of `n` ones | `(1 << n) - 1` |
| Keep the low `n` bits | `x & ((1 << n) - 1)` |
| Swap without a temp | `a ^= b; b ^= a; a ^= b` |
| Absolute value of a 32-bit int | `(x ^ (x >> 31)) - (x >> 31)` |
| Same sign? | `(a ^ b) >= 0` |
| Count set bits | `bin(x).count("1")` or `x.bit_count()` |

## XOR Properties

| Property | Meaning |
|----------|---------|
| `a ^ a = 0` | A value cancels itself |
| `a ^ 0 = a` | Zero changes nothing |
| `a ^ b = b ^ a` | Order does not matter |
| `(a ^ b) ^ b = a` | XOR twice with the same value restores it |

```python
# The one number that appears an odd number of times
def single(nums):
    result = 0
    for n in nums:
        result ^= n          # pairs cancel out
    return result

single([4, 1, 2, 1, 2])      # 4
```

XOR also drives simple ciphers (`data ^ key`), parity checks, and RAID parity.

## Masks and Flags

```python
READ, WRITE, EXEC = 0b001, 0b010, 0b100      # one bit per permission

perms = READ | WRITE                          # 0b011
has_write = bool(perms & WRITE)               # True
perms &= ~WRITE                               # remove write
perms ^= EXEC                                 # toggle exec
```

```plaintext
Unix permissions 0o754
 7 = 111 = rwx  (owner)
 5 = 101 = r-x  (group)
 4 = 100 = r--  (others)
```

```python
# Extract the red, green, blue bytes from a 24-bit colour
color = 0xFFA07A
r = (color >> 16) & 0xFF      # 255
g = (color >> 8) & 0xFF       # 160
b = color & 0xFF              # 122
```

## Subsets with Bitmasks

An `n`-bit number can stand for a subset of `n` items.

```python
items = ["a", "b", "c"]
for mask in range(1 << len(items)):              # 0 .. 2^n - 1
    subset = [items[i] for i in range(len(items)) if mask & (1 << i)]
    print(f"{mask:03b}", subset)
```

```plaintext
000 []        100 ['c']
001 ['a']     101 ['a', 'c']
010 ['b']     110 ['b', 'c']
011 ['a','b'] 111 ['a', 'b', 'c']
```

## Endianness

How multi-byte values are ordered in memory. Take `0x12345678` stored at address `0x100`.

```plaintext
Address        0x100  0x101  0x102  0x103
Big-endian      12     34     56     78      (most significant byte first)
Little-endian   78     56     34     12      (least significant byte first)
```

| Where | Order |
|-------|-------|
| x86, x86-64, most ARM | Little-endian |
| Network protocols (TCP/IP) | Big-endian ("network byte order") |
| Files | Depends on the format |

```python
(0x1234).to_bytes(2, "big")         # b'\x12\x34'
(0x1234).to_bytes(2, "little")      # b'\x34\x12'
int.from_bytes(b"\x12\x34", "big")  # 4660
```

## Floating Point (IEEE 754)

A float stores a **sign**, an **exponent**, and a **fraction** (mantissa).

$$ (-1)^{s} \times 1.f \times 2^{e - \text{bias}} $$

```plaintext
32-bit float (single)
 S  EEEEEEEE  FFFFFFFFFFFFFFFFFFFFFFF
 1     8              23 bits

64-bit float (double)
 S  EEEEEEEEEEE  FFFF...(52 bits)
 1       11
```

| Type | Bits | Exponent bias | Precision | Max value |
|------|-----:|--------------:|-----------|-----------|
| `float16` | 16 | 15 | about 3 digits | 65,504 |
| `float32` | 32 | 127 | about 7 digits | about 3.4 x 10^38 |
| `float64` | 64 | 1023 | about 15 to 16 digits | about 1.8 x 10^308 |

| Special value | Meaning |
|---------------|---------|
| `+0`, `-0` | Two zeros, equal when compared |
| `Infinity` | Overflow, or `1/0` |
| `NaN` | Not a number (`0/0`). `NaN != NaN` |
| Subnormal | Tiny values near zero with reduced precision |

```python
0.1 + 0.2              # 0.30000000000000004
0.1 + 0.2 == 0.3       # False

import math
math.isclose(0.1 + 0.2, 0.3)     # True: compare with a tolerance
float("nan") == float("nan")      # False
```

- Most decimal fractions (like `0.1`) cannot be stored exactly in binary.
- Never compare floats with `==`. Use a tolerance.
- Add small numbers first, or use `math.fsum`, to limit rounding error.
- Use **integers in cents** or `Decimal` for money.

## Character Encoding

| Standard | Notes |
|----------|-------|
| ASCII | 7 bits, 128 characters (`A` = 65, `a` = 97, `0` = 48) |
| Unicode | A number (code point) for every character, such as `U+1F600` |
| UTF-8 | Variable length, 1 to 4 bytes. ASCII-compatible. The web standard |
| UTF-16 | 2 or 4 bytes. Used by Windows, Java, JavaScript strings |

```plaintext
UTF-8 byte patterns
 1 byte   0xxxxxxx                              U+0000  to U+007F
 2 bytes  110xxxxx 10xxxxxx                     U+0080  to U+07FF
 3 bytes  1110xxxx 10xxxxxx 10xxxxxx            U+0800  to U+FFFF
 4 bytes  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx   U+10000 to U+10FFFF
```

```python
"A".encode("utf-8")        # b'A'
"é".encode("utf-8")        # b'\xc3\xa9' (2 bytes)
ord("A"), chr(65)          # (65, 'A')
```

## Units

| Unit | Size | | Unit | Size |
|------|------|-|------|------|
| bit | 1 or 0 | | KiB | 1,024 bytes |
| nibble | 4 bits | | MiB | 1,024 KiB |
| byte | 8 bits | | GiB | 1,024 MiB |
| word | CPU size (32 or 64 bits) | | TiB | 1,024 GiB |

KB, MB, GB (powers of 10, 1,000) differ from KiB, MiB, GiB (powers of 2, 1,024).

## Other Representations

| Name | Idea | Used for |
|------|------|----------|
| BCD | Each decimal digit in 4 bits | Displays, finance |
| Gray code | Neighbouring values differ by one bit | Encoders, avoiding glitches |
| Fixed point | Integer with an implied decimal point | Embedded, money |
| Base64 | 6 bits per character | Sending binary as text |
| Parity bit, CRC, checksum | Extra bits for error detection | Networks, storage |

```plaintext
Gray code (3 bits): 000 001 011 010 110 111 101 100
Parity: data 1011001 has four 1s, so even parity bit = 0
```
