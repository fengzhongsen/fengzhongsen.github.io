(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{441:function(_,e,v){"use strict";v.r(e);var t=v(2),a=Object(t.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"一、let-与-const"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、let-与-const"}},[_._v("#")]),_._v(" 一、let 与 const")]),_._v(" "),e("h3",{attrs:{id:"_1-1-let"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-let"}},[_._v("#")]),_._v(" 1.1 let")]),_._v(" "),e("ol",[e("li",[_._v("不存在变量提升：必须先申明再使用。")]),_._v(" "),e("li",[_._v("只在声明所在的块级作用域内有效，存在暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。")]),_._v(" "),e("li",[_._v("不允许重复申明："),e("code",[_._v("let")]),_._v(" 不允许在相同作用域内，重复声明同一个变量。")]),_._v(" "),e("li",[_._v("块级作用域：在块级作用域中申明函数，相当于用 "),e("code",[_._v("var")]),_._v(" 申明变量，会出现“变量提升”的现象。")])]),_._v(" "),e("h3",{attrs:{id:"_1-2-const"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-const"}},[_._v("#")]),_._v(" 1.2 const")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("const")]),_._v(" 和 "),e("code",[_._v("let")]),_._v(" 的上述性质一样。")]),_._v(" "),e("li",[e("code",[_._v("const")]),_._v(" 只能定义常量（必须初始化）。")]),_._v(" "),e("li",[e("code",[_._v("const")]),_._v(" 定义的常量所指向的地址不可更改，但是地址里的内容是可以变得。")]),_._v(" "),e("li",[_._v("可以使用 "),e("code",[_._v("Object.freeze()")]),_._v(" 方法冻结对象。")])]),_._v(" "),e("h2",{attrs:{id:"二、async"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、async"}},[_._v("#")]),_._v(" 二、Async")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("async")]),_._v(" 函数对 "),e("code",[_._v("Generator")]),_._v(" 函数的改进，体现在四点：(1)内置执行器。(2)更好的语义。(3)更广的适用性。(4)返回值是 Promise。")]),_._v(" "),e("li",[e("code",[_._v("async")]),_._v(" 函数返回一个 "),e("code",[_._v("Promise")]),_._v(" 对象。其内部 "),e("code",[_._v("return")]),_._v(" 语句返回的值，会成为 "),e("code",[_._v("then")]),_._v(" 方法回调函数的参数。")]),_._v(" "),e("li",[_._v("只有 "),e("code",[_._v("async")]),_._v(" 函数内部的所有异步操作执行完，才会执行 "),e("code",[_._v("then")]),_._v(" 方法指定的回调函数。")]),_._v(" "),e("li",[_._v("正常情况下，"),e("code",[_._v("await")]),_._v(" 命令后面是一个 "),e("code",[_._v("Promise")]),_._v(" 对象，返回该对象的结果。如果不是 "),e("code",[_._v("Promise")]),_._v(" 对象，就直接返回对应的值。")]),_._v(" "),e("li",[_._v("任何一个 "),e("code",[_._v("await")]),_._v(" 语句后面的 "),e("code",[_._v("Promise")]),_._v(" 对象变为 "),e("code",[_._v("reject")]),_._v(" 状态，那么整个 "),e("code",[_._v("async")]),_._v(" 函数都会中断执行。解决方案(1)使用 "),e("code",[_._v("try…catch")]),_._v(" ，(2) "),e("code",[_._v("await")]),_._v(" 后面的 "),e("code",[_._v("Promise")]),_._v(" 对象再跟一个 "),e("code",[_._v("catch")]),_._v(" 方法。")]),_._v(" "),e("li",[_._v("多个 "),e("code",[_._v("await")]),_._v(" 命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。")]),_._v(" "),e("li",[e("code",[_._v("await")]),_._v(" 命令只能用在 "),e("code",[_._v("async")]),_._v(" 函数之中。")]),_._v(" "),e("li",[_._v("一个对象的同步遍历器的接口，部署在 "),e("code",[_._v("Symbol.iterator")]),_._v(" 属性上面。同样地，对象的异步遍历器接口，部署在 "),e("code",[_._v("Symbol.asyncIterator")]),_._v(" 属性上面。不管是什么样的对象，只要它的 "),e("code",[_._v("Symbol.asyncIterator")]),_._v(" 属性有值，就表示应该对它进行异步遍历。")]),_._v(" "),e("li",[_._v("一个对象的同步遍历器的接口，部署在 "),e("code",[_._v("Symbol.iterator")]),_._v(" 属性上面。同样地，对象的异步遍历器接口，部署在 "),e("code",[_._v("Symbol.asyncIterator")]),_._v(" 属性上面。不管是什么样的对象，只要它的 "),e("code",[_._v("Symbol.asyncIterator")]),_._v(" 属性有值，就表示应该对它进行异步遍历。")]),_._v(" "),e("li",[_._v("如果 "),e("code",[_._v("next")]),_._v(" 方法返回的 "),e("code",[_._v("Promise")]),_._v(" 对象被 "),e("code",[_._v("reject")]),_._v("，"),e("code",[_._v("for await...of")]),_._v(" 就会报错，要用 "),e("code",[_._v("try...catch")]),_._v(" 捕捉。")]),_._v(" "),e("li",[e("code",[_._v("for await...of")]),_._v(" 循环也可以用于同步遍历器。")]),_._v(" "),e("li",[e("code",[_._v("Node v10")]),_._v(" 支持异步遍历器。")])]),_._v(" "),e("h2",{attrs:{id:"三、class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、class"}},[_._v("#")]),_._v(" 三、Class")]),_._v(" "),e("h3",{attrs:{id:"_3-1-es5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-es5"}},[_._v("#")]),_._v(" 3.1 ES5")]),_._v(" "),e("ol",[e("li",[_._v("在实例中定义了与原型同名的属性，只是阻断了对原型中属性的访问，而并没有也不能修改原型中的属性。")]),_._v(" "),e("li",[_._v("在 "),e("code",[_._v("for-in")]),_._v(" 循环时，返回“可枚举”的属性，不管在实例中还是原型中。第一，根据规定，所有开发人员定义的属性都是可枚举的。第二、数据属性 "),e("code",[_._v("[[Enumerable]]")]),_._v(" 为 "),e("code",[_._v("false")]),_._v("的属性都是不可枚举的。第三、默认不可枚举的属性和方法有："),e("code",[_._v("constructor")]),_._v("、"),e("code",[_._v("prototype")]),_._v("、"),e("code",[_._v("hasOwnProperty()")]),_._v("、"),e("code",[_._v("propertyIsEnumerable()")]),_._v("、"),e("code",[_._v("toLocaleString()")]),_._v("、"),e("code",[_._v("toString()")]),_._v("、"),e("code",[_._v("valueOf()")]),_._v("，即这些方法的数据属性 "),e("code",[_._v("[[Enumerable]]")]),_._v(" 默认为 "),e("code",[_._v("false")]),_._v("。")]),_._v(" "),e("li",[_._v("无论属性存在于实例还是存在于原型中，使用 "),e("code",[_._v("in")]),_._v(" 都会返回 "),e("code",[_._v("true")]),_._v("，但是 "),e("code",[_._v("hasOwnProperty")]),_._v(" 方法只有在属性存在于 实例中才返回 "),e("code",[_._v("true")]),_._v("，那么结合这两个方法就能判断 属性是不是存在于原型中。")])]),_._v(" "),e("h3",{attrs:{id:"_3-2-es6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-es6"}},[_._v("#")]),_._v(" 3.2 ES6")]),_._v(" "),e("ol",[e("li",[_._v("类的内部所有定义的方法，都是不可枚举的（"),e("code",[_._v("non-enumerable")]),_._v("），但是可以将方法定义在 "),e("code",[_._v("constructor")]),_._v(" 内就可以枚举了。也就是说 定义在 "),e("code",[_._v("class")]),_._v(" 内（"),e("code",[_._v("construct")]),_._v(" 外）的方法 都相当于定义在 ES5 中 构造函数 "),e("code",[_._v("Function.prototype")]),_._v(" 里的，而定义在 "),e("code",[_._v("construct")]),_._v(" 里的属性和方法都是 属于 "),e("code",[_._v("new")]),_._v(" 出来的实例本身具有的属性和方法。说白了跟 ES5 还是“一模一样”的。")]),_._v(" "),e("li",[_._v("必须使用 "),e("code",[_._v("new")]),_._v(" 方法调用，否则会报错。这样比 ES5 更安全（ES5 的构造函数就是普通函数，直接调用的话，里边的 "),e("code",[_._v("this")]),_._v(" 就指向了 全局，极有可能污染全局变量）。")]),_._v(" "),e("li",[_._v("采用 "),e("code",[_._v("Class")]),_._v(" 表达式，可以写出立即执行的 "),e("code",[_._v("Class")]),_._v("。")]),_._v(" "),e("li",[_._v("类的定义不存在变量提升。")]),_._v(" "),e("li",[_._v("关于设定私有属性，我推荐利用 "),e("code",[_._v("Symbol")]),_._v(" 值的唯一性，将私有方法的名字命名为一个 "),e("code",[_._v("Symbol")]),_._v(" 值。（不推荐 ES5 的骚操作，新的提案暂时忽略）")]),_._v(" "),e("li",[_._v("(1)类的方法内部如果含有 "),e("code",[_._v("this")]),_._v("，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。(2)一个比较简单的解决方法是，在构造方法中绑定 "),e("code",[_._v("this")]),_._v("，另一种解决方法是使用箭头函数。还有一种解决方法是使用 "),e("code",[_._v("Proxy")]),_._v("，获取方法的时候，自动绑定 "),e("code",[_._v("this")]),_._v("。")]),_._v(" "),e("li",[_._v("由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被 "),e("code",[_._v("Class")]),_._v(" 继承，包括 "),e("code",[_._v("name")]),_._v(" 属性。")]),_._v(" "),e("li",[_._v("(1)如果在一个方法前，加上 "),e("code",[_._v("static")]),_._v(" 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。(2)静态方法包含的 "),e("code",[_._v("this")]),_._v(" 关键字指的是类。(3)静态方法可以与非静态方法重名。(4)父类的静态方法，可以被子类继承。静态方法也是可以从 "),e("code",[_._v("super")]),_._v(" 对象上调用的。")]),_._v(" "),e("li",[e("code",[_._v("Class")]),_._v(" 内部调用 "),e("code",[_._v("new.target")]),_._v("，返回当前 "),e("code",[_._v("Class")]),_._v("。需要注意的是，子类继承父类时，"),e("code",[_._v("new.target")]),_._v(" 会返回子类。")])]),_._v(" "),e("h3",{attrs:{id:"_3-3-class-的继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-class-的继承"}},[_._v("#")]),_._v(" 3.3 Class 的继承")]),_._v(" "),e("ol",[e("li",[_._v("子类必须在 "),e("code",[_._v("constructor")]),_._v(" 方法中调用 "),e("code",[_._v("super")]),_._v(" 方法，否则新建实例时会报错。这是因为子类自己的 "),e("code",[_._v("this")]),_._v(" 对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用"),e("code",[_._v("super")]),_._v(" 方法，子类就得不到 "),e("code",[_._v("this")]),_._v(" 对象。")]),_._v(" "),e("li",[e("code",[_._v("Object.getPrototypeOf")]),_._v(" 方法可以用来从子类上获取父类。")]),_._v(" "),e("li",[e("code",[_._v("super")]),_._v(" 虽然代表了父类的构造函数，但是返回的是子类的实例。")]),_._v(" "),e("li",[e("code",[_._v("super")]),_._v(" 这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。")]),_._v(" "),e("li",[e("code",[_._v("super")]),_._v(" 作为函数调用时，代表父类的构造函数。并且只能用在子类的构造函数之中。")]),_._v(" "),e("li",[e("code",[_._v("super")]),_._v(" 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。")]),_._v(" "),e("li",[_._v("由于对象总是继承其他对象的，所以可以在任意一个对象中，使用 "),e("code",[_._v("super")]),_._v(" 关键字。")]),_._v(" "),e("li",[_._v("子类的 "),e("code",[_._v("__proto__")]),_._v(" 属性，表示构造函数的继承，总是指向父类。")]),_._v(" "),e("li",[_._v("子类 "),e("code",[_._v("prototype")]),_._v(" 属性的 "),e("code",[_._v("__proto__")]),_._v(" 属性，表示方法的继承，总是指向父类的 "),e("code",[_._v("prototype")]),_._v(" 属性。")]),_._v(" "),e("li",[_._v("子类实例的 "),e("code",[_._v("__proto__")]),_._v(" 属性的 "),e("code",[_._v("__proto__")]),_._v(" 属性，指向父类实例的 "),e("code",[_._v("__proto__")]),_._v(" 属性。也就是说，子类的原型的原型，是父类的原型。")]),_._v(" "),e("li",[_._v("ES5 不能实现原生构造函数的继承，ES6 的 "),e("code",[_._v("extends")]),_._v(" 可以。")])]),_._v(" "),e("h2",{attrs:{id:"四、generator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、generator"}},[_._v("#")]),_._v(" 四、Generator")]),_._v(" "),e("ol",[e("li",[_._v("执行 "),e("code",[_._v("Generator")]),_._v(" 函数会返回一个遍历器对象，也就是说，"),e("code",[_._v("Generator")]),_._v(" 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 "),e("code",[_._v("Generator")]),_._v(" 函数内部的每一个状态。")]),_._v(" "),e("li",[_._v("一个函数里面，只能执行一次（或者说一个）"),e("code",[_._v("return")]),_._v(" 语句，但是可以执行多次（或者说多个）"),e("code",[_._v("yield")]),_._v(" 表达式。")]),_._v(" "),e("li",[e("code",[_._v("Generator")]),_._v(" 函数可以不用 "),e("code",[_._v("yield")]),_._v(" 表达式，这时就变成了一个单纯的暂缓执行函数。另外需要注意，"),e("code",[_._v("yield")]),_._v(" 表达式只能用在 "),e("code",[_._v("Generator")]),_._v(" 函数里面，用在其他地方都会报错。")]),_._v(" "),e("li",[e("code",[_._v("yield")]),_._v(" 表达式如果用在另一个表达式之中，必须放在圆括号里面。用作函数参数或放在赋值表达式的右边，可以不加括号。")]),_._v(" "),e("li",[e("code",[_._v("Generator")]),_._v(" 函数执行后，返回一个遍历器对象。该对象本身也具有 "),e("code",[_._v("Symbol.iterator")]),_._v(" 属性，执行后返回自身。")]),_._v(" "),e("li",[e("code",[_._v("yield")]),_._v(" 表达式本身没有返回值，或者说总是返回 "),e("code",[_._v("undefined")]),_._v("。"),e("code",[_._v("next")]),_._v(" 方法可以带一个参数，该参数就会被当作上一个"),e("code",[_._v("yield")]),_._v(" 表达式的返回值。")]),_._v(" "),e("li",[_._v("由于 "),e("code",[_._v("next")]),_._v(" 方法的参数表示上一个 "),e("code",[_._v("yield")]),_._v(" 表达式的返回值，所以在第一次使用 "),e("code",[_._v("next")]),_._v(" 方法时，传递参数是无效的。")]),_._v(" "),e("li",[e("code",[_._v("for…of")]),_._v(" 循环可以自动遍历 "),e("code",[_._v("Generator")]),_._v(" 函数时生成的 "),e("code",[_._v("Iterator")]),_._v(" 对象，且此时不再需要调用 "),e("code",[_._v("next")]),_._v(" 方法。但是 只能遍历 "),e("code",[_._v("yield")]),_._v(" 状态，不能返回 "),e("code",[_._v("return")]),_._v(" 状态。")]),_._v(" "),e("li",[_._v("除了 "),e("code",[_._v("for...of")]),_._v(" 循环以外，扩展运算符（"),e("code",[_._v("...")]),_._v("）、解构赋值和 "),e("code",[_._v("Array.from")]),_._v(" 方法内部调用的，都是遍历器接口。这意味着，它们都可以将 "),e("code",[_._v("Generator")]),_._v(" 函数返回的 "),e("code",[_._v("Iterator")]),_._v(" 对象，作为参数。")]),_._v(" "),e("li",[e("code",[_._v("Generator")]),_._v(" 函数返回的遍历器对象，都有一个 "),e("code",[_._v("throw")]),_._v(" 方法，可以在函数体外抛出错误，然后在 "),e("code",[_._v("Generator")]),_._v(" 函数体内捕获。")]),_._v(" "),e("li",[e("code",[_._v("throw")]),_._v(" 方法抛出的错误要被内部捕获，前提是必须至少执行过一次 "),e("code",[_._v("next")]),_._v(" 方法。")]),_._v(" "),e("li",[e("code",[_._v("throw")]),_._v(" 方法被捕获以后，会附带执行下一条 "),e("code",[_._v("yield")]),_._v(" 表达式。也就是说，会附带执行一次 "),e("code",[_._v("next")]),_._v(" 方法，不影响下一次遍历。")]),_._v(" "),e("li",[_._v("一旦 "),e("code",[_._v("Generator")]),_._v(" 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用 "),e("code",[_._v("next")]),_._v(" 方法，将返回一个 "),e("code",[_._v("value")]),_._v(" 属性等于 "),e("code",[_._v("undefined")]),_._v("、"),e("code",[_._v("done")]),_._v(" 属性等于 "),e("code",[_._v("true")]),_._v(" 的对象，即 "),e("code",[_._v("JavaScript")]),_._v(" 引擎认为这个 "),e("code",[_._v("Generator")]),_._v(" 已经运行结束了。")]),_._v(" "),e("li",[e("code",[_._v("Generator")]),_._v(" 函数返回的遍历器对象，还有一个 "),e("code",[_._v("return")]),_._v(" 方法，可以返回给定的值，并且终结遍历 "),e("code",[_._v("Generator")]),_._v(" 函数。")]),_._v(" "),e("li",[_._v("如果 "),e("code",[_._v("Generator")]),_._v(" 函数内部有 "),e("code",[_._v("try…finally")]),_._v(" 代码块，且正在执行 "),e("code",[_._v("try")]),_._v(" 代码块，那么 "),e("code",[_._v("return")]),_._v(" 方法会推迟到 "),e("code",[_._v("finally")]),_._v(" 代码块执行完再执行。")]),_._v(" "),e("li",[e("code",[_._v("next()")]),_._v("、"),e("code",[_._v("throw()")]),_._v("、"),e("code",[_._v("return()")]),_._v(" 这三个方法本质上是同一件事："),e("code",[_._v("next()")]),_._v(" 是将 "),e("code",[_._v("yield")]),_._v(" 表达式替换成一个值、"),e("code",[_._v("throw()")]),_._v(" 是将 "),e("code",[_._v("yield")]),_._v(" 表达式替换成一个 "),e("code",[_._v("throw")]),_._v(" 语句、"),e("code",[_._v("return()")]),_._v(" 是将 "),e("code",[_._v("yield")]),_._v(" 表达式替换成一个 "),e("code",[_._v("return")]),_._v(" 语句。")]),_._v(" "),e("li",[e("code",[_._v("yield*")]),_._v(" 表达式，用来在一个 "),e("code",[_._v("Generator")]),_._v(" 函数里面执行另一个 "),e("code",[_._v("Generator")]),_._v(" 函数。")]),_._v(" "),e("li",[e("code",[_._v("yield*")]),_._v(" 后面的 "),e("code",[_._v("Generator")]),_._v(" 函数（没有 "),e("code",[_._v("return")]),_._v(" 语句时），等同于在 "),e("code",[_._v("Generator")]),_._v(" 函数内部，部署一个 "),e("code",[_._v("for...of")]),_._v(" 循环。")]),_._v(" "),e("li",[_._v("如果被代理的 "),e("code",[_._v("Generator")]),_._v(" 函数有 "),e("code",[_._v("return")]),_._v(" 语句，那么就可以向代理它的 "),e("code",[_._v("Generator")]),_._v(" 函数返回数据。")]),_._v(" "),e("li",[_._v("在内存中，子例程只使用一个栈（"),e("code",[_._v("stack")]),_._v("），而协程是同时存在多个栈，但只有一个栈是在运行状态，也就是说，协程是以多占用内存为代价，实现多任务的并行。")]),_._v(" "),e("li",[e("code",[_._v("Generator")]),_._v(" 函数执行产生的上下文环境，一旦遇到 "),e("code",[_._v("yield")]),_._v(" 命令，就会暂时退出堆栈，但是并不消失，里面的所有变量和对象会冻结在当前状态。等到对它执行 "),e("code",[_._v("next")]),_._v(" 命令时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。")])]),_._v(" "),e("h2",{attrs:{id:"五、iterator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、iterator"}},[_._v("#")]),_._v(" 五、Iterator")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("遍历器是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 "),e("code",[_._v("Iterator")]),_._v(" 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("Iterator")]),_._v(" 的三个作用："),e("br"),_._v("\n(1)为各种数据结构提供统一的访问接口。"),e("br"),_._v("\n(2)使数据结构的成员能够按照某种次序排列。"),e("br"),_._v("\n(3)供 "),e("code",[_._v("for…of")]),_._v(" 消费。"),e("br")])]),_._v(" "),e("li",[e("p",[_._v("遍历器对象本质上，就是一个指针对象。")])]),_._v(" "),e("li",[e("p",[_._v("由于 "),e("code",[_._v("Iterator")]),_._v(" 只是把接口规格加到数据结构之上，所以，遍历器与它所遍历的那个数据结构，实际上是分开的，完全可以写出没有对应数据结构的遍历器对象，或者说用遍历器对象模拟出数据结构。")])]),_._v(" "),e("li",[e("p",[_._v("一种数据结构只要部署了 "),e("code",[_._v("Iterator")]),_._v(" 接口，我们就称这种数据结构是“可遍历的”（iterable）。")])]),_._v(" "),e("li",[e("p",[_._v("对于类似数组的对象（存在数值键名和 "),e("code",[_._v("length")]),_._v(" 属性），部署 "),e("code",[_._v("Iterator")]),_._v(" 接口，有一个简便方法，就是 "),e("code",[_._v("Symbol.iterator")]),_._v(" 方法直接引用数组的 "),e("code",[_._v("Iterator")]),_._v(" 接口。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("Iterator")]),_._v(" 的应用场景："),e("br"),_._v("\n(1)解构赋值：对 "),e("code",[_._v("数组")]),_._v(" 和 "),e("code",[_._v("Set")]),_._v(" 结构进行解构赋值时，会默认调用 "),e("code",[_._v("Symbol.iterator")]),_._v(" 方法。"),e("br"),_._v("\n(2)扩展运算符：扩展运算符（"),e("code",[_._v("...")]),_._v("）也会调用默认的 "),e("code",[_._v("Iterator")]),_._v(" 接口。"),e("br"),_._v("\n(3)"),e("code",[_._v("yield*")]),_._v("："),e("code",[_._v("yield*")]),_._v(" 后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。"),e("br"),_._v("\n(4)任何接受数组作为参数的场合，其实都调用了遍历器接口。"),e("code",[_._v("for…of")]),_._v("、"),e("code",[_._v("Array.from()")]),_._v("、"),e("code",[_._v("Map()")]),_._v("、 "),e("code",[_._v("Set()")]),_._v("、 "),e("code",[_._v("WeakMap()")]),_._v("、 "),e("code",[_._v("WeakSet()")]),_._v("、"),e("code",[_._v("Promise.all()")]),_._v("、"),e("code",[_._v("Promise.race()")]),_._v("。"),e("br")])]),_._v(" "),e("li",[e("p",[_._v("可以覆盖原生的 "),e("code",[_._v("Symbol.iterator")]),_._v(" 方法，达到修改遍历器行为的目的。")])]),_._v(" "),e("li",[e("p",[_._v("遍历器的 "),e("code",[_._v("return")]),_._v(" 方法有点像 "),e("code",[_._v("try - catch -finally")]),_._v(" 中的 "),e("code",[_._v("finally")]),_._v("。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("for…of")]),_._v(" 循环可以代替数组实例的 "),e("code",[_._v("forEach")]),_._v("方法。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("JavaScript")]),_._v(" 原有的 "),e("code",[_._v("for…in")]),_._v(" 循环，只能获得对象的键名，不能直接获取键值。ES6 提供 "),e("code",[_._v("for...of")]),_._v(" 循环，允许遍历获得键值。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("for…of")]),_._v(" 循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟 "),e("code",[_._v("for…in")]),_._v(" 循环也不一样。")])]),_._v(" "),e("li",[e("p",[_._v("计算 "),e("code",[_._v("set")]),_._v(" 时 返回一个值，计算 "),e("code",[_._v("map")]),_._v(" 时返回一个数组，保存键和值。")])]),_._v(" "),e("li",[e("p",[_._v("ES6 的数组、"),e("code",[_._v("Set")]),_._v("、"),e("code",[_._v("Map")]),_._v(" 都部署了 "),e("code",[_._v("entries()")]),_._v("、"),e("code",[_._v("keys()")]),_._v("、"),e("code",[_._v("values()")]),_._v(" 三个方法，但是 "),e("code",[_._v("Set")]),_._v(" 的后两个方法效果一模一样。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("for…of")]),_._v(" 还可以用于循环字符串、"),e("code",[_._v("DOM NodeList")]),_._v(" 对象、"),e("code",[_._v("arguments")]),_._v(" 对象这些类似数组结构的数据。")])]),_._v(" "),e("li",[e("p",[_._v("对于字符串来说，"),e("code",[_._v("for…of")]),_._v(" 循环还有一个特点，就是会正确识别 "),e("code",[_._v("32")]),_._v(" 位 "),e("code",[_._v("UTF-16")]),_._v(" 字符。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("for…in")]),_._v(" 循环主要是为遍历对象而设计的，不适用于遍历数组。因为 "),e("code",[_._v("for…in")]),_._v(" 循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("for…of")]),_._v(" 可以与 "),e("code",[_._v("break")]),_._v("、"),e("code",[_._v("continue")]),_._v(" 和 "),e("code",[_._v("return")]),_._v(" 配合使用。可以摒弃 "),e("code",[_._v("forEach")]),_._v(" 了。舒服！")])])]),_._v(" "),e("h2",{attrs:{id:"六、promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、promise"}},[_._v("#")]),_._v(" 六、Promise")]),_._v(" "),e("h3",{attrs:{id:"_6-1-example1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-example1"}},[_._v("#")]),_._v(" 6.1 Example1")]),_._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("const")]),_._v(" p1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("new")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("If")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("…")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("…"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("else")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("success")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("error")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("const")]),_._v(" p2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("new")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("If")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("…")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("…"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("else")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("success")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[_._v("error")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br"),e("span",{staticClass:"line-number"},[_._v("5")]),e("br"),e("span",{staticClass:"line-number"},[_._v("6")]),e("br")])]),e("ol",[e("li",[e("code",[_._v("Promise.resove()")]),_._v(" 将参数包装成一个新的 "),e("code",[_._v("Promise")]),_._v(" 实例，"),e("code",[_._v("Promise.prototype.then()")]),_._v(" 处理，可以实现链式调用。")]),_._v(" "),e("li",[e("code",[_._v("Promise.resove()")]),_._v(" 接收的参数有 "),e("code",[_._v("Promise")]),_._v(" 实例、"),e("code",[_._v("thenable")]),_._v(" 对象、不是对象的、没有参数。并且后三种情况会立即 "),e("code",[_._v("then")]),_._v(" 方法，立即 "),e("code",[_._v("resolve")]),_._v(" 的 "),e("code",[_._v("Promise")]),_._v(" 对象，是在本轮“事件循环”（"),e("code",[_._v("event loop")]),_._v("）的结束时，而不是在下一轮“事件循环”的开始时。")]),_._v(" "),e("li",[e("code",[_._v("Promise.reject()")]),_._v(" 返回一个新的 "),e("code",[_._v("Promise")]),_._v(" 实例，该实例的状态为 "),e("code",[_._v("rejected")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("Promise.reject()")]),_._v(" 的参数，会原封不动地作为 "),e("code",[_._v("reject")]),_._v(" 的理由，变成后续方法的参数。")]),_._v(" "),e("li",[e("code",[_._v("Promise.prototype.catch()")]),_._v(" 是 "),e("code",[_._v("Promise.prototype.then()")]),_._v(" 的别名函数，只是第一个参数是 "),e("code",[_._v("null")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("Promise.prototype.finally()")]),_._v(" 不依赖于 "),e("code",[_._v("Promise")]),_._v(" 的执行结果，也是 "),e("code",[_._v("then")]),_._v(" 的特例。")])]),_._v(" "),e("h3",{attrs:{id:"_6-2-example2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-example2"}},[_._v("#")]),_._v(" 6.2 Example2")]),_._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("const")]),_._v(" p1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("all")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("p1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" p2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" p3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("const")]),_._v(" p2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("race")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("p1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" p2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" p3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br")])]),e("ol",[e("li",[e("code",[_._v("Promise.all")]),_._v("：只有 "),e("code",[_._v("p1")]),_._v("、"),e("code",[_._v("p2")]),_._v("、"),e("code",[_._v("p3")]),_._v(" 的状态都变成 "),e("code",[_._v("fulfilled")]),_._v("，"),e("code",[_._v("p1")]),_._v(" 的状态才会变成 "),e("code",[_._v("fulfilled")]),_._v("，此时"),e("code",[_._v("p1")]),_._v("、"),e("code",[_._v("p2")]),_._v("、"),e("code",[_._v("p3")]),_._v(" 的返回值组成一个数组，传递给 "),e("code",[_._v("p1")]),_._v(" 的回调函数。")]),_._v(" "),e("li",[e("code",[_._v("Promise.race")]),_._v("：只要 "),e("code",[_._v("p1")]),_._v("、"),e("code",[_._v("p2")]),_._v("、"),e("code",[_._v("p3")]),_._v("之中有一个被 "),e("code",[_._v("rejected")]),_._v("，"),e("code",[_._v("p1")]),_._v(" 的状态就变成 "),e("code",[_._v("rejected")]),_._v("，此时第一个被 "),e("code",[_._v("reject")]),_._v("的实例的返回值，会传递给p2的回调函数。")]),_._v(" "),e("li",[_._v("只要 "),e("code",[_._v("p1")]),_._v("、"),e("code",[_._v("p2")]),_._v("、"),e("code",[_._v("p3")]),_._v(" 之中有一个实例率先改变状态，"),e("code",[_._v("p2")]),_._v("的状态就跟着改变。那个率先改变的 "),e("code",[_._v("Promise")]),_._v(" 实例的返回值，就传递给 "),e("code",[_._v("p2")]),_._v(" 的回调函数。")])]),_._v(" "),e("h3",{attrs:{id:"_6-3-example3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-example3"}},[_._v("#")]),_._v(" 6.3 Example3")]),_._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[_._v("Promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("try")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("users"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[_._v("id")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v(":")]),_._v(" userId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[_._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br")])]),e("ol",[e("li",[e("code",[_._v("Promise.try")]),_._v("：同步代码同步执行，异步代码异步执行，异常也已在 "),e("code",[_._v("catch")]),_._v(" 函数中捕获。")]),_._v(" "),e("li",[e("code",[_._v("Promise.try")]),_._v(" 就是模拟 "),e("code",[_._v("try")]),_._v(" 代码块，就像 "),e("code",[_._v("promise.catch")]),_._v(" 模拟的是 "),e("code",[_._v("catch")]),_._v(" 代码块。")])]),_._v(" "),e("h2",{attrs:{id:"七、symbol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、symbol"}},[_._v("#")]),_._v(" 七、Symbol")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("ES6")]),_._v(" 中定义了第七种数据类型 "),e("code",[_._v("Symbol")]),_._v(" ，使用 "),e("code",[_._v("Symbol(“description”)")]),_._v(" 进行定义，"),e("code",[_._v("description")]),_._v(" 字符串用来描述当前值，可以不传。")]),_._v(" "),e("li",[e("code",[_._v("Symbol")]),_._v(" 定义的值是独一无二的，相同参数的 "),e("code",[_._v("Symbol")]),_._v(" 函数的返回值也是不相等的。")]),_._v(" "),e("li",[_._v("如果 "),e("code",[_._v("Symbol")]),_._v(" 的参数是一个对象，就会调用该对象的 "),e("code",[_._v("toString")]),_._v(" 方法，将其转为字符串，然后才生成一个 "),e("code",[_._v("Symbol")]),_._v(" 值。")]),_._v(" "),e("li",[e("code",[_._v("Symbol")]),_._v(" 值可以显式的转换成 "),e("code",[_._v("String")]),_._v(" 和 "),e("code",[_._v("Boolean")]),_._v("，但是不能转换成 "),e("code",[_._v("Number")]),_._v("，也不能进行计算。")]),_._v(" "),e("li",[e("code",[_._v("Symbol")]),_._v(" 值作为对象属性名时，不能用点运算符，必须放在方括号之中。")]),_._v(" "),e("li",[e("code",[_._v("Symbol")]),_._v(" 作为属性名，该属性不会出现在 "),e("code",[_._v("for...in")]),_._v("、"),e("code",[_._v("for...of")]),_._v(" 循环中，也不会被 "),e("code",[_._v("Object.keys()")]),_._v("、"),e("code",[_._v("Object.getOwnPropertyNames()")]),_._v("、"),e("code",[_._v("JSON.stringify()")]),_._v(" 返回。但是，它也不是私有属性，有一个"),e("code",[_._v("Object.getOwnPropertySymbols")]),_._v(" 方法，可以获取指定对象的所有 "),e("code",[_._v("Symbol")]),_._v(" 属性名。")]),_._v(" "),e("li",[_._v("另一个新的 "),e("code",[_._v("API")]),_._v("，"),e("code",[_._v("Reflect.ownKeys")]),_._v(" 方法可以返回所有类型的键名，包括常规键名和 "),e("code",[_._v("Symbol")]),_._v(" 键名。")])]),_._v(" "),e("h2",{attrs:{id:"八、set-map-weakset-weakmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、set-map-weakset-weakmap"}},[_._v("#")]),_._v(" 八、Set Map WeakSet WeakMap")]),_._v(" "),e("h3",{attrs:{id:"_8-1-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-set"}},[_._v("#")]),_._v(" 8.1 Set")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("Set")]),_._v(" 函数可以接受一个数组（或者具有 "),e("code",[_._v("iterable")]),_._v(" 接口的其他数据结构）作为参数，用来初始化。")]),_._v(" "),e("li",[_._v("在 "),e("code",[_._v("Set")]),_._v(" 内部，两个NaN是相等，两个对象总是不相等的。")]),_._v(" "),e("li",[_._v("四个操作方法："),e("code",[_._v("add")]),_._v("、"),e("code",[_._v("delete")]),_._v("、"),e("code",[_._v("has")]),_._v("、"),e("code",[_._v("clear")]),_._v("。")]),_._v(" "),e("li",[_._v("四个遍历方法："),e("code",[_._v("keys")]),_._v("、"),e("code",[_._v("values")]),_._v("、"),e("code",[_._v("entries")]),_._v("、"),e("code",[_._v("forEach")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("Array.from")]),_._v(" 方法可以将 "),e("code",[_._v("Set")]),_._v(" 结构转为数组。")]),_._v(" "),e("li",[_._v("扩展运算符（"),e("code",[_._v("...")]),_._v("）内部使用 "),e("code",[_._v("for…of")]),_._v(" 循环。")])]),_._v(" "),e("h3",{attrs:{id:"_8-2-map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-map"}},[_._v("#")]),_._v(" 8.2 Map")]),_._v(" "),e("ol",[e("li",[_._v("存储键值对，键可以是任意类型，包括 "),e("code",[_._v("undefined")]),_._v("、"),e("code",[_._v("null")]),_._v("、"),e("code",[_._v("NaN")]),_._v("、"),e("code",[_._v("对象")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("new Map()")]),_._v(" 接受 "),e("code",[_._v("[[key, value], [key, value]]")]),_._v(" 模式的数组作为参数。")]),_._v(" "),e("li",[_._v("五个操作方法："),e("code",[_._v("set")]),_._v("、"),e("code",[_._v("get")]),_._v("、"),e("code",[_._v("has")]),_._v("、"),e("code",[_._v("delete")]),_._v("、"),e("code",[_._v("clear")]),_._v("。")]),_._v(" "),e("li",[_._v("四个遍历方法："),e("code",[_._v("keys")]),_._v("、"),e("code",[_._v("values")]),_._v("、"),e("code",[_._v("entries")]),_._v("、"),e("code",[_._v("forEach")]),_._v("。")])]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[_._v("Set 和 Map 的共同点")]),e("p",[_._v("在Set 和 Map 中，“认为 NaN 和 NaN 是严格相等的”")])]),e("h3",{attrs:{id:"_8-3-weakset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-weakset"}},[_._v("#")]),_._v(" 8.3 WeakSet")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("WeakSet")]),_._v(" 的成员只能是对象，而不能是其他类型的值。")]),_._v(" "),e("li",[e("code",[_._v("WeakSet")]),_._v(" 可以接受一个 "),e("code",[_._v("[[key, value], [key, value]]")]),_._v(" 模式的数组或类似数组的对象作为参数。")]),_._v(" "),e("li",[_._v("四个操作方法："),e("code",[_._v("add()")]),_._v("、"),e("code",[_._v("has()")]),_._v("、"),e("code",[_._v("delete()")]),_._v("。")])]),_._v(" "),e("h3",{attrs:{id:"_8-4-weakmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-weakmap"}},[_._v("#")]),_._v(" 8.4 WeakMap")]),_._v(" "),e("ol",[e("li",[e("code",[_._v("WeakMap")]),_._v(" 只接受对象作为键名（"),e("code",[_._v("null")]),_._v(" 除外），不接受其他类型的值作为键名。")]),_._v(" "),e("li",[_._v("【重点】"),e("code",[_._v("WeakMap")]),_._v(" 的键名所指向的对象，不计入垃圾回收机制。")]),_._v(" "),e("li",[_._v("没有遍历操作（即没有 "),e("code",[_._v("keys()")]),_._v("、"),e("code",[_._v("values()")]),_._v(" 和 "),e("code",[_._v("entries()")]),_._v(" 方法），也没有 "),e("code",[_._v("size")]),_._v(" 属性。")]),_._v(" "),e("li",[_._v("四个操作方法："),e("code",[_._v("get()")]),_._v("、"),e("code",[_._v("set()")]),_._v("、"),e("code",[_._v("has()")]),_._v("、"),e("code",[_._v("delete()")]),_._v("。")])]),_._v(" "),e("p",[_._v("::: WeakSet 和 WeakMap 的共同点\n没有遍历操作，没有 size 属性，没有 clear 方法，键名不计入垃圾回收机制\n:::")]),_._v(" "),e("h2",{attrs:{id:"九、编程风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、编程风格"}},[_._v("#")]),_._v(" 九、编程风格")]),_._v(" "),e("ol",[e("li",[_._v("建议不再使用 "),e("code",[_._v("var")]),_._v(" 命令，而是使用 "),e("code",[_._v("let")]),_._v(" 命令取代。 在 "),e("code",[_._v("let")]),_._v(" 和 "),e("code",[_._v("const")]),_._v(" 之间，建议优先使用 "),e("code",[_._v("const")]),_._v("，尤其是在全局环境，不应该设置变量，只应设置常量。")]),_._v(" "),e("li",[_._v("静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。")]),_._v(" "),e("li",[_._v("单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。")]),_._v(" "),e("li",[_._v("使用扩展运算符（"),e("code",[_._v("...")]),_._v("）拷贝数组。使用 "),e("code",[_._v("Array.from")]),_._v(" 方法，将类似数组的对象转为数组。")]),_._v(" "),e("li",[_._v("简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。")]),_._v(" "),e("li",[_._v("只有模拟现实世界的实体对象时，才使用 "),e("code",[_._v("Object")]),_._v("。如果只是需要 "),e("code",[_._v("key: value")]),_._v(" 的数据结构，使用 "),e("code",[_._v("Map")]),_._v(" 结构。因为 "),e("code",[_._v("Map")]),_._v(" 有内建的遍历机制。")]),_._v(" "),e("li",[_._v("如果模块默认输出一个函数，函数名的首字母应该小写。如果模块默认输出一个对象，对象名的首字母应该大写。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);