# Calculus Cheatsheet

This cheatsheet provides a list of useful calculus rules and formulas.

## Basics

### Derivative Rules

- **Constant Rule**: \( \frac{d}{dx}(c) = 0 \) where \( c \) is a constant.
- **Power Rule**: \( \frac{d}{dx}(x^n) = nx^{n-1} \) where \( n \) is a real number.

### Common Derivatives

- **Exponential Function**: \( \frac{d}{dx}(e^x) = e^x \)
- **Trigonometric Functions**:
  - \( \frac{d}{dx}(\sin(x)) = \cos(x) \)
  - \( \frac{d}{dx}(\cos(x)) = -\sin(x) \)
  - \( \frac{d}{dx}(\tan(x)) = \sec^2(x) \)

### Rules of Integration

- **Constant Multiple Rule**: \( \int cf(x) \,dx = c \int f(x) \,dx \)
- **Sum Rule**: \( \int (f(x) + g(x)) \,dx = \int f(x) \,dx + \int g(x) \,dx \)

### Common Integrals

- **Exponential Function**: \( \int e^x \,dx = e^x + C \)
- **Trigonometric Functions**:
  - \( \int \sin(x) \,dx = -\cos(x) + C \)
  - \( \int \cos(x) \,dx = \sin(x) + C \)
  - \( \int \sec^2(x) \,dx = \tan(x) + C \)

## Advanced Calculus

### Limits and Continuity

- **Definition of Limit**: \( \lim_{{x \to a}} f(x) = L \) where \( f(x) \) gets arbitrarily close to \( L \) as \( x \) approaches \( a \).
- **Continuity**: \( f(x) \) is continuous at \( x = a \) if \( \lim_{{x \to a}} f(x) = f(a) \).

### Differentiation Techniques

- **Chain Rule**: \( \frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} \)
- **Product Rule**: \( \frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx} \)
- **Quotient Rule**: \( \frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2} \)

### Integration Techniques

- **Integration by Parts**: \( \int u \,dv = uv - \int v \,du \)
- **Integration by Substitution**: \( \int f(g(x))g'(x) \,dx = \int f(u) \,du \) where \( u = g(x) \)

### Series and Sequences

- **Geometric Series**: \( \sum_{n=0}^{\infty} ar^n = \frac{a}{1-r} \) for \( |r| < 1 \)
- **Taylor Series**: \( f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n \)

## Multivariable Calculus

### Partial Derivatives

- **Definition**: \( \frac{\partial f}{\partial x} = \lim_{{\Delta x \to 0}} \frac{f(x + \Delta x, y) - f(x, y)}{\Delta x} \)

### Double Integrals

- **Definition**: \( \iint_D f(x, y) \,dA = \lim_{{\Delta A \to 0}} \sum_{i=1}^{n} f(x_i, y_i) \cdot \Delta A \)

### Vector Calculus

- **Gradient**: \( \nabla f = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k} \)
- **Divergence**: \( \nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \)
- **Curl**: \( \nabla \times \mathbf{F} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right)\mathbf{i} + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right)\mathbf{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathbf{k} \)

---

This calculus cheatsheet covers differentiation, integration, limits, continuity, advanced techniques like Taylor series and vector calculus, and multivariable calculus concepts. It includes common formulas, rules, and techniques along with examples to aid in understanding and application.