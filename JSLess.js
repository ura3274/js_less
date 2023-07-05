function less10(){
const elem = document.querySelector(".frameCenter0");
elem.innerHTML=`<h1>Основы javascript</h1><h2>Переменные и константы</h2><div class="date">Последнее обновление: 22.11.2021</div>

<p>Для хранения данных в программе используются <span class="b">переменные</span>. Переменные предназначены для хранения каких-нибудь временных данных или таких 
данных, которые в процессе работы могут менять свое значение.</p>
<h3>Объявление переменных</h3>
<p>Для создания переменных применяются операторы <span class="b">var</span> и <span class="b">let</span>. 
Например, объявим переменную <code>username</code>:</p>
<pre class="brush:js;">
var username;
</pre>
<p>Объявление переменной представляет отдельную инструкцию, поэтому завершается точкой с запятой.</p>
<p>Аналогичное определение переменной с помощью оператора <span class="b">let</span>:</p>
<pre class="brush:js;">
let username;
</pre>
<p>Каждая переменная имеет имя. Имя представляет собой произвольный набор алфавитно-цифровых символов, знака подчеркивания (_) или знака доллара ($), причем названия не должны 
начинаться с цифровых символов. То есть мы можем использовать в названии буквы, цифры, подчеркивание. Однако все остальные символы запрещены.</p>
<p>Например, правильные названия переменных:</p>
<pre class="brush:js;">
$commision
someVariable
product_Store
income2
myIncome_from_deposit
</pre>
<p>Следующие названия являются некорректными и не могут использоваться:</p>
<pre class="brush:js;">
222lol
@someVariable
my%percent
</pre>
<p>Также нельзя давать переменным такие имена, которые совпадают с зарезервированными ключевыми словами. В JavaScript не так много ключевых слов, поэтому данное правило не сложно соблюдать. 
Например, следующее название будет некорректным, так как <span class="b">for</span> - ключевое слово в JavaScript:</p>
<pre class="brush:js;">var for;</pre>
<p>Список зарезервированных слов в JavaScript:</p>
<p>await, break, case, catch, class, const, continue, debugger, default, delete, do, else, enum, export, extends, false, finally, for, function, if, 
import, in, instanceof, new, null, return, super, switch, this, throw, true, try, typeof, var, void, while, with, yield</p>
<p>С развитием JavaScript и принятием новых стандартов языка список зарезервированных слов может пополняться, однако в целом их не так 
уж много.</p>
<p>При названии переменных надо учитывать, что JavaScript является <span class="b">регистрозависимым</span> языком, то есть в следующем коде объявлены две разные переменные:</p>
<pre class="brush:js;">
var username;
var userName;
</pre>
<p>Через запятую можно определить сразу несколько переменных:</p>
<pre class="brush:js;">
var username, age, heigt;
let a, b, c;
</pre>
<h3>Присвоение переменной значения</h3>
<p>После определения переменной ей можно присвоить какое-либо значение. Для этого применяется <span class="b">оператор присваивания</span> (<span class="b">=</span>):</p>
<pre class="brush:js;">
var username;
username = "Tom";
</pre>
<p>То есть в данном случае переменная <code>username</code> будет хранить строку "Tom". После присвоения переменной значения мы можем что-то сделать с этим значением, 
например, выведем его на консоль:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    var username;			// Определение переменной username
    username = "Tom";		// Присвоение переменной значения
    console.log(username);	// Вывод значения переменной username на консоль
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<img src="./pics/2.6.png" alt="Переменные в JavaScript" />
<p>Можно сразу присвоить переменной значение при ее определении:</p>
<pre class="brush:js;">
var username = "Tom";
let userage = 37;
</pre>
<p>Процесс присвоения переменной начального значения называется <span class="b">инициализацией</span>.</p>

<p>Отличительной чертой переменных является то, что мы можем изменить их значение:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    var username = "Tom";
    console.log("username до изменения:", username);
    username = "Bob";
    console.log("username после изменения:", username);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<img src="./pics/2.7.png" alt="Изменение переменных в JavaScript" />
<h3>Константы</h3>
<p>С помощью ключевого слова <span class="b">const</span> можно определить <span class="b">константу</span>, которая, как и переменная, хранит значение, однако 
это значение не может быть изменено.</p>
<pre class="brush:js;">
const username = "Tom";
</pre>
<p>Если мы попробуем изменить ее значение, то мы столкнемся с ошибкой:</p>
<pre class="brush:js;">
const username = "Tom";
username = "Bob";	// ошибка, username - константа, поэтому мы не можем изменить ее значение
</pre>
<img src="./pics/2.8.png" alt="Константы const в JavaScript" />
<p>Также стоит отметить, что поскольку мы не можем изменить значение константы, то она должна быть инициализирована, то есть при ее определении мы должны предоставить ей начальное 
значение. Если мы этого не сделаем, то опять же мы столкнемся с ошибкой:</p>
<pre class="brush:js;">
const username; // ошибка, username не инициализирована
</pre>
<p>Когда использовать переменные, а когда константы? Если вы уверены, что значение в процессе программы не будет изменяться, тогда это значение определяется в виде константы. 
Если неизвестно, будет ли значение меняться или нет, то рекомендуется определить значение как константу. А в случае если в далее потребуется его изменить, 
то просто можно изменить определение значения с <span class="b">const</span> на <span class="b">var</span>/<span class="b">let</span>.</p>
`;
}
//=======================================================================================
function less11(){
    const elem = document.querySelector(".frameCenter0");
    elem.innerHTML=`<h2>Типы данных</h2><div class="date">Последнее обновление: 08.09.2021</div>
  
    <p>Все используемые данные в javascript имеют определенный тип. В JavaScript имеется восемь типов данных:</p>
  <ul>
  <li><p><span class="b">String</span>: представляет строку</p></li>
  <li><p><span class="b">Number</span>: представляет числовое значение</p></li>
  <li><p><span class="b">BigInt</span>: предназначен для представления очень больших целых чисел</p></li>
  <li><p><span class="b">Boolean</span>: представляет логическое значение <span class="b">true</span> или <span class="b">false</span></p></li>
  <li><p><span class="b">Undefined</span>: представляет одно специальное значение - <span class="b">undefined</span> и указывает, что значение не установлено</p></li>
  <li><p><span class="b">Null</span>: представляет одно специальное значение - <span class="b">null</span> и указывает на отсутствие значения</p></li>
  <li><p><span class="b">Symbol</span>: представляет уникальное значение, которое часто применяется для обращения к свойствам сложных объектов</p></li>
  <li><p><span class="b">Object</span>: представляет комплексный объект</p></li>
  </ul>
  <p>Первые семь типов представляют примитивные типы данных. Последний тип - <span class="b">Object</span> представляет сложный, комплексный тип данных, который состоит из значений 
  примитивных типов или других объектов. Рассмотрим основные примитивные типы данных.</p>
  <h3>Числовые данные</h3>
  <h4>Number</h4>
  <p>Тип <span class="b">Number</span> представляет числа в JavaScript, которые могут быть целыми или дробными:</p>
  <ul>
  <li><p>Целые числа, например, 35. Мы можем использовать как положительные, так и отрицательные числа. Диапазон используемых чисел: 
  от -2<sup>53</sup> до 2<sup>53</sup></p></li>
  <li><p>Дробные числа (числа с плавающей точкой), например, 3.5575. Опять же можно использовать как положительные, так и отрицательные числа. Для 
  чисел с плавающей точкой используется тот же диапазон: 
  от -2<sup>53</sup> до 2<sup>53</sup></p></li>
  </ul>
  <p>Например:</p>
  <pre class="brush:js;">
  let x = 45;
  let y = 23.897;
  </pre>
  <p>В качестве разделителя между целой и дробной частями, как и в других языках программирования, используется точка.</p>
  <h4>Тип BigInt</h4>
  <p>Тип <span class="b">BigInt</span> добавлен в последних стандартах JavaScript для представления очень больших целых чисел, которые выходят за пределы диапазона типа 
  number. Это не значит, что мы не можем совсем работать с большими числами с помощью типа number, но работа с ними в случае с типом number будет сопряжена с проблемами. 
  Рассмотрим небольшой пример:</p>
  <pre class="brush:js;">
  let num = 9007199254740991
  console.log(num);		// 9007199254740991
  console.log(num + 1);	// 9007199254740992
  console.log(num + 2);	// 9007199254740992
  </pre>
  <p>Здесь переменной num присваивается максимальное значение. И далее прибавляем к ней некоторые значения и выводим на консоль результат. И результаты 
  могут нас смутить, особенно в случае прибавления числа 2.</p>
  
  <p>Для определения числа как значения типа <code>BigInt</code> в конце числа добавляется суффикс <span class="b">n</span>:</p>
  <pre class="brush:js;">
  let dimension = 19007n;
  const value = 2545n;
  </pre>
  <p>Например, изменим из предыдущего примера тип number на bigint:</p>
  <pre class="brush:js;">
  let num = 9007199254740991n
  console.log(num);		// 9007199254740991n
  console.log(num + 1n);	// 9007199254740992n
  console.log(num + 2n);	// 9007199254740993n
  console.log(num + 3n);	// 9007199254740994n
  </pre>
  
  <h3>Тип Boolean</h3>
  <p>Тип Boolean представляет булевые или логические значения <span class="b">true</span> (верно) и <span class="b">false</span> (ложно):</p>
  <pre class="brush:js;">
  let isAlive = true;
  let isDead = false;
  </pre>
  <h3>Строки String</h3>
  <p>Тип <code>String</code> представляет строки. Для определения строк применяются кавычки, причем, можно использовать как двойные, так одинарные, так и косые кавычки. 
  Единственно ограничение: тип закрывающей кавычки должен быть тот же, что и тип открывающей, то есть либо обе двойные, либо обе одинарные.</p>
  <pre class="brush:js;">
  let user = "Tom";
  let company = 'Microsoft';
  let language = 'JavaScript';
  
  console.log(user);
  console.log(company);
  console.log(language);
  </pre>
  <p>Если внутри строки встречаются кавычки, то мы их должны экранировать слешем. Например, пусть у нас есть текст <code>"Бюро "Рога и копыта""</code>. 
  Теперь экранируем кавычки:</p>
  <pre class="brush:js;">
  let company = "Бюро \"Рога и копыта\"";
  </pre>
  <p>Также мы можем внутри стоки использовать другой тип кавычек:</p>
  <pre class="brush:js;">
  let company1 = "Бюро 'Рога и копыта'";
  let company2 = 'Бюро "Рога и копыта"';
  </pre>
  <h4>Интерполяция</h4>
  <p>Использование косых кавычек позволяет нам применять такой прием как <span class="b">интерполяция</span> - встраивать данные в строку. Например:</p>
  <pre class="brush:js;">
  let user = "Tom";
  let text = \`Name: \${user}\`;
  console.log(text);	// Name: Tom
  </pre>
  <p>Для встраивания значений выражений (например, значений других переменных и констант) в строку перед выражением ставится знак доллара <span class="b">$</span>, после которого в фигурных скобках 
  указывается выражение. Так, в примере выше <code>&sect{user}</code> означает, что в этом месте строки надо встроить значение переменной <code>user</code>.</p>
  <p>Подобным образом можно встраивать и больше количество данных:</p>
  <pre class="brush:js;">
  let user = "Tom";
  let age = 37;
  let isMarried = false;
  let text = \`Name: \${user}   Age: \${age}   IsMarried: \${isMarried}\`;
  console.log(text);	// Name: Tom   Age: 37   IsMarried: false
  </pre>
  <h3>null и undefined</h3>
  <p><span class="b">undefined</span> указывает, что значение не определено или не установлено. Например, когда мы только определяем переменную без присвоения ей начального значения, 
  она представляет тип undefined:</p>
  <pre class="brush:js;">
  let isAlive;
  console.log(isAlive); // выведет undefined
  </pre>
  <p>Присвоение значение null означает, что у переменной отсутствует значение:</p>
  <pre class="brush:js;">
  let isAlive;
  console.log(isAlive); // undefined
  isAlive = null;
  console.log(isAlive); // null
  isAlive = undefined;  // снова установим тип undefined
  console.log(isAlive); // undefined
  </pre>
  <h3>object</h3>
  <p>Тип <code>object</code> представляет сложный объект. Простейшее определение объекта представляют фигурные скобки:</p>
  <pre class="brush:js;">let user = {};</pre>
  <p>Объект может иметь различные свойства и методы:</p>
  <pre class="brush:js;">
  const user = {name: "Tom", age:24};
  console.log(user.name);
  </pre>
  <p>В данном случае объект называется user, и он имеет два свойства: name и age. Это краткое описание объектов, более подробно объекты мы рассморим в последующих статьях.</p>
  <h3>Слабая/динамическая типизация</h3>
  <p>JavaScript является языком со слабой и динамической типизацией. Это значит, что переменные могут динамически менять тип. Например:</p>
  <pre class="brush:js;">
  let id;  // тип undefined
  console.log(id);
  id = 45;  // тип number
  console.log(id);
  id = "45"; // тип string
  console.log(id);
  </pre>
  <p>Несмотря на то, что во втором и третьем случае консоль выведет нам число 45, но во втором случае переменная <code>id</code> будет представлять число, а в третьем случае - строку.</p>
  <p>Это важный момент, который надо учитывать и от которого зависит поведение переменной в программе:</p>
  <pre class="brush:js;">
  let a = 45;  // тип number
  let b = a + 5;
  console.log(b); // 50
    
  a = "45"; // тип string
  let c = a + 5
  console.log(c); // 455
  </pre>
  <p>Выше в обоих случая к переменной <code>a</code> применяется операция сложения (+). Но в первом случае <code>a</code> представляет число, поэтому 
  результатом операции <code>a + 5</code> будет число 50.</p>
  <p>Во втором случае <code>a</code> представляет строку. Но операция сложения между строкой и числом 5 невозможна. Поэтому число 5 будет преобразовываться к строке, 
  и будет происходить операция объединения строк. Поэтому во втором случае результатом выражения <code>a + 5</code> будет стока "455".</p>
  <h3>Оператор typeof</h3>
  <p>С помощью оператора <span class="b">typeof</span> можно получить тип переменной:</p>
  <pre class="brush:js;">
  let id;
  console.log(typeof id);		  // undefined
  
  id = 45;
  console.log(typeof id);	  // number
  
  id = 45n;
  console.log(typeof id);		// bigint
  
  id = "45";
  console.log(typeof id);		// string
  </pre>
  <p>Стоит отметить, что для значения <span class="b">null</span> оператор <code>typeof</code> возвращает значение "object", несмотря на то, что согласно спецификации 
  JavaScript значение <span class="b">null</span> представляет отдельный тип.</p>`; 
}
//============================================================================================

function less12(){  
    document.querySelector(".frameCenter0").innerHTML=`
    <h3>Математические операции</h3>
    <p>JavaScript поддерживает все базовые математические операции:</p>
    <p><span class="b">Сложение</span>:</p>
    <pre class="brush:js;">
    let x = 10;
    let y = x + 50;
    </pre>
    <p><span class="b">Вычитание</span>:</p>
    <pre class="brush:js;">
    let x = 100;
    let y = x - 50;
    </pre>
    <p><span class="b">Умножение</span>:</p>
    <pre class="brush:js;">
    let x = 4;
    let y = 5;
    let z = x * y;
    </pre>
    <p><span class="b">Деление</span>:</p>
    <pre class="brush:js;">
    let x = 5;
    let y = 2;
    let z = x / y;
    console.log(z); // 2.5
    </pre>
    <p><span class="b">Деление по модулю</span> (оператор %) возвращает остаток от деления:</p>
    <pre class="brush:js;">
    let x = 5;
    let y = 2;
    let z = x % y;
    console.log(z); // 1
    </pre>
    <p>Результатом будет 1, так как наибольшее целое число, которое меньше или равно 5 и при этом делится на 2 равно 4, а 5 - 4 = 1.</p>
    
    <p><span class="b">Возведение в степень</span>. Оператор <span class="b">**</span> возводит число в определенную степень:</p>
    <pre class="brush:js;">число ** степень</pre>
    <p>Например:</p>
    <pre class="brush:js;">
    const n = 2 ** 3;
    console.log(n);	 // 8
    
    const x = 3;
    const y = 2;
    const z = x ** y;
    console.log(z);	 // 9
    </pre>
    
    <p><span class="b">Инкремент</span>:</p>
    <pre class="brush:js;">
    let x = 5;
    x++; // x = 6
    </pre>
    <p>Оператор инкремента <code>++</code> увеличивает переменную на единицу. Существует префиксный инкремент, который сначала увеличивает переменную 
    на единицу, а затем возвращает ее значение. И есть постфиксный инкремент, который сначала возвращает значение переменной, а затем увеличивает его на единицу:</p>
    <pre class="brush:js;">
    // префиксный инкремент
    let x = 5;
    let z = ++x;
    console.log(x); // 6
    console.log(z); // 6
      
    // постфиксный инкремент
    let a = 5;
    let b = a++;
    console.log(a); // 6
    console.log(b); // 5
    </pre>
    <p>Постфиксный инкремент аналогичен операции:</p>
    <pre class="brush:js;">a = a + 1; // a++</pre>
    <p><span class="b">Декремент</span> уменьшает значение переменной на единицу. Также есть префиксный и постфиксный декремент:</p>
    <pre class="brush:js;">
    // префиксный декремент
    let x = 5;
    let z = --x;
    console.log(x); // 4
    console.log(z); // 4
      
    // постфиксный декремент
    let a = 5;
    let b = a--;
    console.log(a); // 4
    console.log(b); // 5
    </pre>
    <p>Как и принято в математике, все операции выполняются слева направо и различаются по приоритетам: сначала операции инкремента и декремента, затем 
    выполняются умножение и деление, а потом сложение и вычитание. Чтобы изменить стандартный ход выполнения операций, часть выражений можно поместить в скобки:</p>
    <pre class="brush:js;">
    let x = 10;
    let y = 5 + (6 - 2) * --x;
    console.log(y); //41
    </pre>
    
    <h3>Операторы сравнения</h3>
    <p>Как правило, для проверки условия используются операторы сравнения. Операторы сравнения сравнивают два значения и возвращают значение 
    <code>true</code> или <code>false</code>:</p>
    <ul>
    <li><p>==</p><p></p>Оператор равенства сравнивает два значения, и если они равны, возвращает true, иначе возвращает false: <code>x == 5</code><p></p></li>
    <li><p>===</p><p></p>Оператор тождественности также сравнивает два значения и их тип, и если они равны, возвращает true, иначе возвращает false: <code>x === 5</code><p></p></li>
    <li><p>!=</p><p></p>Сравнивает два значения, и если они <span class="b">не</span> равны, возвращает true, иначе возвращает false: <code>x != 5</code><p></p></li>
    <li><p>!==</p><p></p>Сравнивает два значения и их типы, и если они <span class="b">не</span> равны, возвращает true, иначе возвращает false: <code>x !== 5</code><p></p></li>
    <li><p>&gt;</p><p></p>Сравнивает два значения, и если первое больше второго, то возвращает true, иначе возвращает false: <code>x &gt; 5</code><p></p></li>
    <li><p>&lt;</p><p></p>Сравнивает два значения, и если первое меньше второго, то возвращает true, иначе возвращает false: <code>x &lt; 5</code><p></p></li>
    <li><p>&gt;=</p><p></p>Сравнивает два значения, и если первое больше или равно второму, то возвращает true, иначе возвращает false: <code>x &gt;= 5</code><p></p></li>
    <li><p>&lt;=</p><p></p>Сравнивает два значения, и если первое меньше или равно второму, то возвращает true, иначе возвращает false: <code>x &lt;= 5</code><p></p></li>
    </ul>
    <p>Все операторы довольно просты, наверное, за исключением оператора равенства и оператора тождественности. Они оба сравнивают два значения, но оператор тождественности также принимает во внимание 
    и тип значения. Например:</p>
    <pre class="brush:js;">
    let income = 100;
    let strIncome = "100";
    let result = income == strIncome;
    console.log(result); //true
    </pre>
    <p>Переменная result здесь будет равна <code>true</code>, так как фактически и income, и strIncome представляют число 100.</p>
    <p>Но оператор тождественности возвратит в этом случае false, так как данные имеют разные тип:</p>
    <pre class="brush:js;">
    let income = 100;
    let strIncome = "100";
    let result = income === strIncome;
    console.log(result); // false
    </pre>
    <p>Аналогично работают операторы неравенства != и !==.</p>
    <h3>Логические операции</h3>
    <p>Логические операции применяются для объединения результатов двух операций сравнения. В JavaScript есть следующие логические операции:</p>
    <ul>
    <li><p>&amp;&amp;</p><p>Возвращает true, если обе операции сравнения возвращают true, иначе возвращает false:</p>
    <pre class="brush:js;">
    let income = 100;
    let percent = 10;
    let result = income &gt; 50 &amp;&amp; percent &lt; 12;
    console.log(result); //true
    </pre></li>
    <li><p>||</p><p>Возвращает true, если хотя бы одна операция сравнения возвращают true, иначе возвращает false:</p>
    <pre class="brush:js;">
    let income = 100;
    let isDeposit = true;
    let result = income &gt; 50 || isDeposit == true;
    console.log(result); //true
    </pre></li>
    <li><p>!</p><p>Возвращает true, если операция сравнения возвращает false:</p>
    <pre class="brush:js;">
    let income = 100;
    let result1 = !(income &gt; 50);
    console.log(result1); // false, так как income &gt; 50 возвращает true
    
    let isDeposit = false;
    let result2 = !isDeposit;
    console.log(result2); // true
    </pre></li>
    </ul>
    <h3>Операции присваивания</h3>
    <ul>
    <li><p>=</p>
    <p>Приравнивает переменной определенное значение: <code>let x = 5;</code></p></li>
    <li><p>+=</p>
    <p>Сложение с последующим присвоением результата. Например:</p>
    <pre class="brush:js;">
    let a = 23;
    a += 5; // аналогично a = a + 5
    console.log(a); // 28
    </pre>
    </li>
    <li><p>-=</p>
    <p>Вычитание с последующим присвоением результата. Например:</p>
    <pre class="brush:js;">
    let a = 28;
    a -= 10; // аналогично a = a - 10
    console.log(a); // 18
    </pre>
    </li>
    <li><p>*=</p>
    <p>Умножение с последующим присвоением результата:</p>
    <pre class="brush:js;">
    let x = 20;
    x *= 2; // аналогично x = x * 2
    console.log(x); // 40
    </pre>
    </li>
    <li><p>**=</p>
    <p>Возведение в степень с последующим присвоением результата:</p>
    <pre class="brush:js;">
    let x = 5;
    x **= 2;
    console.log(x);	 // 25
    </pre>
    </li>
    <li><p>/=</p>
    <p>Деление с последующим присвоением результата:</p>
    <pre class="brush:js;">
    let x = 40;
    x /= 4; // аналогично x = x / 4
    console.log(x); // 10
    </pre>
    </li>
    <li><p>%=</p>
    <p>Получение остатка от деления с последующим присвоением результата:</p>
    <pre class="brush:js;">
    let x = 10;
    x %= 3; // аналогично x = x % 3
    console.log(x); // 1, так как 10 - 3*3 = 1
    </pre>
    </li>
    
    <li><p>&&=</p>
    <p><code>a &&= b</code> возвращает <code>b</code>, если и <code>a</code> и <code>b</code> равны <code>true</code>. Если какой-то из операндов равен false, то возвращается 
    <code>a</code>. Аналогично выполнению <code>a = a && b</code>:</p>
    <pre class="brush:js;">
    let x = true;
    let y = false;
    y &&= x;
    console.log(y);	// false
    
    let c = false;
    let d = true;
    c &&= d;
    console.log(c);	// false
    
    let a = true;
    let b = true;
    a &&= b;
    console.log(a);	// true
    
    let e = false;
    let f = false;
    e &&= f;
    console.log(e);	// false
    </pre>
    </li>
    
    <li><p>||=</p>
    <p><code>a ||= b</code> эквивалентно выражению <code>a = a || b</code>:</p>
    <pre class="brush:js;">
    let x = true;
    let y = false;
    y ||= x;
    console.log(y);	// true
    
    let a = true;
    let b = true;
    a ||= b;
    console.log(a);	// true
    
    let c = false;
    let d = true;
    c ||= d;
    console.log(c);	// true
    
    let e = false;
    let f = false;
    e ||= f;
    console.log(e);	// false
    </pre>
    </li>
    </ul>`;
}
//=======================================================================================
function less13(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Условные операторы ?: и ??</h2><div class="date">Последнее обновление: 10.09.2021</div>
	

    <p>Условные операторы позволяют проверить некоторое условие и в зависимости от результата проверки выполнить определенные действия. 
  Здесь мы рассмотрим оператор <span class="b">?:</span> или так называемый тернарный оператор и операцию <span class="b">??</span>.</p>
  <h3>Тернарная операция</h3>
  <p>Тернарная операция состоит из трех операндов и имеет следующее определение:</p>
  <pre class="brush:js;">[первый операнд - условие] ? [второй операнд] : [третий операнд]</pre>. 
  <p>В зависимости от условия в первом операнде тернарная операция возвращает второй или третий операнд. Если условие в первом операнде равно <code>true</code>, 
  то возвращается второй операнд; если условие равно <code>false</code>, то третий. Например:</p>
  <pre class="brush:js;">
  const a = 1;
  const b = 2;
  const result = a &lt; b ? a: b;
  console.log(result); // 1
  </pre>
  <p>Здесь первый операнд представляет следующее условие <code>a &lt; b</code>. 
  Если значение константы <code>a</code> меньше значения константы <code>b</code>, то возвращается второй операнд - 
  <code>a</code>, то есть константа <code>result</code> будет равна <code>a</code>.</p>
  <p>Если значение константы <code>a</code> больше или равно значению константы <code>b</code>, то возвращается третий операнд - 
  <code>b</code>, поэтому константа <code>result</code> будет равна значению <code>b</code>.</p>
  <p>В качестве операндов также могут выступать выражения:</p>
  <pre class="brush:js;">
  const a = 1;
  const b = 2;
  const result = a &lt; b ? a + b : a - b;
  console.log(result); // 3
  </pre>
  <p>В этом примере кода первый операнд представляет то же самое условие, что и в предыдущем примере, однако второй и третий операнды представляют арифметические операции. 
  Если значение константы <code>a</code> меньше значения константы <code>b</code>, то возвращается второй операнд - 
  <code>a + b</code>. Соответственно константа <code>result</code> будет равна сумме a и b.</p>
  <p>Если значение константы <code>a</code> больше или равно значению константы <code>b</code>, то возвращается третий операнд - 
  <code>a - b</code>. Соответственно константа <code>result</code> будет равна разности a и b.</p>
  <h3>Оператор ??</h3>
  <p>Оператор <span class="b">??</span> (nullish coalescing operator) позволяет проверить значение на <code>null</code> и <code>undefined</code>. Он принимает 
  два операнда:</p>
  <pre class="brush:js;">
  левый_операнд ?? правый_операнд
  </pre>
  <p>Оператор возвращает значение левого операнда, если оно НЕ равно <code>null</code> и <code>undefined</code>. Иначе возвращается значение правого операнда. Например:</p>
  <pre class="brush:js;">
  const result1 = "hello" ?? "world";
  console.log(result1);	// hello
  
  const result2 = 0 ?? 5;
  console.log(result2);	// 0
  
  const result3 = "" ?? "javascript";
  console.log(result3);	// "" - пустая строка
  
  const result4 = false ?? true;
  console.log(result4);	// false
  
  const result5 = null ?? "not null";
  console.log(result5);	// not null
  
  const result6 = undefined ?? "defined";
  console.log(result6);	// defined
  
  let message = null;
  const hello = "Hi JavaScript";
  const result7 = message ?? hello;
  console.log(result7);	// Hi JavaScript
  </pre>
  <h4>Оператор =??</h4>
  <p>Оператор <code>??</code> имеет модификацию в виде оператора <span class="b">??=</span>, который также позволяет проверить значение на <code>null</code> и <code>undefined</code>. Он принимает 
  два операнда:</p>
  <pre class="brush:js;">
  левый_операнд ??= правый_операнд
  </pre>
  <p>Если левый операнд равен <code>null</code> и <code>undefined</code>, то ему присваивается значение правого операнда. 
  Иначе левый операнд сохраняет свое значение. Например:</p>
  <pre class="brush:js;">
  let message = "Welcome to JavaScript";
  let text = "Hello work!"
  text ??= message;
  console.log(text);	// Hello work!
  </pre>
  <p>Здесь переменная <code>text</code> не равна <code>null</code> или <code>undefined</code>, поэтому она сохраняет свое значение. Обратный пример:</p>
  <pre class="brush:js;">
  let message = "Welcome to JavaScript";
  let text = null;
  text ??= message;
  console.log(text);	// Welcome to JavaScript
  </pre>
  <p>Здесь переменная <code>text</code> равна null, поэтому при посредстве оператора <code>??=</code> она получает значение переменной <code>message</code>.</p>
    `;
}

//=====================================================================================
function less14(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Преобразования данных</h2><div class="date">Последнее обновление: 02.02.2022</div>
    <p>Нередко возникает необходимость преобразовать одни данные в другие. Некоторые преобразования javascript выполняет автоматически. 
  Например:</p>
  <pre class="brush:js;">
  let number1 = "56";
  let number2 = 4;
  let result = number1 + number2;
  console.log(result); // 564
  </pre>
  <p>Здесь переменная number1 представляет строку, а точнее строковое представление числа. А переменная number2 представляет число. 
  И в итоге мы получим не число 60, а строку 564.</p>
  <p>При сложении преобразования в JavaScript производятся по принципу:</p>
  <ul>
  <li><p>Если оба операнда представляют числа, то происходит обычное арифметическое сложение</p></li>
  <li><p>Если предыдущее условие не выполняется, то оба операнда преобразуются в строки и производится объединение строк.</p></li>
  </ul>
  <p>Соответственно в примере выше, поскольку первый операнд - строка, то второй операнд - число также преобразуется в строку, и в итоге 
  получаем строку "564", а не число 60. Фактически мы получаем:</p>
  <pre class="brush:js;">
  let number1 = "56";
  let number2 = 4;
  let result = number1 + String(number2);
  console.log(result); // 564
  </pre>
  <p>Функция <code>String()</code> и позволяет получить строковое представление значение. Так, выражение <code>String(number2)</code> 
  получает строковое представление number2, то есть из числа 4 получает строку "4".</p>
  <p>Но поведение по умолчанию не всегда может быть желательно. Например, в примере выше мы хотим, чтобы значения складывались не как строки, а как 
  числа. В этом случае мы можем использовать функции преобразования.</p>
  <h3>parseInt()</h3>
  <p>Для преобразования строки в целое число применяется функция <span class="b">parseInt()</span>:</p>
  <pre class="brush:js;">
  let number1 = "56";
  let number2 = 4;
  let result = parseInt(number1) + number2;
  console.log(result); // 60
  </pre>
  <p>При этом строка может иметь смешанное содержимое, например, "123hello", то есть в данном случае есть цифры, но есть и обычные символы. 
  Функция <code>parseInt()</code> все равно попытается выполнить преобразование - она последовательно, начиная с первого символа, считывает цифры, пока не встретит первый 
  нецифровой символ:</p>
  <pre class="brush:js;">
  let num1 = "123hello";
  let num2 = parseInt(num1);
  console.log(num2); // 123
  </pre>
  <p>Стоит учитывать, что преобразуемое значение, которое преобразуется в число, всегда сначала преобразуется в строку. Это может приводить к неожиданным, 
  на первый взгляд, результатам:</p>
  <pre class="brush:js;">
  let number1 = parseInt(0.000005);   // 0;
  console.log(number1);
  
  let number2 = parseInt(0.0000005);  // 5
  console.log(number2);
  </pre>
  <p>Выше в функцию parseInt передаются дробные числа, и мы ожидаем в обоих случаях получить число 0. Однако при преобразовании number2 мы получаем число 5. Почему?</p>
  <p>Пример выше будет эквивалентен следующему:</p>
  <pre class="brush:js;">
  let number1 = parseInt(String(0.000005));   // 0;
  console.log(number1);
  
  let number2 = parseInt(String(0.0000005));  // 5
  console.log(number2);
  </pre>
  <p>Для дробных чисел меньше <span class="b">10<sup>-6</sup></span> (0.000001) применяется экспоненциональная запись, то есть число 0.0000005 представляется 
  как <code>5e-7</code>:</p>
  <pre class="brush:js;">console.log(0.0000005);     // 5e-7</pre>
  <p>Далее число 5e-7 преобразуется в строку "5e-7", и эту строку parseInt пытается преобразовать в число. Соответственно на выходе получается число 5.</p>
  <p>То же самое касается очень больших чисел типа 999999999999999999999, которые также представляются к экспоненциальной форме.</p>
  <h3>NaN и isNaN</h3>
  <p>Если функции <code>parseInt()</code> не удастся выполнить преобразование, то он возвращает значение <span class="b">NaN</span> (Not a Number), которое говорит о том, 
  что строка не представляет число и не может быть преобразована.</p>
  <pre class="brush:js;">
  console.log(parseInt("abc"));	// NaN
  let type = typeof NaN;
  console.log(type);				// number
  </pre>
  <p>Что интересно, само значение NaN (не число) представляет тип number.</p>
  <p>С помощью специальной функции <span class="b">isNaN()</span> можно проверить, представляет ли строка число. Если строка не является числом, то функция возвращает 
  true, если это число - то false:</p>
  <pre class="brush:js;">
  let num1 = "javascript";
  let num2 = "22";
  let result = isNaN(num1);
  console.log(result); // true - num1 не является числом
    
  result = isNaN(num2);
  console.log(result); //  false - num2 - это число
  </pre>
  <h3>Преобразование в другой системе исчисления</h3>
  <p>Выше мы рассматривали перевод строк в числа в десятичной системе. Но мы можем с помощью второго параметра явно указать, 
  что хотим преобразовать строку в число в определенной системе. Например, преобразование в число в двоичной системе:</p>
  <pre class="brush:js;">
  let num1 = "110";
  let num2 = parseInt(num1, 2);
  console.log(num2); // 6
  </pre>
  <p>Результатом будет 6, так как 110 в двоичной системе - это число 6 в десятичной.</p>
  <h3>parseFloat</h3>
  <p>Для преобразования строк в дробные числа применяется функция <span class="b">parseFloat()</span>, которая работает аналогичным образом:</p>
  <pre class="brush:js;">
  let number1 = "46.07";
  let number2 = "4.98";
  let result = parseFloat(number1) + parseFloat(number2);
  console.log(result); //51.05
  </pre>`;
}

//=====================================================================================
function less15(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Введение в массивы</h2><div class="date">Последнее обновление: 28.08.2021</div>
  
    <p>Для работы с наборами данных предназначены массивы. Для создания массива применяются квадратные скобки <span class="b">[]</span>. 
  Внутри квадратных скобок определяются элементы массива. (Далее в отдельной главе, посвященной <a href="./5.3.php">массивам</a>, мы рассмотрим дополнительные способы создания массивов и вцелом более подробно работу с массивами)</p>
  <p>Простейшее определение массива:</p>
  <pre class="brush:js;">
  const myArray = [];
  </pre>
  <p>В данном случае мы создаем массив, который называется <code>myArray</code>. Он пустой, поскольку внутри квадратных скобок не определено ни одного элемента. 
  Но можно также добавить в него начальные данные:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Alice", "Sam"];
  console.log(people);	// ["Tom", "Alice", "Sam"];
  </pre>
  <p>В этом случае в массиве myArray будет три элемента. Графически его можно представить так:</p>
  <table>
  <tr class="tabhead"><td>Индекс</td><td>Элемент</td></tr>
  <tr><td>0</td><td>Tom</td></tr>
  <tr><td>1</td><td>Alice</td></tr>
  <tr><td>2</td><td>Sam</td></tr>
  </table>
  <p>Для обращения к отдельным элементам массива используются индексы. Отсчет начинается с нуля, то есть первый элемент будет иметь индекс 0, а последний - 2:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Alice", "Sam"];
  console.log(people[0]); // Tom
  const person3 = people[2]; // Sam
  console.log(person3); // Sam
  </pre>
  <p>Если мы попробуем обратиться к элементу по индексу больше размера массива, то мы получим undefined:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Alice", "Sam"];
  console.log(people[7]); // undefined
  </pre>
  <p>Также по индексу осуществляется установка значений для элементов массива:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Alice", "Sam"];
  console.log(people[0]); // Tom
  people[0] = "Bob";
  console.log(people[0]); // Bob
  </pre>
  <p>Причем в отличие от других языков, как C# или Java, можно установить элемент, который изначально не установлен:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Alice", "Sam"];
  console.log(people[7]); // undefined - в массиве только три элемента
  people[7] = "Bob";
  console.log(people[7]); // Bob
  </pre>
  <p>Также стоит отметить, что в отличие от ряда языков программирования в JavaScript массивы не являются строго типизированными, один массив может хранить данные разных типов:</p>
  <pre class="brush:js;">
  const objects = ["Tom", 12, true, 3.14, false];
  console.log(objects);
  </pre>
  <h3>Многомерные массивы</h3>
  <p>Массивы могут быть одномерными и многомерными. Каждый элемент в многомерном массиве может представлять собой отдельный массив. 
  Выше мы рассматривали одномерный массив, теперь создадим многомерный массив:</p>
  <pre class="brush:js;">
  const numbers1 = [0, 1, 2, 3, 4, 5 ]; // одномерный массив
  const numbers2 = [[0, 1, 2], [3, 4, 5] ]; // двумерный массив
  </pre>
  <p>Визуально оба массива можно представить следующим образом:</p>
  <h5>Одномерный массив numbers1</h5>
  <table border="1" cellpadding="4"><tbody><tr><td><p>0</p></td><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td></tr></tbody></table>
  <h5>Двухмерный массив numbers2</h5>
  <table border="1" cellpadding="4"><tbody><tr><td><p>0</p></td><td><p>1</p></td><td><p>2</p></td></tr>
  <tr><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td></tr></tbody></table>
  <p>Поскольку массив numbers2 двухмерный, он представляет собой простую таблицу. Каждый его элемент может представлять отдельный массив.</p>
  <p>Рассмотрим еще один двумерный массив:</p>
  <pre class="brush:js;">
  const people = [
      ["Tom", 25, false],
      ["Bill", 38, true],
      ["Alice", 21, false]
  ];
  
  console.log(people[0]); // ["Tom", 25, false]
  console.log(people[1]); // ["Bill", 38, true]
  </pre>
  <p>Массив people можно представить в виде следующей таблицы:</p>
  <table border="1" cellpadding="4">
  <tr><td><p>Tom</p></td><td><p>25</p></td><td><p>false</p></td></tr>
  <tr><td><p>Bill</p></td><td><p>38</p></td><td><p>true</p></td></tr>
  <tr><td><p>Alice</p></td><td><p>21</p></td><td><p>false</p></td></tr>
  </table>
  <p>Чтобы получить отдельный элемент массива, также используется индекс:</p>
  <pre class="brush:js;">
  const tomInfo = people[0];
  </pre>
  <p>Только теперь переменная <code>tomInfo</code> будет представлять массив. Чтобы получить элемент внутри вложенного массива, нам надо использовать его вторую размерность:</p>
  <pre class="brush:js;">
  console.log("Имя: " + people[0][0]); // Tom
  console.log("Возраст: " + people[0][1]); // 25
  </pre>
  <p>То есть если визуально двумерный массив мы можем представить в виде таблицы, то элемент <code>people[0][1]</code> будет ссылаться на ячейку таблицы, 
  которая находится на пересечении первой строки и второго столбца (первая размерность - 0 - строка, вторая размерность - 1 - столбец).</p>
  <p>Также мы можем выполнить присвоение:</p>
  <pre class="brush:js;">
  const people = [
      ["Tom", 25, false],
      ["Bill", 38, true],
      ["Alice", 21, false]
  ];
  people[0][1] = 56; // присваиваем отдельное значение
  console.log(people[0][1]); // 56
    
  people[1] = ["Bob", 29, false]; // присваиваем массив
  console.log(people[1][0]); // Bob
  </pre>
  <p>При создании многомерных массивов мы не ограничены только двумерными, но также можем использовать массивы больших размерностей:</p>
  <pre class="brush:js;">
  const numbers = [];
  numbers[0] = []; // теперь numbers - двумерный массив
  numbers[0][0]=[]; // теперь numbers - трехмерный массив
  numbers[0][0][0] = 5; // первый элемент трехмерного массива равен 5
  console.log(numbers[0][0][0]);
  </pre>`;
}

//=====================================================================================
function less16(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Условные конструкции</h2><div class="date">Последнее обновление: 10.09.2021</div>
  
    <p>Условные конструкции позволяют выполнить те или иные действия в зависимости от определенных условий.</p>
  <h3>Конструкция if..else</h3>
  <p>Конструкция <span class="b">if..else</span> проверяет некоторое условие и если это условие верно, то выполняет некоторые действия. 
  Простейшая форма конструкции <span class="b">if..else</span>:</p>
  <pre class="brush:js;">
  if(условие){
    
    некоторые действия
  }
  </pre>
  <p>После ключевого слова <span class="b">if</span> в круглых скобках идет условие, а после условия - блок кода с некоторыми действиями. 
  Если это условие истинно, то затем выполняются действия, которые помещены в блоке кода</p>
  <p>Например:</p>
  <pre class="brush:js;">
  const income = 100;
  if(income &gt; 50) {
    
    console.log("доход больше 50");
  }
  </pre>
  <p>Здесь в конструкции if используется следующее условие: <code>income &gt; 50</code>. Если это условие возвращает <code>true</code>, то есть если константа <code>income</code> имеет значение больше 50, 
  то браузер отображает сообщение. Если же значение <code>income</code> меньше 50, то никакого сообщения не отображается.</p>
  <p>Если блок кода содержит одну инструкцию, как в случае выше, то конструкцию можно упростить, убрав фигурные скобки и поместив действия сразу после условия:</p>
  <pre class="brush:js;">
  const income = 100;
  if(income &gt; 50) console.log("доход больше 50");
  </pre>
  <p>или перенести действия на следующую строку</p>
  <pre class="brush:js;">
  const income = 100;
  if(income &gt; 50) 
    console.log("доход больше 50");
  </pre>
  <p>Причем условия могут быть сложными:</p>
  <pre class="brush:js;">
  const income = 100;
  const age = 19;
  if(income &gt; 50 &amp;&amp; age &gt; 18){
  
    console.log("доход больше 50");
    console.log("возраст больше 18");
  }
  </pre>
  <h4>Проверка наличия значения</h4>
  <p>Конструкция if позволяет проверить наличие значения. Например:</p>
  <pre class="brush:js;">
  let myVar = 89;
  if(myVar){
    
    console.log(\`Переменная myVar имеет значение: \${myVar}\`);
  }
  </pre>
  <p>Если переменная myVar имеет значение, как в данном случае, то в условной конструкции она возвратит значение true.</p>
  <p>Противоположный вариант:</p>
  <pre class="brush:js;">
  let myVar;
  if(myVar){
      console.log(\`Переменная myVar имеет значение: \${myVar}\`);
  }
  </pre>
  <p>Здесь переменная <code>myVar</code> не имеет значения. (В реальности она равна <code>undefined</code>) Поэтому условие в конструкии <span class="b">if</span> возвратит 
  <span class="b">false</span>, и действия в блоке конструкции if не будут выполняться.</p>
  <p>Но нередко для проверки значения переменной используют альтернативный вариант - проверяют на значение <code>undefined</code> и <code>null</code>:</p>
  <pre class="brush:js;">
  if (myVar !== undefined && myVar !== null) {
    console.log(\`Переменная myVar имеет значение: \${myVar}\`);
  }
  </pre>
  <h4>Выражение else</h4>
  <p>Выше мы рассмотрели, как определить действия, которые выполняются, если условие после <span class="b">if</span> истинно. Но что, если мы хотим также выполнять 
  еще один набор инструкций, если условие ложно? В этом случае можно использовать блок <span class="b">else</span>.
  Данный блок содержит инструкции, которые выполняются, если условие после <span class="b">if</span> ложно, то есть равно <span class="b">false</span>:</p>
  <pre class="brush:js;">
  if(условие){
    действия, если условие истинно
  }
  else{
    действия, если условие ложно
  }
  </pre>
  <p>То есть если условие после if истинно, выполняется блок if. Если условие ложно, выполняется блок else. Например:</p>
  <pre class="brush:js;">
  const income = 45;
  if(income &gt; 50){
  
    console.log("Доход больше 50");
  }
  else{
    console.log("Доход меньше или равен 50");
  }
  </pre>
  <p>Здесь константа <code>income</code> равна 45, поэтому условие после оператора <code>if</code> возвратит <span class="b">false</span>, 
  и управление перейдет к блоку <code>else</code>.</p>
  <p>Также если блок else содержит одну инструкцию, то можно сократить конструкцию:</p>
  <pre class="brush:js;">
  const income = 45;
  if(income &gt; 50) console.log("Доход больше 50");
  else console.log("Доход меньше или равен 50");
  </pre>
  <h4>Альтернативные условия и else if</h4>
  <p>С помощью конструкции <span class="b">else if</span> мы можем добавить альтернативное условие к блоку if. Например, выше в условие значение income может быть больше определенном значению может быть меньше, а может быть равно ему. Отразим это в коде:</p>
  <pre class="brush:js;">
  const income = 50;
  if(income &gt; 50) {
    console.log("Доход больше 50");
  }
  else if(income === 50){
    console.log("Доход равен 50");
  }
  else{
    console.log("Доход меньше 50");
  }
  </pre>
  <p>В данном случае выполнится блок else if. При необходимости мы можем использовать несколько блоков else if с разными условиями:</p>
  <pre class="brush:js;">
  const income = 500;
  if(income &lt; 200){
  
    console.log("Доход ниже среднего");
  }
  else if(income&gt;=200 && income&lt;300){
    
    console.log("Чуть ниже среднего");
  }
  else if(income&gt;=300 && income&lt;400){
    
    console.log("Средний доход");
  }
  else{
    console.log("Доход выше среднего");
  }
  </pre>
  <h3>True или false</h3>
  <p>В javascript любая переменная может применяться в условных выражениях, но не любая переменная представляет тип boolean. И в этой связи 
  возникает вопрос, что возвратит та или иная переменная - true или false? Много зависит от типа данных, который представляет переменная:</p>
  <ul>
  <li>
    <p><span class="b">undefined</span></p>
    <p>Возвращает <code>false</code></p>
  </li>
  <li>
    <p><span class="b">null</span></p>
    <p>Возвращает <code>false</code></p>
  </li>
  <li>
    <p><span class="b">Boolean</span></p>
    <p>Если константа/переменная равна <code>false</code>, то возвращается <code>false</code>. 
    Соответствено если константа/переменная равна <code>true</code>, то возвращается <code>true</code></p>
  </li>
  <li>
    <p><span class="b">Number</span></p>
    <p>Возвращает <code>false</code>, если число равно 0 или NaN (Not a Number), в остальных случаях возвращается <code>true</code></p>
    <p>Например, следующая переменная будет возращать false:</p>
    <pre class="brush:js;">
      let x = NaN;
      if(x){	// false
      
      }
    </pre>
  </li>
  <li>
    <p><span class="b">String</span></p>
    <p>Возвращает <code>false</code>, если константа/переменная равна пустой строке, то есть ее длина равна 0, в остальных случаях возвращается <code>true</code></p>
    <pre class="brush:js;">
      const emptyText = "";	// false - так как пустая строка
      const someText = "javascript";	// true - строка не пустая
    </pre>
  </li>
  <li>
    <p><span class="b">Object</span></p>
    <p>Всегда возвращает <code>true</code></p>
    <pre class="brush:js;">
      const user = {name:"Tom"};	// true
      const car = {};	// true
    </pre>
  </li>
  </ul>
  <h3>Конструкция switch..case</h3>
  <p>Конструкция <span class="b">switch..case</span> является альтернативой использованию конструкции <code>if..else</code> и также позволяет обработать сразу 
  несколько условий:</p>
  <pre class="brush:js;">
  const income = 300;
  switch(income){
  
    case 100 : 
      console.log("Доход равен 100");
      break;
    case 200 : 
      console.log("Доход равен 200");
      break;
    case 300 : 
      console.log("Доход равен 300");
      break;
  }
  </pre>
  <p>После ключевого слова switch в скобках идет сравниваемое выражение. Значение этого выражения последовательно сравнивается со значениями, помещенными после оператора сase. И если совпадение будет найдено, то будет выполняться определенный блок сase.</p>
  <p>В конце каждого блока сase ставится оператор break, чтобы избежать выполнения других блоков.</p>
  
  <p>Однако при необходимости можно сразу обработать несколько условий:</p>
  <pre class="brush:js;">
  const income = 200;
  switch(income){
  
    case 100 :
    case 200 :
      console.log("Доход равен 100 или 200");
      break;
    case 300 : 
      console.log("Доход равен 300");
      break;
  }
  </pre>
  <p>В данном случае для условия, когда income равно 100 и 200, выполняются одни и те же действия.</p>
  
  <p>Если мы хотим также обработать ситуацию, когда совпадения не будет найдено, то можно добавить необязательный блок <span class="b">default</span>:</p>
  <pre class="brush:js;">
  const income = 300;
  switch(income){
  
    case 100 : 
      console.log("Доход равен 100");
      break;
    case 200 : 
      console.log("Доход равен 200");
      break;
    case 300 : 
      console.log("Доход равен 300");
      break;
    default: 
          console.log("Доход неизвестной величины");
          break;
  }
  </pre>`;
}

//=====================================================================================
function less17(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Циклы</h2><div class="date">Последнее обновление: 31.08.2021</div>
  
    <p>Циклы позволяют в зависимости от определенных условий выполнять некоторое действие множество раз. В JavaScript имеются следующие виды циклов:</p>
  <ul>
  <li><p><span class="b">for</span></p></li>
  <li><p><span class="b">for..in</span></p></li>
  <li><p><span class="b">for..of</span></p></li>
  <li><p><span class="b">while</span></p></li>
  <li><p><span class="b">do..while</span></p></li>
  </ul>
  <h3>Цикл for</h3>
  <p>Цикл for имеет следующее формальное определение:</p>
  <pre class="brush:js;">
  for ([инициализация счетчика]; [условие]; [изменение счетчика]){
  
      // действия
  }
  </pre>
  <p>Например, используем цикл <span class="b">for</span> для перебора чисел от 0 до 4:</p>
  <pre class="brush:js;">
  for(let i = 0; i&lt;5; i++){
    
    console.log(i);
  }
  console.log("Конец работы");
  </pre>
  <p>Первая часть объявления цикла - <code>let i = 0</code> - создает и инициализирует счетчик - переменную i. И перед выполнением цикла ее 
  значение будет равно 0. По сути это то же самое, что и объявление переменной.</p>
  <p>Вторая часть - условие, при котором будет выполняться цикл: <code>i&lt;5</code>. В данном случае цикл будет выполняться, пока значение i не достигнет 5.</p>
  <p>Третья часть - <code>i++</code> - приращение счетчика на единицу.</p>
  <p>То есть при запуске переменная <code>i</code> равна 0. Это значение отвечает условию <code>i&lt;5</code>, поэтому будет выполняться блок цикла, а именно строка кода</p>
  <pre class="brush:js;">console.log(i);</pre>
  <p>После выполнения блока цикла выполняется треться часть объявления цикла - приращение счетчика. То есть переменная i сановится равной 1. Это значение 
  также отвечает условию, поэтому блок цикла снова выполняется. Таким образом, блок цикла сработает 5 раз, пока значение i не станет равным 5. Это значение НЕ отвечает условию, поэтому произойдет выход из цикла. 
  И управление программой перейдет к инструкциям, которые идут после блока цикла. Консольный вывод программы:</p>
  <pre class="browser">
  0
  1
  2
  3
  4
  Конец работы
  </pre>
  <p>Каждое отдельное повторение цикла называется итерацией. Таким образом, в данном случае сработают 5 итераций.</p>
  
  <p>При этом необязательно увеличивать счетчик на единицу, можно производить с ним другие действия, например, уменьшать на единицу:</p>
  <pre class="brush:js;">
  for(let i = 10; i &gt; 5; i--){
       
      console.log(i);
  }
  </pre>
  <p>В данном случае на консоль выводится числа от 10 до 6.</p>
  <p>Или увеличим счетчик на 2:</p>
  <pre class="brush:js;">
  for(let i = 0; i &lt; 10; i+=2){
       
      console.log(i);
  }
  </pre>
  <p>Здесь выводятся на консоль все четные числа от 0 до 8</p>
  <p>При этом можно опускать различные части объявления цикла:</p>
  <pre class="brush:js;">
  let i = 0;
  for(; i &lt; 60;){
       
      console.log(i);
    i = i + 10;
  }
  </pre>
  <p>В данном случае переменная i определена вне цикла. В самом объявлении цикла есть только условие, остальные две части отсутствуют. Изменение переменной 
  происходит в самом блоке цикла: оно увеличивается на 10. В итоге на консоль будут выведены числа 0, 10, 20, 30, 40, 50.</p>
  <h4>Применение нескольких счетчиков в цикле</h4>
  <p>При необходимости можно использовать несколько счетчиков:</p>
  <pre class="brush:js;">
  for(let i = 1, j=1; i &lt; 5, j &lt; 4; i++, j++){
       
      console.log(i + j);
  }
  // 1 итерация: i=1, j=1; i + j = 2
  // 2 итерация: i=2, j=2; i + j = 4
  // 3 итерация: i=3, j=3; i + j = 6
  </pre>
  <p>Здесь теперь используются два счетчика и два условия. Рассмотрим пошагово, что здесь происходит:</p>
  <ol>
  <li><p>Первая итерация. Начальные значения переменных i и y:</p>
  <pre class="brush:js;">i=1, j=1;</pre>
  <p>Для каждой переменной установлены свои условия. И вначале начальные значения переменных соответствуют этим условиям:</p>
  <pre class="brush:js;">i &lt; 5, j &lt; 4;</pre>
  <p>В блоке цикла выводится сумма этих переменных. И дальше значения обоих переменных увеличиваются на единицу. Они становятся равны</p>
  <pre class="brush:js;">i=2, j=2;</pre>
  <p>Эти значения также соответствуют условиям, поэтому выполняется вторая итерация</p>
  </li>
  <li><p>Вторая итерация. Значения переменных i и y:</p>
  <pre class="brush:js;">i=2, j=2;</pre>
  <p>После выполнения блока цикла значения обоих переменных увеличиваются на единицу. Они становятся равны</p>
  <pre class="brush:js;">i=3, j=3;</pre>
  <p>Эти значения также соответствуют условиям, поэтому выполняется третья итерация</p>
  </li>
  <li><p>Третья итерация. Значения переменных i и y:</p>
  <pre class="brush:js;">i=3, j=3;</pre>
  <p>После выполнения блока цикла значения обоих переменных увеличиваются на единицу. Они становятся равны</p>
  <pre class="brush:js;">i=4, j=4;</pre>
  <p>Значение переменной <code>i</code> соответствует условию <code>i &lt; 5</code>, однако значение переменной j (4) НЕ соответствует условию 
  <code>j &lt; 4</code>. Поэтому происходит выход из цикла. Его работа завершена.</p>
  </li>
  </ol>
  <h4>Вложенные циклы</h4>
  <p>Одни циклы могут внутри себя содержать другие:</p>
  <pre class="brush:js;">
  for(let i=1; i &lt;= 5; i++){
       
     for(let j = 1; j &lt;=5; j++){
      console.log(i * j);
     }
  }
  </pre>
  <p>Здесь один цикл включается в себя другой. ВО внешнем цикле определяется переменная i. Вначале она равна 1 и это значение соответствует условию цикла 
  (<code>i &lt;=5</code>), поэтому будет выполняться блок цикла, который содержит внутренний цикл.</p>
  <p>Во внутреннем цикле определяется переменная-счетчик j, которая изначально равна 1, и потом внутренний цикл выполняет 5 итераций, пока переменная j не станет равна 5.</p>
  <p>После того, как блок внешнего цикла завершен, переменная i увеличивается на 1 и становится равной 2, что опять же соответствует условию. И снова выполняется 
  блок внешнего цикла. В этом блоке снова выполняются пять итераций внутреннего цикла. И так далее. В итоге внутренний цикл будет выполняться 25 раз.</p>
  <h3>Цикл while</h3>
  <p>Цикл while выполняется до тех пор, пока некоторое условие истинно. Его формальное определение:</p>
  <pre class="brush:js;">
  while(условие){
    
    // действия
  }
  </pre>
  <p>Опять же выведем с помощью <span class="b">while</span> числа от 1 до 5:</p>
  <pre class="brush:js;">
  let i = 1;
  while(i &lt;=5){
    
    console.log(i);
    i++;
  }
  </pre>
  <p>Цикл while здесь будет выполняться, пока значение i не станет равным 6.</p>
  <h3>do..while</h3>
  <p>В цикле do сначала выполняется код цикла, а потом происходит проверка условия в инструкции while. И пока это условие истинно, цикл 
  повторяется. Например:</p>
  <pre class="brush:js;">
  let i = 1;
  do{
    console.log(i);
    i++;
  }while(i &lt;= 5)
  </pre>
  <p>Здесь код цикла сработает 5 раз, пока i не станет равным 5. При этом цикл <span class="b">do</span> гарантирует хотя бы однократное выполнение действий, даже если условие в инструкции <span class="b">while</span> не будет истинно.</p>
  <h3>Операторы continue и break</h3>
  <p>Иногда бывает необходимо выйти из цикла до его завершения. В этом случае мы можем воспользоваться оператором <span class="b">break</span>:</p>
  <pre class="brush:js;">
  for(let i=1; i &lt;= 10; i++){
       
     if(i===6) break;
     console.log(i);
  }
  console.log("Конец работы");
  </pre>
  <p>Данный цикл увеличивает переменную i c 1 до 10 включая, то есть согласно условию цикла блок цикла должен выполняться 10 раз, то есть поизвести 10 итераций. 
  Однако поскольку в блоке цикла происходит поверка <code>if(i===6) break;</code>, то, когда значение переменной i достигнет 6, то данное условие 
  прервет выполнение цикла с помощью оператора break. И цикл заершит работу.</p>
  <pre class="browser">
  1
  2
  3
  4
  5
  Конец работы
  </pre>
  <p>Если нам надо просто пропустить итерацию, но не выходить из цикла, мы можем применять оператор <span class="b">continue</span>:</p>
  <pre class="brush:js;">
  for(let i=1; i &lt;= 10; i++){
       
     if(i===6) continue;
     console.log(i);
  }
  console.log("Конец работы");
  </pre>
  <p>В этом случае, когда значение переменной i станет равным 6, то в цикле конструкция <code>if(i===6) continue</code> завершит текущую итерацию, далее идущие инструкции цикла не будут 
  выполняться, и произойдет переход к следующей итерации:</p>
  <pre class="browser">
  1
  2
  3
  4
  5
  7
  8
  9
  10
  Конец работы
  </pre>
  <h3>for..in</h3>
  <p>Цикл <span class="b">for..in</span> предназначен главным образом для перебора объектов. Его формальное определение:</p>
  <pre class="brush:js;">
  for (свойство in объект) {
    // действия
  }
  </pre>
  <p>Этот цикл перебирает все свойства объекта. Например:</p>
  <pre class="brush:js;">
  const person = {name: "Tom", age: 37};
  for(prop in person){
       
     console.log(prop);
  }
  </pre>
  <p>Здесь перебирается объек person, который имеет два свойства - name и age. Соответственно на консоли мы увидим:</p>
  <pre class="browser">
  name
  age
  </pre>
  <h3>Цикл for...of</h3>
  <p>Цикл <span class="b">for...of</span> предназначен для перебора наборов данных. Например, строка представляет фактически набор символов. И мы можем перебрать ее с помощью данного цикла:</p>
  <pre class="brush:js;">
  const website = "METANIT.COM";
  for(ch of website){
       
     console.log(ch);
  }
  </pre>
  <p>В итоге цикл перебирает все символы строки website и помещает каждый текущий символ в переменную <code>ch</code>, значение которой затем 
  выводится на консоль.</p>
  <pre class="browser">
  M
  E
  T
  A
  N
  I
  T
  .
  C
  O
  M
  </pre>
  <p>Другим примером может быть перебор массива:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob"];
  for(const person of people) {
      console.log(person);
  }
  </pre>
  <p>В данном случае цикл перебирает элементы массива people. Каждый элемент последовательно помещается в константу <code>person</code>. И далее мы можем вывести ее значение на консоль:</p>
  <pre class="browser">
  Tom
  Sam
  Bob
  </pre>`;
}

//=====================================================================================
function less20(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Функциональное программирование</h1><h2>Функции</h2><div class="date">Последнее обновление: 16.07.2021</div>
  
    <p>Функции представляют собой набор инструкций, которые выполняют определенное действие или вычисляют определенное значение.</p>
  <p>Синтаксис определения функции:</p>
  <pre class="brush:js;">
  function имя_функции([параметр [, ...]]){
  
      // Инструкции
  }
  </pre>
  <p>Определение функции начинается с ключевого слова <span class="b">function</span>, после которого следует имя функции. 
  Наименование функции подчиняется тем же правилам, что и наименование переменной: оно может содержать только цифры, буквы, символы подчеркивания и доллара ($) и 
  должно начинаться с буквы, символа подчеркивания или доллара.</p>
  <p>После имени функции в скобках идет перечисление параметров. Даже если параметров у функции нет, то просто идут пустые скобки. Затем в фигурных скобках идет тело функции, содержащее набор инструкций.</p>
  <p>Определим простейшую функцию:</p>
  <pre class="brush:js;">
  function hello(){
  
      console.log("Hello Metanit.com");
  }
  </pre>
  <p>Данная функция называется <code>hello()</code>. Она не принимает никаких параметров и все, что она делает, это выводит на консоль браузера строку "Hello Metanit.com".</p>
  <p>Чтобы функция выполнила свою работу, нам надо ее вызвать. Общий синтаксис вызова функции:</p>
  <pre class="brush:js;">имя_функции(параметры)</pre>
  <p>При вызове после имени вызываемой функции в скобках указывается список параметров. Если функция не имеет параметров, то указывются пустые скобки.</p>
  <p>Например, определим и вызовем простейшую функцию:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;script&gt;
  // определение функции
  function hello(){
      console.log("Hello Metanit.com");
  }
  // вызов функции
  hello();
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В данном случае функция <code>hello</code> не принимает параметров, поэтому при ее вызове указываются пустые скобки:</p>
  <pre class="brush:js;">hello();</pre>
  <img src="./pics/3.2.png" alt="Функции в JavaScript" />
  <p>Отличительной чертой функций является то, что их можно многократно вызывать в различных местах программы:</p>
  <pre class="brush:js;">
  // определение функции
  function hello(){
      console.log("Hello Metanit.com");
  }
  // вызов функции
  hello();
  hello();
  hello();
  </pre>
  <h3>Переменные и константы в качестве функций</h3>
  <p>Подобно тому, как константам и переменным присваиваются простейшие значения (числа, строки и т.д.), также им можно присваивать функции. Затем через такую переменную или константу 
  можно вызвать присвоенную ей функцию:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;script&gt;
  // определение функции
  function hello(){
      console.log("Hello from Metanit.com");
  }
  // передача константе message ссылки на функцию hello
  const message = hello;
  message();	// вызываем функцию, ссылка на которую хранится в константе message
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Присвоив константе или переменной функцию:</p>
  <pre class="brush:js;">const message = hello;</pre>
  <p>затем мы можем по имени константы/переменной вызывать эту функцию:</p>
  <pre class="brush:js;">message();</pre>
  <p>Также мы можем динамически менять функции, которые хранятся в переменной:</p>
  <pre class="brush:js;">
  function goodMorning(){
      console.log("Доброе утро");
  }
  function goodEvening(){
      console.log("Добрый вечер");
  }
  let message = goodMorning;		// присваиваем переменной message функцию goodMorning
  message(); 		// Доброе утро
  message = goodEvening;			// меняем функцию в переменной message
  message(); 		// Добрый вечер
  </pre>
  <h3>Анонимные функции</h3>
  <p>Необязательно давать функциям определенное имя. Можно использовать анонимные функции:</p>
  <pre class="brush:js;">
  let message = function(){
    console.log("Hello JavaScript");
  }
  message();
  </pre>`;
}

//=====================================================================================
function less21(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Параметры функции</h2><div class="date">Последнее обновление: 28.08.2021</div>
  
    <p>Функция в JavaScript может принимать параметры. Параметры представляют способ передачи в функцию данных. Параметры указываются в скобках после названия функции.</p>
  <p>Например, определим простейшую функцию, которая принимает один параметр:</p>
  <pre class="brush:js;">
  function print(message){
    console.log(message);
  }
  
  print("Hello JavaScript");
  print("Hello METANIT.COM");
  print("Function in JavaScript");
  </pre>
  <p>Функция <code>print()</code> принимает один параметр - message. Поэтому при вызове функции мы можем передать для него значение, например, некоторую строку:</p>
  <pre class="brush:js;">print("Hello JavaScript");</pre>
  <p>Передаваемые параметрам значения еще называют аргументами.</p>
  <p>При этом в отличие от ряда других языков программирования мы в принципе можем не передавать значения параметрам. Например:</p>
  <pre class="brush:js;">
  function print(message){
    console.log(message);
  }
  print();
  </pre>
  <p>Если параметру не передается значение, тогда он будет иметь значение <code>undefined</code>.</p>
  <p>Если функция принимает несколько параметров, то они перечисляются через запятую:</p>
  <pre class="brush:js;">
  function sum(a, b){
    const result = a + b;
    console.log(result);
  }
  
  sum(2, 6);			// 8
  sum(4, 5);			// 9
  sum(109, 11);		// 120
  </pre>
  <p>При вызове функции с несколькими параметрами значения передаются параметрам по позиции. То есть первое значение передается первому параметру, второе значение - второму и так далее. Например, в вызове:</p>
  <pre class="brush:js;">sum(2, 6);</pre>
  <p>Число 2 передается параметру <code>a</code>, а число 6 - параметру <code>b</code>.</p>
  
  <h3>Необязательные параметры и значения по умолчанию</h3>
  <p>Функция может принимать множество параметров, но при этом часть или все параметры могут быть необязательными. Если для параметров не передается значение, то по умолчанию 
  они имеют значение "undefined". Однако иногда бывает необходимо, чтобы параметры обязательно имели какие-то значения, например, значения по умолчанию. 
  До стандарта ES6 необходимо было проверять значения параметров на undefined:</p>
  <pre class="brush:js;">
  function sum(x, y){
  
    if(y === undefined) y = 5;
    if(x === undefined) x = 8;
      const z = x + y;
      console.log(z);
  }
  sum();			// 13
  sum(6); 		// 11
  sum(6, 4) 		// 10
  </pre>
  <p>Здесь функция <code>sum()</code> принимает два параметра. При вызове функции мы можем проверить их значения. 
  При этом, вызывая функцию, необязательно передавать для этих параметров значения. Для проверки наличия значения параметров используется сравнение со значением <code>undefined</code>.</p>
  <p>Также мы можем напрямую определять для параметров значения по умолчанию:</p>
  <pre class="brush:js;">
  function sum(x = 8, y = 5){
  
      const z = x + y;
      console.log(z);
  }
  sum();		// 13
  sum(6); 	// 11
  sum(6, 4) 	// 10
  </pre>
  <p>Если параметрам x и y не передаются значения, то они получаются в качестве значений числа 5 и 10 соответствено. Такой способ более лаконичен и интуитивен, чем 
  сравнение с undefined.</p>
  <p>При этом значение параметра по умолчанию может быть производным, представлять выражение:</p>
  <pre class="brush:js;">
  function sum(x = 8, y = 10 + x){
  
      const z = x + y;
      console.log(z);
  }
  sum();		// 26
  sum(6); 	// 22
  sum(6, 4) 	// 10
  </pre>
  <p>В данном случае значение параметра y зависит от значения x.</p>
  <h3>Массив arguments</h3>
  <p>При необходимости мы можем получить все переданные параметры через глобально доступный массив <span class="b">arguments</span>:</p>
  <pre class="brush:js;">
  function sum(){
      let result = 0;
    for(const n of arguments)
          result += n;
      console.log(result);
  }
  sum(6); 			// 6
  sum(6, 4) 			// 10
  sum(6, 4, 5) 		// 15
  </pre>
  <p>При этом даже не важно, что при определении функции мы не указали никаких параметров, мы все равно можем их передать и получить их значения через массив <span class="b">arguments</span>.</p>
  <h3>Неопределенное количество параметров</h3>
  <p>С помощью оператора <span class="b">...</span> (многоточие) мы можем указать, что с помощью параметра можно передать переменное количество значений:</p>
  <pre class="brush:js;">
  function display(season, ...temps){
    console.log(season);
    for(index in temps){
      console.log(temps[index]);
    }
  }
  display("Весна", -2, -3, 4, 2, 5);
  display("Лето", 20, 23, 31);
  </pre>
  <p>В данном случае второй параметр <code>...temps</code> указывает, что вместо него можно передать разное количество значений. В самой функции temps 
  фактически представляет массив переданных значений, которые мы можем получить. При этом несмотря на это, при вызове функции в нее передается не массив, а именно отдельные значения.</p>
  <p>Консольный вывод:</p>
  <pre class="browser">
  Весна
  -2
  -3
  4
  2
  5
  Лето
  20
  23
  31
  </pre>
  <h3>Функции в качестве параметров</h3>
  <p>Функции могут выступать в качестве параметров других функций:</p>
  <pre class="brush:js;">
  function sum(x, y){
    return x + y;
  }
  
  function subtract(x, y){
    return x - y;
  }
  
  function operation(x, y, func){
   
    const result = func(x, y);
    console.log(result);
  }
  
  console.log("Sum");
  operation(10, 6, sum);	// 16
  
  console.log("Subtract");
  operation(10, 6, subtract);	// 4
  </pre>
  <p>Функция <code>operation</code> принимает три параметра: x, y и func. func - представляет функцию, причем на момент определения operation 
  не важно, что это будет за функция. Единственное, что известно, что функция func может принимать два параметра и возвращать значение, которое затем 
  отображается в консоли браузера. Поэтому мы можем определить различные функции (например, функции sum и subtract в данном случае) и передавать их 
  в вызов функции operation.</p>`;
}

//=====================================================================================
function less22(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Результат функции</h2><div class="date">Последнее обновление: 16.07.2021</div>
  
    <p>Функция может возвращать результат. Для этого используется оператор <span class="b">return</span>, после которого указывается возвращаемое значение:</p>
  <pre class="brush:js;">
  function sum (a, b) {
    const result = a + b;
    return result;
  }
  </pre>
  <p>В данном случае функция <code>sum()</code> принимает два параметра и возвращает их сумму. После оператора <span class="b">return</span> 
  идет возвращаемое значение. В данном случае это значение константы <code>result</code>.</p>
  <p>После получения результата функции мы можем присвоить его какой-либо другой переменной или константе:</p>
  <pre class="brush:js;">
  function sum (a, b) {
    return a + b;
  }
  let num1 = sum(2, 4);
  console.log(num1);	// 6
  
  const num2 = sum(6, 34);
  console.log(num2);	// 40
  </pre>
  <h3>Возвращение функции из функции</h3>
  <p>Одна функция может возвращать другую функцию:</p>
  <pre class="brush:js;">
  function menu(n){
   
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;}
  }
  
  const action = menu(1);			// выбираем первый пункт - сложение
  const result = action(2, 5);	// выполняем функцию и получаем результат в константу result
  console.log(result);			// 7
  </pre>
  <p>В данном случае функция <code>menu()</code> в зависимости от переданного в нее значения возвращает одну из трех функций или пустую функцию, которая просто возвращает число 0.</p>
  <p>Далее мы вызываем функцию menu и получаем результат этой функции - другую функцию в константу action.</p>
  <pre class="brush:js;">const action = menu(1);</pre>
  <p>То есть здесь <code>action</code> будет представлять функцию, которая принимает два параметра и возвращает число. Затем черещ имя константы мы 
  можем вызвать эту функцию и получить ее результат в константу result:</p>
  <pre class="brush:js;">const result = action(2, 5);</pre>
  <p>Подобным образом мы можем получить и другую возвращаемые функции:</p>
  <pre class="brush:js;">
  function menu(n){
   
    if(n==1) return function(x, y){ return x + y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return function(){ return 0;};
  }
  
  let action = menu(1);
  console.log(action(2, 5));			// 7
  
  action = menu(2);
  console.log(action(2, 5));			// -3
  
  action = menu(3);
  console.log(action(2, 5));			// 10
  
  action = menu(190);
  console.log(action(2, 5));			// 0
  </pre>`;
}

//=====================================================================================
function less23(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Область видимости переменных</h2><div class="date">Последнее обновление: 23.02.2022</div>
  
    <p>Все переменные и константы в JavaScript имеют определенную область видимости, в пределах которой они могут действовать.</p>
  <h3>Глобальные переменные</h3>
  <p>Все переменные и константы, которые объявлены вне функций, являются глобальными:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;script&gt;
  var a = 5;
  let b = 8;
  const c = 9;
  function displaySum(){
   
      var d = a + b + c;
      console.log(d);
  }
  displaySum(); // 22
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Здесь переменные a и b и константа c являются глобальными. Они доступны из любого места программы.</p>
  <p>А вот переменная d глобальной не является, так как она определена внутри функции и видна только в этой функции.</p>
  <h3>Определение локальной области видимости</h3>
  <p>Для определения локальной области видимости в JavaScript используются фигурные скобки <span class="b">{ }</span>, которые создают блок кода. 
  Этот блок кода может быть безымянным, может быть именнованным, например, функция, либо может представлять условную или циклическую конструкцию. 
  Например, определение переменных в безымянном блоке кода:</p>
  <pre class="brush:js;">
  {
    var a = 5;
    let b = 8;
    const c = 9;
  }
  </pre>
  <p>Однако в этом случае поведение переменной зависит от способа ее определения (через <code>var</code> или через <code>let</code>) и от типа блока. 
  <span class="b">var</span> определяет локальные переменные <span class="b">уровня функции</span>, а <span class="b">let</span> определяет локальные переменные 
  <span class="b">уровня блока кода</span> (подобным образом <span class="b">const</span> определяет константы <span class="b">уровня блока кода</span>). Рассмотрим, в чем состоит отличие.</p>
  <h3>Переменные и константы функции</h3>
  <p>Переменные и константы, определенные внутри функции, видны (то есть могут использоваться) только внутри этой функции:</p>
  <pre class="brush:js;">
  function print(){
  
    var a = 5;
    let b = 8;
    const c = 9;
    console.log("Function print: a =", a);
    console.log("Function print: b =", b);
    console.log("Function print: c =", c);
  }
  print();
  console.log("Global: a =", a);	// Uncaught ReferenceError: a is not defined
  </pre>
  <p>Переменные a и b и константа c являются локальными, они существуют только в пределах функции. Вне функции их нельзя использовать, поэтому мы получим следующий консольный вывод:</p>
  <div class="console">
  <pre class="consoletext">
  Function print: a= 5
  Function print: b= 8
  Function print: c= 9
  <span style="color:red;">Uncaught ReferenceError: a is not defined</span>
  </pre>
  </div>
  <p>Здесь мы видим, что при попытке обратиться к переменной <code>a</code> вне функции <code>print()</code>, браузер выводит ошибку. При этом подобное поведение 
  не зависит от того, что это за переменная - var или let, либо это константа. Подобное поведение для всех переменных и констант одинаково.</p>
  <h3>Локальные переменные в блоках кода, условиях и циклах</h3>
  <p>С переменными, которые определяются в безымянных блоках кода, а также в циклах и условных конструкциях ситуация чуть сложнее.</p>
  <h4>Переменная var</h4>
  <p>Переменная, объявленная с помощью <span class="b">var</span>, может использоваться вне блока:</p>
  <pre class="brush:js;">
  // безымянный блок
  {
    var a = 5;
  }
  console.log("a =", a);	// a = 5
  
  // условная конструкция
  if(true){
    var b = 6;
  }
  console.log("b =", b);	// b = 6
  
  // цикл
  for(var i = 0; i &lt; 5; i++){
    var c = 7;
  }
  console.log("c =", c);	// c = 7
  </pre>
  <p>Единственное условие, что блок кода должен срабатывать, чтобы инициализировать переменную. Так, в примере выше условие в конструкции if и в цикле for установлено так, что блок 
  этих конструкций будет выполняться. Однако, что если условие будет иным, и блок не будет выполняться?</p>
  <pre class="brush:js;">
  if(false){
    var b = 6;
  }
  console.log("b =", b);	// b = undefined
  
  // цикл
  for(var i = 1; i &lt; 0; i++){
    var c = 7;
  }
  console.log("c =", c);	// c = undefined
  </pre>
  <p>В таком случае мы опять же сможем обращаться к переменным, только они будут иметь значение <span class="b">undefined</span>.</p>
  <h4>Переменная let и константы</h4>
  <p>Теперь посмотрим, как будут вести себя в подобной ситуации переменные, определенные с помощью <span class="b">let</span>:</p>
  <pre class="brush:js;">
  {
    let a = 5;
  }
  console.log("a =", a);	// Uncaught ReferenceError: a is not defined
  </pre>
  <p>В данном случае мы получим ошибку. Мы можем использовать переменные <span class="b">let</span>, определенные внутри блока кода, можно 
  использовать только внутри этого блока кода.</p>
  <p>Тоже самое относится и к константам:</p>
  <pre class="brush:js;">
  {
    const b = 5;
  }
  console.log("b =", b);	// Uncaught ReferenceError: b is not defined
  </pre>
  
  <h3>Скрытие переменных</h3>
  <p>Что если у нас есть две переменных - одна глобальная, а другая локальная, которые имеют одинаковое имя:</p>
  <pre class="brush:js;">
  var z = 89;
  function print(){
  
    var z = 10;
    console.log(z); // 10
  }
  print(); // 10
  </pre>
  <p>В этом случае в функции будет использоваться та переменная z, которая определена непосредственно в функции. То есть локальная переменная скроет глобальную. 
  Однако конкретное поведение при сокрытии зависит от того, как определяется переменная.</p>
  <h4>Скрытие переменной var</h4>
  <p>Выше было указано, что <span class="b">var</span> определяет переменную <span class="b">уровня функции</span>. 
  Поэтому с помощью оператора <span class="b">var</span> мы НЕ можем определить одновременно две переменных с одним и тем же именем и в функции, и в 
  блоке кода в этой функции. Если мы это сделаем, то при объявлении переменной на уровне блока мы меняем значение переменной уровня функции:</p>
  <pre class="brush:js;">
  function displayZ(){
   
      var z = 20;
    
    {
      var z = 30;	// Не определяет новую переменную, а изменяет значение переменной z уровня функции
      console.log("Block:", z);
    }
    console.log("Function:", z);
  }
  displayZ();
  </pre>
  <p>Здесь определение переменной z внутри блока фактически будет равноценно изменению значения переменной уровня функции и фактически это будет одна и та же переменная. 
  Консольный вывод:</p>
  <pre class="browser">
  Block: 30
  Function: 30
  </pre>
  <h4>Скрытие переменной let</h4>
  <p>Как писалось выше, оператор <span class="b">let</span> определяет переменную <span class="b">уровня блока кода</span>. 
  То есть каждый блок кода определяет новую область видимости, в которой существует переменная. Вне блока кода, где определена переменная, она не существует. 
  Соответственно мы можем одновременно определить переменную на уровне блока и на уровне функции (в отличие от <code>var</code>):</p>
  <pre class="brush:js;">
  let z = 10;
  function displayZ(){
   
      let z = 20;
    
    {
      let z = 30;
      console.log("Block:", z);
    }
    
    console.log("Function:", z);
  }
  
  displayZ();
  console.log("Global:", z);
  </pre>
  <p>Здесь внутри функции displayZ определен блок кода, в котором определена переменная z (вместо безымянного блока это мог быть и блок условной конструкции или цикла). 
  Она скрывает глобальную переменную и переменную z, определенную на уровне функции.</p>
  <p>И в данном случае мы получим следующий консольный вывод:</p>
  <div class="console">
  <pre class="consoletext">
  Block: 30
  Function: 20
  Global: 10
  </pre>
  </div>
  <h4>Константы</h4>
  <p>Все, что относится к оператору let, относится и к оператору <span class="b">const</span>, который определяет константы <span class="b">уровня блока кода</span>. 
  Блоки кода задают область видимости констант, а константы, определенные на вложенных блоках кода, скрывают внешние константы с тем же именем:</p>
  <pre class="brush:js;">
  const z = 10;
  function displayZ(){
   
      const z = 20;
    
    {
      const z = 30;
      console.log("Block:", z);	// 30
    }
    console.log("Function:", z);	// 20
  }
  
  displayZ();
  console.log("Global:", z);	// 10
  </pre>
  <h3>Необъявленные переменные</h3>
  <p>Если мы не используем это ключевое слово при определении переменной в функции, то такая переменная будет глобальной. Например:</p>
  <pre class="brush:js;">
  function bar(){
    foo = "25";
  }
  bar();
  console.log(foo);	// 25
  </pre>
  <p>Несмотря на то, что вне функции bar переменная foo нигде не определяется, тем не менее она доступна вне функции во внешнем контексте. Единственное условие - мы вызываем функцию, 
  где определена такая переменная.</p>
  <p>Однако если мы не вызовем функцию, переменная будет не определена:</p>
  <pre class="brush:js;">
  function bar(){
    foo = "25";
  }
  
  // bar();	Функция НЕ вызывается
  console.log(foo);	// ошибка - Uncaught ReferenceError: foo is not defined
  </pre>
  <p>Ту же ошибку мы получили бы, если бы мы не только присваивали значение переменной, но и определяли бы ее:</p>
  <pre class="brush:js;">
  function bar(){
    var foo = "25";
  }
  
  bar();
  console.log(foo);	// ошибка - Uncaught ReferenceError: foo is not defined
  </pre>
  <h3>strict mode</h3>
  <p>Определение глобальных переменных в функциях может вести к потенциальным ошибкам. Чтобы их избежать используется строгий режим или <code>strict mode</code>:</p>
  <pre class="brush:js;">
  "use strict";
  function bar(){
      foo = "25";		// Uncaught ReferenceError: foo is not defined
  }
   
  bar();
  console.log(foo);
  </pre>
  <p>В этом случае мы получим ошибку <code>SyntaxError: Unexpected identifier</code>, которая говорит о том, что переменная foo не определена.</p>
  <p>Установить режим strict mode можно двумя способами:</p>
  <ul>
  <li><p>добавить выражение "use strict" в начало кода JavaScript, тогда strict mode будет применяться для всего кода</p></li>
  <li><p>добавить выражение "use strict" в начало тела функции, тогда strict mode будет применяться только для этой функции. Пример использования на уровне функции:</p>
  <pre class="brush:js;">
  function bar(){
  
    "use strict";
      foo = "25";
  }
  </pre></li>
  </ul>`;
}

//=====================================================================================
function less24(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Замыкания и функции IIFE</h2><div class="date">Последнее обновление: 30.03.2018</div>
  
    <h3>Замыкания</h3>
  <p><span class="b">Замыкание</span> (<span class="b">closure</span>) представляют собой конструкцию, когда функция, 
  созданная в одной области видимости, запоминает свое лексическое окружение даже в том случае, когда она выполняет вне своей области видимости.</p>
  <p>Замыкание технически включает три компонента:</p>
  <ul>
  <li><p>внешняя функция, которая определяет некоторую область видимости и в которой определены некоторые переменные - лексическое 
  окружение</p></li>
  <li><p>переменные (лексическое окружение), которые определены во внешней функции</p></li>
  <li><p>вложенная функция, которая использует эти переменные</p></li>
  </ul>
  <pre class="brush:js;">
  function outer(){		// внешняя функция
    var n;				// некоторая переменная
    return inner(){		// вложенная функция
      // действия с переменной n
    }
  }
  </pre>
  <p>Рассмотрим замыкания на простейшем примере:</p>
  <pre class="brush:js;">
  function outer(){
      let x = 5;
      function inner(){
      x++;
      console.log(x);
    };
    return inner;
  }
  let fn = outer();	// fn = inner, так как функция outer возвращает функцию inner
  // вызываем внутреннюю функцию inner
  fn();	// 6
  fn();	// 7
  fn();	// 8
  </pre>
  <p>Здесь функция outer задает область видимости, в которой определены внутренняя функция inner и переменная x. Переменная x представляет 
  лексическое окружение для функции inner. В самой функции inner инкрементируем переменную x и выводим ее значение на консоль. 
  В конце функция outer возвращает функцию inner.</p>
  <p>Далее вызываем функцию outer:</p>
  <pre class="brush:js;">let fn = outer();</pre>
  <p>Поскольку функция outer возвращает функцию inner, то переменная fn будет хранить ссылку на функцию inner. При этом эта функция 
  запомнила свое окружение - то есть внешнюю переменную x.</p>
  <p>Далее мы фактически три раза вызываем функцию Inner, и мы видим, что переменная x, которая определена вне функции inner, инкрементируется:</p>
  <pre class="brush:js;">
  fn();	// 6
  fn();	// 7
  fn();	// 8
  </pre>
  <p>То есть несмотря на то, что переменная x определена вне функции inner, эта функция запомнила свое окружение и может его использовать, несомотря на то, что 
  она вызывается вне функции outer, в которой была определена. В этом и суть замыканий.</p>
  <p>Рассмотрим еще один пример:</p>
  <pre class="brush:js;">
  function multiply(n){
    var x = n;
    return function(m){ return x * m;};
  }
  var fn1 = multiply(5);
  var result1 = fn1(6); // 30
  console.log(result1); // 30
  
  var fn2= multiply(4);
  var result2 = fn2(6); // 24
  console.log(result2); // 24
  </pre>
  <p>Итак, здесь вызов функции <code>multiply()</code> приводит к вызову другой внутренней функции. Внутренняя же функция:</p>
  <pre class="brush:js;">
  function(m){ return x * m;};
  </pre>
  <p>запоминает окружение, в котором она была создана, в частности, значение переменной x.</p>
  <p>В итоге при вызове функции multiply определяется переменная <code>fn1</code>, которая и представляет собой замыкание, то есть 
  объединяет две вещи: функцию и окружение, в котором функция была создана. Окружение состоит из любой локальной переменной, которая была в области действия 
  функции <code>multiply</code> во время создания замыкания.</p>
  <p>То есть <code>fn1</code> — это замыкание, которое содержит и внутреннюю функцию 
  <code>function(m){ return x * m;}</code>, и переменную x, которая существовала во время создания замыкания.</p>
  <p>При создании двух замыканий: <code>fn1</code> и <code>fn2</code>, для каждого из этих замыканий создается свое окружение.</p>
  <p>При этом важно не запутаться в параметрах. При определении замыкания:</p>
  <pre class="brush:js;">var fn1 = multiply(5);</pre>
  <p>Число 5 передается для параметра n функции multiply.</p>
  <p>При вызове внутренней функции:</p>
  <pre class="brush:js;">var result1 = fn1(6);</pre>
  <p>Число 6 передается для параметра m во внутреннюю функцию <code>function(m){ return x * m;};</code>.</p>
  <p>Также мы можем использовать другой вариант для вызова замыкания:</p>
  <pre class="brush:js;">
  function multiply(n){
    var x = n;
    return function(m){ return x * m;};
  }
  var result = multiply(5)(6); // 30
  console.log(result);
  </pre>
  
  <h3>Самовызывающиеся функции</h3>
  <p>Обычно определение функции отделяется от ее вызова: сначала мы определяем функцию, а потом вызываем. Но это необязательно. Мы также можем 
  создать такие функции, которые будут вызываться сразу при определении. Такие функции еще называют Immediately Invoked Function Expression (IIFE).</p>
  <pre class="brush:js;">
  (function(){
    console.log("Привет мир");
  }());
  
  (function (n){
    
    var result = 1;
    for(var i=1; i&lt;=n; i++)
      result *=i;
    console.log("Факториал числа " + n + " равен " + result);
  }(4));
  </pre>
  <p>Подобные функции заключаются в скобки, и после определения функции идет в скобках передача параметров.</p>
    `;
}

//=====================================================================================
function less25(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Паттерн Модуль</h2><div class="date">Последнее обновление: 26.06.2018</div>
  
    <p>Паттерн "Модуль" базируется на замыканиях и состоит из двух компонентов: внешняя функция, которая определяет лексическое окружение, и 
  возвращаемый набор внутренних функций, которые имеют доступ к этому окружению.</p>
  <p>Определим простейший модуль:</p>
  <pre class="brush:js;">
  let foo = (function(){
    let obj = {greeting: "hello"};
    
    return {
      display: function(){
        console.log(obj.greeting);
      }
    }
  })();
  foo.display();	// hello
  </pre>
  <p>Здесь определена переменная foo, которая представляет результат анонимной функции. Внутри подобной функции определен объект obj с 
  некоторыми данными.</p>
  <p>Сама анонимная функция возвращает объект, который определяет функцию display. Возвращаемый объект определяет общедоступый API, 
  через который мы можем обращаться к данным, определенным внутри модуля.</p>
  <pre class="brush:js;">
  return {
      display: function(){
        console.log(obj.greeting);
      }
    }
  </pre>
  <p>Такая конструкция позволяет закрыть некоторый набор данных в рамках функции-модуля и опосредовать доступ к ним через определенный 
  API - возвращаемые внутренние функции.</p>
  <p>Рассмотрим чуть более сложный пример:</p>
  <pre class="brush:js;">
  let calculator = (function(){
    let data = { number: 0};
    
    return {
      sum: function(n){
        data.number += n;
      },
      subtract: function(n){
        data.number -= n;
      },
      display: function(){
        console.log("Result: ", data.number);
      }
    }
  })();
  calculator.sum(10);
  calculator.sum(3);
  calculator.display();	// Result: 13
  calculator.subtract(4);
  calculator.display();	// Result: 9
  </pre>
  <p>Данный модуль представляет примитивный калькулятор, который выполняет три операции: сложение, вычитание и вывод результата.</p>
  <p>Все данные инкапсулированы в объекте data, который хранит результат операции. Все операции представлены тремя возвращаемыми 
  функциями: sum, subtract и display. Через эти функции мы можем управлять результатом калькулятора извне.</p>
    `;
}

//=====================================================================================
function less26(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Рекурсивные функции</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Среди функций отдельно можно выделить рекурсивные функции. Их суть состоит в том, что функция вызывает саму себя.</p>
  <p>Например, рассмотрим функцию, определяющую факториал числа:</p>
  <pre class="brush:js;">
  function getFactorial(n){
    if (n === 1){
          return 1;
      }
      else{
          
      return n * getFactorial(n - 1);
      }
  }
  var result = getFactorial(4); 
  console.log(result); // 24
  </pre>
  <p>Функция <code>getFactorial()</code> возвращает значение 1, если параметр n равен 1, либо возвращает результат опять же функции getFactorial, то в 
  нее передается значение n-1. Например, при передаче числа 4, у нас образуется следующая цепочка вызовов:</p>
  <pre class="brush:js;">
  var result = 4 * getFactorial(3);
  var result = 4 * 3 * getFactorial(2);
  var result = 4 * 3 * 2 * getFactorial(1);
  var result = 4 * 3 * 2 * 1; // 24
  </pre>
  <p>Рассмотрим другой пример - определение чисел Фибоначчи:</p>
  <pre class="brush:js;">
  function getFibonachi(n)
  {
      if (n === 0){
      return 0;
      }
      if (n === 1){
          return 1;
      }
      else{
          return getFibonachi(n - 1) + getFibonachi(n - 2);
      }
  }
  var result = getFibonachi(8); //21 
  console.log(result); // 21
  </pre>`;
}

//=====================================================================================
function less27(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Переопределение функций</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Функции обладают возможностью для переопределения поведения. Переопределение происходит с помощью присвоения анонимной функции переменной, 
  которая называется так же, как и переопределяемая функция:</p>
  <pre class="brush:js;">
  function display(){
    console.log("Доброе утро");
    display = function(){
      console.log("Добрый день");
    }
  }
  
  display(); // Доброе утро
  display(); // Добрый день
  </pre>
  <p>При первом срабатывании функции действует основной блок операторов функции, в частности, в данном случае выводится сообщение "Доброе утро". 
  И при первом срабатывании функции display также происходит ее переопределение. Поэтому при всех последующих вызовах функции срабатывает ее 
  переопределенная версия, а на консоль будет выводиться сообщение "Добрый день".</p>
  <p>Но при переопределении функции надо учитывать некоторые нюансы. В частности, попробуем присвоить ссылку на функцию переменной и через эту переменную вызвать функцию:</p>
  <pre class="brush:js;">
  function display(){
    console.log("Доброе утро");
    display = function(){
      console.log("Добрый день");
    }
  }
  // присвоение ссылки на функцию до переопределения
  var displayMessage = display;
  display(); // Доброе утро
  display(); // Добрый день
  displayMessage(); // Доброе утро
  displayMessage(); // Доброе утро
  </pre>
  <p>Здесь переменная displayMessage получает ссылку на функцию display до ее переопределения. Поэтому при вызове displayMessage() будет вызываться непереопределенная версия 
  функции display.</p>
  <p>Но допустим, мы определили переменную displayMessage уже после вызова функции display:</p>
  <pre class="brush:js;">
  display(); // Доброе утро
  display(); // Добрый день
  var displayMessage = display;
  displayMessage(); // Добрый день
  displayMessage(); // Добрый день
  </pre>
  <p>В этом случае переменная displayMessage будет указывать на переопределенную версию функции display.</p>
    `;
}

//=====================================================================================
function less28(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Hoisting</h2><div class="date">Последнее обновление: 20.11.2022</div>
  
    <p>Hoisting представляет процесс доступа к переменным до их определения. Возможно, данная концепция выглядит немного странно, но она связана с работой компилятора 
  JavaScript. Компиляция кода происходит в два прохода. При первом проходе компилятор получает все объявления переменных, все идентификаторы. При этом никакой код 
  не выполняется, методы не вызываются. При втором проходе собственно происходит выполнение. И даже если переменная определена после непосредственного использования, 
  ошибки не возникнет, так как при первом проходе компилятору уже известны все переменные.</p>
  <p>То есть как будто происходит поднятие кода с определением переменных и функций вверх до их непосредственного использования. Поднятие на английский переводится 
  как hoisting, сообственно поэтому данный процесс так и называется.</p>
  <h3>Переменные var</h3>
  <p>var-переменные, которые попадают под hoisting, по умолчанию получают значение undefined. Например, возьмем следующий простейший код:</p>
  <pre class="brush:js;">console.log(foo);</pre>
  <p>Его выполнение вызовет ошибку <code>ReferenceError: foo is not defined</code></p>
  <p>Добавим определение переменной:</p>
  <pre class="brush:js;">
  console.log(foo);	// undefined
  var foo = "Tom";
  </pre>
  <p>В этом случае консоль выведет значение "undefined". При первом проходе компилятор узнает про существование переменной foo. Она получает значение undefined. 
  При втором проходе вызывается метод <code>console.log(foo)</code>.</p>
  <p>Возьмем другой пример:</p>
  <pre class="brush:js;">
  var c = a * b;
  var a = 7;
  var b = 3;
  console.log(c);	// NaN
  </pre>
  <p>Здесь та же ситуация. Переменные a и b используются до опеределения. По умолчанию им присваиваются значения undefined. А если умножить undefined на undefined, 
  то получим Not a Number (NaN).</p>
  <p>Все то же самое относится и к использованию функций. Мы можем сначала вызвать функцию, а потом уже ее определить:</p>
  <pre class="brush:js;">
  display();
  
  function display(){
    console.log("Hello Hoisting");
  }
  </pre>
  <p>Здесь функция display благополучно отработает, несмотря на то, что она определена после вызова.</p>
  <p>Но от этой ситуации надо отличать тот случай, когда функция определяется в виде переменной:</p>
  <pre class="brush:js;">
  display();
  
  var display = function (){
    console.log("Hello Hoisting");
  }
  </pre>
  <p>В данном случае мы получим ошибку <code>TypeError: display is not a function</code>. При первом проходе компилятор также получит переменную display и присвоет ей значение undefined. 
  При втором проходе, когда надо будет вызывать функцию, на которую будет ссылаться эта переменная, компилятор увидит, что вызывать то нечего: переменная 
  display пока еще равна undefined. И будет выброшена ошибка.</p>
  <h3>let-переменные и константы</h3>
  <p>Процесс hoisting для let-переменных и констант будет отличаться: в отличие от var-переменных константам и let-переменным при хостинге <span class="b">не присваивается начальное значение</span>. Итак, выше мы видели, что при использовании до объеявления var-переменная получает по умолчанию 
  значение undefined. Теперь посмотрим, что будет с let-переменной:</p>
  <pre class="brush:js;">
  console.log(foo);   // Uncaught ReferenceError: Cannot access 'foo' before initialization
  let foo = "Tom";
  console.log(foo);   // не будет выполняться
  </pre>
  <p>В данном случае в первой строке мы получим ошибку</p>
  <pre class="browser"><span style="color:red;">Uncaught ReferenceError: Cannot access 'foo' before initialization</span></pre>
  <p>То же самое касается и констант:</p>
  <pre class="brush:js;">
  console.log(foo);   // Uncaught ReferenceError: Cannot access 'foo' before initialization
  const foo = "Tom";
  console.log(foo);   // не будет выполняться
  </pre>`;
}

//=====================================================================================
function less29(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Передача параметров по значению и по ссылке</h2><div class="date">Последнее обновление: 27.03.2018</div>
  
    <h3>Передача параметров по значению</h3>
  <p>Строки, числа, логические значения передаются в функцию по значению. Иными словами при передаче значения в функцию, эта функция получает копию данного значения. 
  Рассмотрим, что это значит в практическом плане:</p>
  <pre class="brush:js;">
  function change(x){
    x = 2 * x;
    console.log("x in change:", x);
  }
  
  var n = 10;
  console.log("n before change:", n);	// n before change: 10
  change(n);							// x in change: 20
  console.log("n after change:", n);	// n after change: 10
  </pre>
  <p>Функция change получает некоторое число и увеличивает его в два раза. При вызове функции change ей передается число n. Однако после вызова функции мы 
  видим, что число n не изменилось, хотя в самой функции произошло увеличение значения параметра. Потому что при вызове функция change получает копию значения 
  переменной n. И любые изменения с этой копией никак не затрагивают саму переменную n.</p>
  <h3>Передача по ссылке</h3>
  <p>Объекты и массивы передаются по ссылке. То есть функция получает сам объект или массив, а не их копию.</p>
  <pre class="brush:js;">
  function change(user){
    user.name = "Tom";
  }
  
  var bob ={ 
    name: "Bob"
  };
  console.log("before change:", bob.name);	// Bob
  change(bob);
  console.log("after change:", bob.name);		// Tom
  </pre>
  <p>В данном случае функция change получает объект и меняет его свойство name. В итоге мы увидим, что после вызова функции изменился оригинальный 
  объект bob, который передавался в функцию.</p>
  <p>Однако если мы попробуем переустановить объект или массив полностью, оригинальное значение не изменится.</p>
  <pre class="brush:js;">
  function change(user){
    // полная переустановка объекта
    user= {
      name:"Tom"
    };
  }
  
  var bob ={ 
    name: "Bob"
  };
  console.log("before change:", bob.name);	// Bob
  change(bob);
  console.log("after change:", bob.name);		// Bob
  </pre>
  <p>То же самое касается массивов:</p>
  <pre class="brush:js;">
  function change(array){
    array[0] = 8;
  }
  function changeFull(array){
    array = [9, 8, 7];
  }
  
  var numbers = [1, 2, 3];
  
  console.log("before change:", numbers);		// [1, 2, 3]
  change(numbers);
  console.log("after change:", numbers);		// [8, 2, 3]
  changeFull(numbers);
  console.log("after changeFull:", numbers);	// [8, 2, 3]
  </pre>`;
}

//=====================================================================================
function less210(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Стрелочные функции</h2><div class="date">Последнее обновление: 15.07.2021</div>
  
    <p>Стрелочные функции (arrow functions) позоляют сократить определение обычных функций. Стрелочные функции образуются с помощью знака стрелки (=&gt;), перед которым в скобках идут 
  параметры функции, а после - собственно тело функции.</p>
  <pre class="brush:js;">(параметры) =&gt; действия_функции</pre>
  <p>Для примера возьмем сначала обычную примитивную функцию, которая выводит сообщение на консоль:</p>
  <pre class="brush:js;">
  function hello(){
    console.log("Hello");
  }
  hello();	// вызываем функцию
  </pre>
  <p>Теперь переделаем ее в стрелочную функцию:</p>
  <pre class="brush:js;">
  let hello = ()=&gt; console.log("Hello");
  hello();
  </pre>
  <p>В данном случае стрелочная функция присваивается переменной <code>hello</code>, через которую затем можно вызвать данную функцию.</p>
  <p>Здесь мы не используем параметры, поэтому указываются пустые скобки <code><span class="b">()</span>=&gt; console.log("Hello");</code></p>
  <p>Далее через имя переменной мы можем вызвать данную функцию.</p>
  <h3>Передача параметров</h3>
  <p>Теперь определим стрелочную функцию, которая принимает один параметр:</p>
  <pre class="brush:js;">
  let print = (mes)=&gt; console.log(mes);
  
  print("Hello Metanit.com");
  print("Welcome to JavaScript");
  </pre>
  <p>Здесь стрелочная функция принимает один параметр <code>mes</code>, значение которого выводится на консоль браузера.</p>
  <p>Если стрелочная функция имеет только один параметр, то скобки вокруг списка параметров можно опустить:</p>
  <pre class="brush:js;">
  let print = mes=&gt; console.log(mes);
  
  print("Hello Metanit.com");
  print("Welcome to JavaScript");
  </pre>
  <p>Другой пример - передадим два параметра:</p>
  <pre class="brush:js;">
  let sum = (x, y)=&gt; console.log("Sum =", x + y);
  
  sum(1, 2);		// Sum = 3
  sum(4, 3);		// Sum = 7
  sum(103, 2);	// Sum = 105
  </pre>
  <h3>Возвращение результата</h3>
  <p>Чтобы возвратить значение из стрелочной функции, нам lостаточно указать его после стрелки. Например, определим функцию, которая возвращает сумму двух 
  чисел:</p>
  <pre class="brush:js;">
  let sum = (x, y)=&gt; x + y;
  
  console.log(sum(1, 2));		// 3
  console.log(sum(4, 3));		// 7
  console.log(sum(102, 5));	// 107
  </pre>
  <p>Другой пример - возвратим отфарматированную строку:</p>
  <pre class="brush:js;">
  const hello = name =&gt; 'Hello, &sect{name}';
  
  console.log(hello("Tom"));				// Hello, Tom
  console.log(hello("Bob"));				// Hello, Bob
  console.log(hello("Frodo Baggins"));	// Hello, Frodo Baggins
  </pre>
  <p>В данном случае функция <code>hello</code> принимает один параметр name - условное имя и создает на его основе сообщение с приветствием.</p>
  <h3>Возвращение объекта</h3>
  <p>Особо следует остановиться на случае, когда стрелочная функция возвращает объект:</p>
  <pre class="brush:js;">
  let user = (userName, userAge) =&gt; ({name: userName, age: userAge});
  
  let tom = user("Tom", 34);
  let bob = user("Bob", 25);
  
  console.log(tom.name, tom.age);		// "Tom", 34
  console.log(bob.name, bob.age);		// "Bob", 25
  </pre>
  <p>Объект также определяется с помощью фигурных скобок, но при этом он заключается в круглые скобки.</p>
  <h3>Функция из нескольких инструкций</h3>
  <p>Выше в примерах все стрелочные функции имели только одну инструкцию. Если же функция должна выполнять больше действий, то они, как и в обычной функции, 
  заключаются в фигурные скобки:</p>
  <pre class="brush:js;">
  const square = n =&gt; {
      let result = n * n;
      console.log(result);
  }
   
  square(5);     // 25
  square(6);     // 36
  </pre>
  <p>А если надо возвратить результат, применяется оператор <code>return</code>, как в обычной функции:</p>
  <pre class="brush:js;">
  const square = n =&gt; {
      let result = n * n;
      return result;
  }
   
  console.log(square(5));     // 25
  </pre>`;
}

//=====================================================================================
function less30(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Объектно-ориентированное программирование</h1><div class="date">Последнее обновление: 08.09.2021</div>
  
    <p>Объектно-ориентированное программирование на сегодняшний день является одной из господствующих парадигм в разработке приложений, и в 
  JavaScript мы также можем использовать все преимущества ООП. В то же время применительно к JavaScript объектно-ориентированное программирование 
  имеет некоторые особенности.</p>
  <h2>Объекты</h2>
  <p>В прошлых темах мы работали с примитивными данными - числами, строками, но данные не всегда представляют примитивные типы. Например, если в нашей 
  программе нам надо описать сущность человека, у которого есть имя, возраст, пол и так далее, то естественно мы не сможем представить сущность человека в виде 
  числа или строки. Нам потребуется несколько строк или чисел, чтобы должным образом описать человека. В этом плане человек будет выступать как сложная комплексная структура, 
  у которого будут отдельные свойства - возраст, рост, имя, фамилия и т.д.</p>
  <p>Для работы с подобными структурами в JavaScript используются <span class="b">объекты</span>. Каждый объект может хранить свойства, которые описывают его 
  <span class="b">состояние</span>, и методы, которые описывают его <span class="b">поведение</span></p>
  <h3>Создание нового объекта</h3>
  <p>Есть несколько способов создания нового объекта.</p>
  <p>Первый способ заключается в использовании конструктора <code>Object</code>:</p>
  <pre class="brush:js;">let user = new Object();</pre>
  <p>В данном случае объект называется <code>user</code>.</p>
  <p>Выражение <code>new Object()</code> представляет вызов конструктора - функции, создающей новый объект. Для вызова конструктора применяется оператор <span class="bb">new</span>. Вызов конструктора фактически 
  напоминает вызов обычной функции.</p>
  <p>Второй способ создания объекта представляет использование фигурных скобок:</p>
  <pre class="brush:js;">let user = {};</pre>
  <p>На сегодняшний день более распространенным является второй способ.</p>
  <h3>Свойства объекта</h3>
  <p>После создания объекта мы можем определить в нем свойства. Чтобы определить свойство, надо после названия объекта через точку указать имя свойства и присвоить ему значение:</p>
  <pre class="brush:js;">
  let user = {};
  user.name = "Tom";
  user.age = 26;
  </pre>
  <p>В данном случае объявляются два свойства <code>name</code> и <code>age</code>, которым присваиваются соответствующие значения. После этого мы можем использовать 
  эти свойства, например, вывести их значения в консоли:</p>
  <pre class="brush:js;">
  console.log(user.name);
  console.log(user.age);
  </pre>
  <p>Также можно определить свойства при определении объекта:</p>
  <pre class="brush:js;">
  let user = {
   
      name: "Tom",
      age: 26
  };
  </pre>
  <p>В этом случае для присвоения значения свойству используется символ двоеточия, а после определения свойства ставится запятая (а не точка с запятой).</p>
  <p>Кроме того, доступен сокращенный способ определения свойств:</p>
  <pre class="brush:js;">
  let name = "Tom";
  let age = 34;
  let user = {name, age};
  console.log(user.name);		// Tom
  console.log(user.age);		// 34
  </pre>
  <p>В данном случае названия переменных также являются и названиями свойств объекта. И таким образом можно создавать более сложные конструкции:</p>
  <pre class="brush:js;">
  let name = "Tom";
  let age = 34;
  let user = {name, age};
  
  let teacher = {user, course: "JavaScript"};
  console.log(teacher.user);		// {name: "Tom", age: 34}
  console.log(teacher.course);	// JavaScript
  </pre>
  <h3>Методы объекта</h3>
  <p>Методы объекта определяют его поведение или действия, которые он производит. Методы представляют собой функции. Например, определим метод, который бы выводил 
  имя и возраст человека:</p>
  <pre class="brush:js;">
  let user = {};
  user.name = "Tom";
  user.age = 26;
  user.display = function(){
    
    console.log(user.name);
    console.log(user.age);
  };
  
  // вызов метода
  user.display();
  </pre>
  <p>Как и в случае с функциями методы сначала определяются, а потом уже вызываются.</p>
  <p>Также методы могут определяться непосредственно при определении объекта:</p>
  <pre class="brush:js;">
  let user = {
   
      name: "Tom",
      age: 26,
      display: function(){
       
          console.log(this.name);
          console.log(this.age);
      }
  };
  </pre>
  <p>Как и в случае со свойствами, методу присваивается ссылка на функцию с помощью знака двоеточия.</p>
  <p>Чтобы обратиться к свойствам или методам объекта внутри этого объекта, используется ключевое слово <span class="b">this</span>. Оно означает ссылку на 
  текущий объект.</p>
  <p>Также можно использовать сокращенный способ определения методов, когда двоеточие и слово function опускаются:</p>
  <pre class="brush:js;">
  let user = {
   
      name: "Tom",
      age: 26,
      display(){
       
          console.log(this.name, this.age);
      },
    move(place){
      console.log(this.name, "goes to", place);
    }
  };
  user.display();	// Tom 26
  user.move("the shop");	// Tom goes to the shop
  </pre>
  <h3>Синтаксис массивов</h3>
  <p>Существует также альтернативный способ определения свойств и методов с помощью синтаксиса массивов:</p>
  <pre class="brush:js;">
  let user = {};
  user["name"] = "Tom";
  user["age"] = 26;
  user["display"] = function(){
    
    console.log(user.name);
    console.log(user.age);
  };
  
  // вызов метода
  user["display"]();
  </pre>
  <p>Название каждого свойства или метода заключается в кавычки и в квадратные скобки, затем им также присваивается значение. Например, <code>user["age"] = 26</code>.</p>
  <p>При обращении к этим свойствам и методам можно использовать либо нотацию точки (<code>user.name</code>), либо обращаться так: <code>user["name"]</code></p>
  <p>Также можно определить свойства и методы через синтаксис массивов напрямую при создании объекта:</p>
  <pre class="brush:js;">
  let user = {
    ["name"]: "Tom",
    ["age"]: 26,
    ["display"]: function(){
       
      console.log(user.name);
      console.log(user.age);
    }
  };
  user["display"]();
  </pre>
  
  <h4>Строки в качестве свойств и методов</h4>
  <p>Также следует отметить, что названия свойств и методов объекта всегда представляют строки. То есть мы могли предыдущее определение объекта переписать так:</p>
  <pre class="brush:js;">
  let user = {
    "name": "Tom",
    "age": 26,
    "display": function(){
    
      console.log(user.name);
      console.log(user.age);
    }
  };
  // вызов метода
  user.display();
  </pre>
  <p>С одной стороны, разницы никакой нет между двумя определениями. С другой стороны, бывают случаи, где заключение названия в строку могут помочь. Например, 
  если название свойства состоит из двух слов, разделенных пробелом:</p>
  <pre class="brush:js;">
  let user = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function(){
    
      console.log(user.name);
      console.log(user.age);
    }
  };
  console.log(user["full name"]);
  user["display info"]();
  </pre>
  <p>Только в этом случае для обращении к подобным свойствам и методам мы должны использовать синтаксис массивов.</p>
  <h4>Динамическое определение имен свойств и методов</h4>
  <p>Синтаксис массивов открывает нам другую возможность - определение имени свойства вне объекта:</p>
  <pre class="brush:js;">
  const prop1  = "name";
  const prop2  = "age";
  let tom = { 
    [prop1]: "Tom",
    [prop2]: 37
  };
  console.log(tom);			// {name: "Tom", age: 37}
  console.log(tom.name);		// Tom
  console.log(tom["age"]);	// 37
  </pre>
  <p>Благодая этому, например, можно динамически создавать объекты с произвольными названиями свойств:</p>
  <pre class="brush:js;">
  function createObject(propName, propValue){
    return {
        [propName]: propValue,
        print(){ 
          console.log(\`\${propName}: \${propValue}\`);
        }
    };
  }
  let person = createObject("name", "Tom");
  person.print();		// name: Tom
  
  let book = createObject("title", "JavaScript Reference");
  book.print();	// title: JavaScript Reference
  </pre>
  <h3>Удаление свойств</h3>
  <p>Выше мы посмотрели, как можно динамически добавлять новые свойства к объекту. Однако также мы можем удалять свойства и методы с помощью оператора 
  <span class="b">delete</span>. И как и в случае с добавлением мы можем удалять свойства двумя способами. Первый способ - использование нотации точки:</p>
  <pre class="brush:js;">delete объект.свойство</pre>
  <p>Либо использовать синтаксис массивов:</p>
  <pre class="brush:js;">delete объект["свойство"]</pre>
  <p>Например, удалим свойство:</p>
  <pre class="brush:js;">
  let user = {};
  user.name = "Tom";
  user.age = 26;
  user.display = function(){
    
    console.log(user.name);
    console.log(user.age);
  };
  
  console.log(user.name); // Tom
  delete user.name; // удаляем свойство
  // альтернативный вариант
  // delete user["name"];
  console.log(user.name); // undefined
  </pre>
  <p>После удаления свойство будет не определено, поэтому при попытке обращения к нему, программа вернет значение undefined.</p>
  <h3>Константные объекты</h3>
  <p>Возможно, нам поребуется, чтобы объект нельзя было изменить, то есть сделать константным. Однако просто определить его как обычную константу с 
  помощью оператора <span class="b">const</span> недостаточно. Например:</p>
  <pre class="brush:js;">
  const person = {name: "Tom", age: 37};
  person.name= "Bob";
  console.log(person.name);	// Bob
  </pre>
  <p>Здесь мы видим, что свойство объекта изменило свое значение, хотя объект определен как константа.</p>
  <p>Оператор <code>const</code> лишь влияет на то, что мы не можем присвоить константе новое значение, например, как в следующем случае:</p>
  <pre class="brush:js;">
  const person = {name: "Tom", age: 37};
  person = {name: "Sam", age: 56};	// Ошибка - нельзя константе присвоить значение второй раз
  </pre>
  <p>Тем не менее значения свойств объекта мы можем изменять.</p>
  <p>Чтобы сделать объект действительно константным, необходимо применить специальный метод <span class="b">Object.freeze()</span>. В этот метод в качестве параметра 
  передается объект, который надо сделать константным:</p>
  <pre class="brush:js;">
  const person = {name: "Tom", age: 37};
  Object.freeze(person);
  person.name= "Bob";
  console.log(person.name);	// Tom - значение свойства не изменилось
  </pre>
  <h3>Создание объекта из переменных и констант</h3>
  <p>При создании объекта его свойствам могут передаваться значения переменных, констант или динамически вычисляемые результаты функций:</p>
  <pre class="brush:js;">
  function getSalary(status){
    if(status==="senior") return 1500;
    else return 500;
  }
  const name = "Tom";
  const age = 37;
  const person = { name: name, age: age, salary: getSalary()};
  
  console.log(person);	// {name: "Tom", age: 37, salary: 500}
  </pre>
  <p>Но если названия констант/переменных совпадает с названиями свойств, то можно сократить передачу значений:</p>
  <pre class="brush:js;">
  const name = "Tom";
  const age = 37;
  const salary = 500;
  const person = { name, age, salary};
  
  console.log(person);	// {name: "Tom", age: 37, salary: 500}
  </pre>
  <p>В данном случае объект person автомтически получит свойства, названия которых будут соответствовать названиям констант, а в качестве значений иметь значения этих констант.</p>
  <p>То же самое относится к передаче функций методам объекта:</p>
  <pre class="brush:js;">
  function display(){ 
    console.log(this.name, this.age);
  }
  const move = function(place){ console.log(this.name, "goes to", place)};
  const name = "Tom";
  const age = 37;
  const salary = 500;
  const person = { name, age, salary, display, move};
  
  person.display();		// Tom 37
  person.move("cinema");	// Tom goes to cinema
  </pre>
  <p>В данном случае объект person имеет два метода, которые соответствуют переданным в объект функциям - <code>display()</code> и <code>move()</code>. 
  Стоит отметить, что при такой передаче функций методам объекта, мы по прежнему можем использовать в этих функциях ключевое слово <code>this</code> для обращения к функциональности объекта. 
  Однако стоит быть осторожным при передаче лямбд-выражений, поскольку для глобальных лямбд-выражений this будет представлять объект окна браузера:</p>
  <pre class="brush:js;">
  const move = (place)=&gt;{ console.log(this.name, "goes to", place); console.log(this);};
  const name = "Tom";
  
  const person = { name, move};
  person.move("cinema");	//  goes to cinema
  </pre>
  <h3>Фукция Object.fromEntries()</h3>
  <p>С помощью функции <span class="b">Object.fromEntries()</span> можно создать объект из набора пар ключ-значение, где ключ потом будет представляет название свойства. Например, создадим 
  объект из массивов:</p>
  <pre class="brush:js;">
  const personData = [ ["name", "Tom"], ["age", 37]];
  const person = Object.fromEntries(personData);
  console.log(person);		// {name: "Tom", age: 37}
  console.log(person.name);	 // Tom
  </pre>
  <p>Здесь объект создается из массива personData, который содержит два подмассива. Каждый подмассив содержит два элемента и фактически представляет пару ключ-значение. 
  Первый элемент представляет ключ, а второй - значение.</p>`;
}

//=====================================================================================
function less31(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Вложенные объекты и массивы в объектах</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Одни объекты могут содержать в качестве свойств другие объекты. Например, есть объект страны, у которой можно выделить ряд свойств. Одно из 
  этих свойств может представлять столицу. Но у столицы мы также можем выделить свои свойства, например, название, численность населения, год основания:</p>
  <pre class="brush:js;">
  var country = {
  
    name: "Германия",
    language: "немецкий",
    capital:{
    
      name: "Берлин",
      population: 3375000,
      year: 1237
    }
  };
  console.log("Столица: " + country.capital.name); // Берлин
  console.log("Население: " + country["capital"]["population"]); // 3375000
  console.log("Год основания: " + country.capital["year"]); // 1237
  </pre>
  <p>Для доступа к свойствам таких вложенных объектов мы можем использовать стандартную нотацию точки:</p><pre class="brush:js;">country.capital.name</pre>
  <p>Либо обращаться к ним как к элементам массивов:</p><pre class="brush:js;">country["capital"]["population"]</pre>
  <p>Также допустим смешанный вид обращения:</p><pre class="brush:js;">country.capital["year"]</pre>
  <p>В качестве свойств также могут использоваться массивы, в том числе массивы других объектов:</p>
  <pre class="brush:js;">
  var country = {
  
    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital:{
    
      name: "Берн",
      population: 126598
    },
    cities: [
      { name: "Цюрих", population: 378884},
      { name: "Женева", population: 188634},
      { name: "Базель", population: 164937}
    ]
  };
  
  // вывод всех элементов из country.languages
  document.write("&lt;h3&gt;Официальные языки Швейцарии&lt;/h3&gt;");
  for(var i=0; i &lt; country.languages.length; i++)
    document.write(country.languages[i] + "&lt;br/&gt;");
    
  // вывод всех элементов из country.cities
  document.write("&lt;h3&gt;Города Швейцарии&lt;/h3&gt;");
  for(var i=0; i &lt; country.cities.length; i++)
    document.write(country.cities[i].name + "&lt;br/&gt;");
  </pre>
  <p>В объекте country имеется свойство languages, содержащее массив строк, а также свойство cities, хранящее массив однотипных объектов.</p>
  <p>С этими массивами мы можем работать также, как и с любыми другими, например, перебрать с помощью цикла for.</p>
  <p>При переборе массива объектов каждый текущий элемент будет представлять отдельный объект, поэтому мы можем обратиться к его свойствам и методам:</p>
  <pre class="brush:js;">country.cities[i].name</pre>
  <p>В итоге браузер выведет содержимое этих массивов:</p>
  <img src="pics/3.1.png" alt="Вложенные объекты и массивы в объектах JavaScript" />
   `;
}

//=====================================================================================
function less32(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Копирование и сравнение объектов</h2><div class="date">Последнее обновление: 02.09.2021</div>
  
    <h3>Копирование объектов</h3>
  <p>В отличие от данных примитивных типов данные объектов копируются по ссылке. Что это значит? Рассмотрим следующий пример:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom"};
  const bob = tom;
  // проверяем свойство name у обоих констант
  console.log(tom.name);	// Tom
  console.log(bob.name);	// Tom
      
  // меняем свойство name у константы bob
  bob.name = "Bob";
  // повторно проверяем свойство name у обоих констант
  console.log("После изменения")
  console.log(tom.name);	// Bob
  console.log(bob.name);	// Bob
  </pre>
  <p>Вначале определяется обычный объект <code>tom</code> с одним свойством <code>name</code>. Затем присваиваем значение этого объекта константе <code>bob</code></p>
  <pre class="brush:js;">const bob = tom;</pre>
  <p>В данном случае константа <code>bob</code> получае ссылку или условно говоря адрес константы <code>tom</code>, поэтому после этого присвоения обе константы 
  по сути указывают на один и тот же объект в памяти. Соответственно изменения, произведенные через одну константу:</p>
  <pre class="brush:js;">bob.name = "Bob";</pre>
  <p>Затронут и другую константу - <code>tom</code>:</p>
  <pre class="brush:js;">
  console.log(tom.name);	// Bob\
  </pre>
  <p>Более того, добавим к объекту новое свойство через одну из констант:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom"};
  const bob = tom;
  // добавляем константе bob новое свойство - age
  bob.age = 37;
  // и видим, что для tom тоже добавлено новое свойство
  console.log(tom.age);	// 37
  </pre>
  <p>После добавления свойства <code>age</code> константе <code>bob</code> можно увидеть, что у константы <code>tom</code> то же появилось это свойство, потому что 
  опять же обе константы представляют один и тот же объект.</p>
  <p>Что же если мы хотим скопировать из свойства объекта, но при этом обе константы или переменных указывали бы на совершенно разные объекты, изменения одного из которых никак бы не 
  затрагивали другой? В этом случае мы можем воспользоваться встроенным методом <span class="b">Object.assign()</span>.</p>
  <h3>Метод Object.assign</h3>
  <p>Метод <span class="b">Object.assign()</span> принимает два параметра:</p>
  <pre class="brush:js;">Object.assign(target, ...sources)</pre>
  <p>Первый параметр - <code>target</code> представляет объект, в который надо скопировать свойства. Второй параметр - <code>...sources</code> - набор объектов, из 
  которых надо скопировать свойства (то есть мы можем скопировать свойства сразу из нескольких объектов)</p>
  <p>Возвращает метод объект target, в который скопированы свойства из объектов <code>sources</code>.</p>
  <p>Например:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom", age: 37};
  const bob = Object.assign({}, tom);
  bob.name = "Bob";
  bob.age = 41;
      
  console.log(\`Объект tom. Name: \${tom.name}   Age: \${tom.age}\`);
  console.log(\`Объект bob. Name: \${bob.name}   Age: \${bob.age}\`);
  </pre>
  <p>В данном случае вызов <code>Object.assign({}, tom)</code> означает, что мы копируем данные из объекта <code>tom</code> в пустой объект <code>{}</code>. 
  Результатом этого копирования стал объект <code>bob</code>. Причем это совсем другой объект, нежели <code>tom</code>. И любые изменения с константой <code>bob</code> 
  здесь никак не затронут константу <code>tom</code>.</p>
  <p>Консольный вывод программы:</p>
  <div class="console">
  <pre class="consoletext">
  Объект tom. Name: Tom   Age: 37
  Объект bob. Name: Bob   Age: 41
  </pre>
  </div>
  <h4>Копирование из нескольких объектов</h4>
  <p>Подобным образом можно копировать данные из нескольких объектов:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom"};
  const sam = { age: 37};
  const person = { height: 170};
  Object.assign(person, tom, sam);	// копируем из tom и sam в person
  console.log(person);	// {height: 170, name: "Tom", age: 37}
  </pre>
  <p>Здесь копируются все свойства из объектов tom и sam в объект person. В итоге после копирования объект person будет иметь три свойства.</p>
  <h4>Копирование одноименных свойств</h4>
  <p>Если объекты, из которых выполняется копирование, содержат одинаковые свойства, то свойства из последних объектов замещают свойства предыдущих:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom", age: 37};
  const sam = { age: 45};
  const person = { height: 170};
  Object.assign(person, tom, sam);
  console.log(person);	// {height: 170, name: "Tom", age: 45}
  </pre>
  <p>Здесь оба объекта - tom и sam содержат свойство <code>age</code>, но в объекте person свойство age равно 45 - значение из объекта sam, потому что 
  копирование из объекта sam произодится в последнюю очередь.</p>
  <h4>Копирование свойств-объектов</h4>
  <p>Несмотря на то, что <code>Object.assign()</code> прекрасно работает для простых объектов, но что будет, если свойство копируемого объекта также представляет объект:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom", company: {title: "Microsoft"}};
  const bob = Object.assign({}, tom);
  bob.name = "Bob";
  bob.company.title = "Google";
  console.log(tom.name);		// Tom
  console.log(tom.company.title);		// Google
  </pre>
  <p>Здесь свойство <code>company</code> объекта <code>tom</code> представляет объект с одним свойством. И при копировании объект bob получит не копию значения <code>tom.company</code>, 
  а ссылку на этот объект. Поэтому изменения <code>bob.company</code> затронут и <code>tom.company</code>.</p>
  <h3>Копирование объекта с помощью spread-оператора</h3>
  <p><span class="b">spread-оператор ...</span> позволяет разложить объект на различные пары <code>свойство-значение</code>, которые можно передать другому объекту.</p>
  <pre class="brush:js;">
  const tom = { name: "Tom", age: 37, company: "Google"};
  const bob = {...tom}
  bob.name = "Bob";
           
  console.log(tom);	// {name: "Tom", age: 37, company: "Google"}
  console.log(bob);	// {name: "Bob", age: 37, company: "Google"}
  </pre>
  <p>В данном случае объекту <code>bob</code> передаются копии свойств объекта tom.</p>
  <p>Если какие-то свойства нового объекта должны иметь другие значения (как в примере выше свойство name), то их можно указать в конце:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom", age: 37, company: "Google"};
  const bob = {...tom, name: "Bob"};
           
  console.log(bob);	// {name: "Bob", age: 37, company: "Google"}
  </pre>
  <p>Как видно из предыдущего примера, обе константы после копирования представляют ссылки на разные объекты, и изменения одного из них никак не затронет другой объект.</p>Тем не менее если объекты содержат вложенные объекты, 
  то эти вложенные объекты при копировании опять же по сути будут представлять ссылки на один и тот же объект:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom", age: 37, company: {title: "Microsoft"}};
  const bob = {...tom}
  bob.name = "Bob";
  bob.company.title = "Google";
  
  console.log(\`\${tom.name} - \${tom.company.title}\`);	// Tom - Google
  console.log(\`\${bob.name} - \${bob.company.title}\`);	// Bob - Google
  </pre>
  <h3>Сравнение объектов</h3>
  <p>Сравним два объекта с помощью стандартных операций сравнения и эквивалентности:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom"};
  const bob = { name: "Bob"};
  console.log(tom == bob);	// false
  console.log(tom === bob);	// false
  </pre>
  <p>Оба оператора в данном случае возвратят значение <code>false</code>, то есть 
  объекты не равны. Причем даже если значения свойств объектов будет одинаковым, то мы все равно в обоих случаях получим <code>false</code></p>
  <pre class="brush:js;">
  const tom = { name: "Tom"};
  const bob = { name: "Tom"};
  console.log(tom == bob);	// false
  console.log(tom === bob);	// false
  </pre>
  <p>Однако, что будет, если обе константы (переменных) хранят ссылку на один и тот же объект:</p>
  <pre class="brush:js;">
  const tom = { name: "Tom"};
  const bob = tom;
  console.log(tom == bob);	// true
  console.log(tom === bob);	// true
  </pre>
  <p>В этом случае в обоих случаях мы получим <code>true</code>, поскольку значения обоих констант равны, так как по сути это одно и то же значение.</p>
  `;
}

//=====================================================================================
function less33(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Проверка наличия и перебор методов и свойств</h2><div class="date">Последнее обновление: 08.09.2021</div>
  
    <p>При динамическом определении в объекте новых свойств и методов перед их использованием бывает важно проверить, а есть ли уже такие методы и свойства. 
  Для этого в javascript может использоваться оператор <span class="b">in</span>. Он имеет следующий синтаксис:</p>
  <pre class="brush:js;">"свойство|метод" in объект</pre>
  <p>в кавычках идет название свойства или метода, а после <span class="b">in</span> - название объекта. 
  Если свойство или метод с подобным именем имеется, то оператор возвращает <code>true</code>. Если нет - то возвращается <code>false</code>.</p>
  <p>Например, узнаем, есть ли в объекте ряд свойств:</p>
  <pre class="brush:js;">
  const user = {};
  user.name = "Tom";
  user.age = 26;
  user.print = function(){
    
    console.log(this.name);
    console.log(this.age);
  };
  const hasNameProp = "name" in user;
  console.log(hasNameProp); // true - свойство name есть в user
  
  const hasWeightProp = "weight" in user;
  console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight
  </pre>
  <p>С помощью выражения <code>"name" in user</code> проверяем, есть ли в объекте user свойство "name" и результат проверки передаем в константу hasNameProp. 
  Далее анологичным образом проверяем наличие свойства <code>wheight</code>.</p>
  <p>Подобным образом можно проверить и наличие методов:</p>
  <pre class="brush:js;">
  const hasPrintMethod = "print" in user;
  console.log(hasPrintMethod); // true - в user есть метод print
  </pre>
  <p>Альтернативный способ заключается на значение <span class="b">undefined</span>. Если свойство или метод равен undefined, то эти свойство или метод не определены:</p>
  <pre class="brush:js;">
  const hasNameProp = user.name!==undefined;
  console.log(hasNameProp); // true
  const hasWeightProp = user.weight!==undefined;
  console.log(hasWeightProp); // false
  </pre>
  <p>И так как объекты представляют тип Object, а значит, имеет все его методы и свойства, то объекты также могут использовать метод 
  <span class="b">hasOwnProperty()</span>, который определен в типе Object:</p>
  <pre class="brush:js;">
  const hasNameProp = user.hasOwnProperty("name");
  console.log(hasNameProp); // true
  const hasPrintMethod = user.hasOwnProperty("print");
  console.log(hasPrintMethod); // true
  const hasWeightProp = user.hasOwnProperty("weight");
  console.log(hasWeightProp); // false
  </pre>
  
  <h3>Перебор свойств и методов</h3>
  <p>С помощью цикла for мы можем перебрать объект как обычный массив и получить все его свойства и методы и их значения:</p>
  <pre class="brush:js;">
  const tom = {
    name: "Tom",
    age: 26,
    print(){
      console.log(\`Name: \${this.name}  Age: \${this.age}\`);
    }
  };
  
  for(const prop in tom) {
      console.log(prop, " : ", tom[prop]);
  }
  </pre>
  <p>И при запуске консоль браузера отобразит следующий вывод:</p>
  <pre class="browser">
  name : Tom
  age : 26
  print : print(){
    console.log(\`Name: \${this.name}  Age: \${this.age}\`);
  }
  </pre>
  <h3>Функции Object.entries, Object.keys, Object,values</h3>
  <p>С помощью дополнительных функций <span class="b">Object.entries</span>, <span class="b">Object.keys</span> и <span class="b">Object,values</span> 
  можно получить все свойства (в том числе методы) объекта и их значения.</p>
  <h4>Object.entries()</h4>
  <p>Функция <span class="b">Object.entries()</span> в качестве параметра принимает объект и возвращает массив пар "название_свойства - значение", где каждая пара свойство-значение представляет массив. 
  Например:</p>
  <pre class="brush:js;">
  const tom = {
      name: "Tom",
      age: 26,
      print(){
          console.log(\`Name: \${this.name}  Age: \${this.age}\`);
      }
  };
   
  for(const prop of Object.entries(tom)) {
      console.log(prop);
  }
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  ["name", "Tom"]
  ["age", 26]
  ["print", ƒ]
  </pre>
  <h4>Object.keys()</h4>
  <p>Функция <span class="b">Object.keys()</span> позволяет получить массив названий всех свойств объекта. Например, возьмем выше опредеенный объект <code>tom</code>:</p>
  <pre class="brush:js;">
  const tom = {
      name: "Tom",
      age: 26,
      print(){
          console.log(\`Name: \${this.name}  Age: \${this.age}\`);
      }
  };
   console.log(Object.keys(tom)); // ["name", "age", "print"]
  </pre>
  <p>Соответственно можно перебрать этот набор и получить значения свойств:</p>
  <pre class="brush:js;">
  for(const prop of Object.keys(tom)) {
      const value = tom[prop];	// получаем по названию значение свойства
    console.log(prop,value);
  }
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  name Tom
  age 26
  print ƒ print(){
          console.log(\`Name: \${this.name}  Age: \${this.age}\`);
      }
  </pre>
  <h4>Object.values()</h4>
  <p>Функция <span class="b">Object.values()</span> возвращает массив, который содержит все значения свойств объекта:</p>
  <pre class="brush:js;">
  const tom = {
      name: "Tom",
      age: 26,
      print(){
          console.log(\`Name: \${this.name}  Age: \${this.age}\`);
      }
  };
   console.log(Object.values(tom)); // ["Tom", 26, print()]
  </pre>`;
}

//=====================================================================================
function less34(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объекты в функциях</h2><div class="date">Последнее обновление: 1.11.2015</div>

    <p>Функции могут возвращать значения. Но эти значения не обязательно должны представлять примитивные данные - числа, строки, но также могут быть сложными объектами.</p>
  <p>Например, вынесем создание объекта user в отдельную функцию:</p>
  <pre class="brush:c#;">
  function createUser(pName, pAge) {
    return {
      name: pName,
      age: pAge,
      displayInfo: function() {
        document.write("Имя: " + this.name + " возраст: " + this.age + "&lt;br/&gt;");
      }
    };
  };
  var tom = createUser("Tom", 26);
  tom.displayInfo();
  var alice = createUser("Alice", 24);
  alice.displayInfo();
  </pre>
  <p>Здесь функция <code>createUser()</code> получает значения pName и pAge и по ним создает новый объект, который является возвращаемым результатом.</p>
  <p>Преимуществом вынесения создания объекта в функцию является то, что далее мы можем создать несколько однотипных объектов с разными значениями.</p>
  <p>Кроме того объект может передаваться в качестве параметра в функцию:</p>
  <pre class="brush:js;">
  function createUser(pName, pAge) {
    return {
      name: pName,
      age: pAge,
      displayInfo: function() {
        document.write("Имя: " + this.name + " возраст: " + this.age + "&lt;br/&gt;");
      },
      driveCar: function(car){
        document.write(this.name + " ведет машину " + car.name + "&lt;br/&gt;");
      }
    };
  };
  
  function createCar(mName, mYear){
    return{
      name: mName,
      year: mYear
    };
  };
  var tom = createUser("Том", 26);
  tom.displayInfo();
  var bently = createCar("Бентли", 2004);
  tom.driveCar(bently);
  </pre>
  <p>Здесь используются две функции для создания пользователей и объекта машины. Метод <code>driveCar()</code> объекта user в качестве параметра принимает 
  объект car.</p>
  <p>В итоге браузер нам выведет:</p>
  <pre class="browser">
  Имя: Том возраст: 26
  Том ведет машину Бентли
  </pre>`;
}

//=====================================================================================
function less35(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Конструкторы объектов</h2><div class="date">Последнее обновление: 27.03.2018</div>
  
    <p>Кроме создания новых объектов JavaScript предоставляет нам возможность создавать новые типы объектов с помощью <span class="b">конструкторов</span>. Так, одним из способов создания объекта 
  является применение конструктора типа Object:</p>
  <pre class="brush:js;">var tom = new Object();</pre>
  <p>После создания переменной tom она будет вести себя как объект типа Object.</p>
  <p>Конструктор позволяет определить новый тип объекта. Тип представляет собой абстрактное описание или шаблон объекта. Можно еще провести следующую аналогию. У нас у всех 
  есть некоторое представление о человеке - наличие двух рук, двух ног, головы, пищеварительной, нервной системы и т.д. 
  Есть некоторый шаблон - этот шаблон можно назвать типом. Реально же существующий человек является объектом этого типа.</p>
  <p>Определение типа может состоять из функции конструктора, методов и свойств.</p>
  <p>Для начала определим конструктор:</p>
  <pre class="brush:js;">
  function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + this.age + "&lt;br/&gt;");
    };
  }
  </pre>
  <p>Конструктор - это обычная функция за тем исключением, что в ней мы можем установить свойства и методы. Для установки свойств и методов используется ключевое слово <span class="bb">this</span>:</p>
  <pre class="brush:js;">
  this.name = pName;
  </pre>
  <p>В данном случае устанавливаются два свойства name и age и один метод displayInfo.</p>
  <p>Как правило, названия конструкторы в отличие от названий обычных функций начинаются с большой буквы.</p>
  <p>После этого в программе мы можем определить объект типа User и использовать его свойства и методы:</p>
  <pre class="brush:js;">
  var tom = new User("Том", 26);
  console.log(tom.name); // Том
  tom.displayInfo();
  </pre>
  <p>Чтобы вызвать конструктор, то есть создать объект типа User, надо использовать ключевое слово <span class="b">new</span>.</p>
  <p>Подобным образом мы можем определить и другие типы и использовать их вместе:</p>
  <pre class="brush:js;">
  // конструктор типа Car
  function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
      document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "&lt;br/&gt;");
    };
  };
  // конструктор типа User
  function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
      document.write(this.name + " ведет машину " + car.name + "&lt;br/&gt;");
    };
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + this.age + "&lt;br/&gt;");
    };
  };
  
  var tom = new User("Том", 26);
  tom.displayInfo();
  var bently = new Car("Бентли", 2004);
  tom.driveCar(bently);
  </pre>
  <h3>Оператор instanceof</h3>
  <p>Оператор <span class="b">instanceof</span> позволяет проверить, с помощью какого конструктора создан объект. Если объект создан с помощью определенного конструктора, то оператор возвращает true:</p>
  <pre class="brush:js;">
  var tom = new User("Том", 26);
  
  var isUser = tom instanceof User;
  var isCar = tom instanceof Car;
  console.log(isUser); 	// true
  console.log(isCar); 	// false
  </pre>`;
}

//=====================================================================================
function less36(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Расширение объектов. Prototype</h2><div class="date">Последнее обновление: 1.11.2015</div>

    <p>Кроме непосредственного определения свойств и методов в конструкторе мы также можем использовать свойство <span class="bb">prototype</span>. 
  Каждая функция имеет свойство <span class="bb">prototype</span>, представляющее прототип функции. То есть свойство <code>User.prototype</code> 
  представляет прототип объектов User. И любые свойства и методы, которые будут определены в <code>User.prototype</code>, будут общими для всех объектов User.</p> 
  <p>Например, после определения объекта User нам потребовалось добавить к нему метод и свойство:</p>
  <pre class="brush:js;">
  function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + this.age + "&lt;br/&gt;");
    };
  };
  
  User.prototype.hello = function(){
    document.write(this.name + " говорит: 'Привет!'&lt;br/&gt;");
  };
  User.prototype.maxAge = 110;
  
  var tom = new User("Том", 26);
  tom.hello();
  var john = new User("Джон", 28);
  john.hello();
  console.log(tom.maxAge); // 110
  console.log(john.maxAge); // 110
  </pre>
  <p>Здесь добавлены метод <code>hello</code> и свойство <code>maxAge</code>, и каждый объект User сможет их использовать. Но важно заметить, что 
  значение свойства <code>maxAge</code> будет одно и то же для всех объектов, это разделяемое статическое свойство. В отличие, скажем, от свойства 
  <code>this.name</code>, которое хранит значение для определенного объекта.</p>
  <p>В то же время мы можем определить в объекте свойство, которое будет назваться также, как и свойство прототипа. В этом случае собственное свойство 
  объекта будет иметь приоритет перед свойством прототипа:</p>
  <pre class="brush:js;">
  User.prototype.maxAge = 110;
  var tom = new User("Том", 26);
  var john = new User("Джон", 28);
  tom.maxAge = 99;
  console.log(tom.maxAge); // 99
  console.log(john.maxAge); // 110
  </pre>
  <p>И при обращении к свойству maxAge javascript сначала ищет это свойство среди свойств объекта, и если оно не было найдено, тогда обращается к свойствам прототипа. То же самое касается и методов.</p>
  `;
}

//=====================================================================================
function less37(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Инкапсуляция</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Инкапсуляция является одним из ключевых понятий объектно-ориентированного программирования и представляет сокрытие состояния объекта от прямого доступа извне. 
  По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы.</p>
  <pre class="brush:js;">
  function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + this.age);
    };
  };
  var tom = new User("Том", 26);
  tom.name=34;
  console.log(tom.name);
  </pre>
  <p>Но мы можем их скрыть от доступа извне, сделав свойства локальными переменными:</p>
  <pre class="brush:js;">
  function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + _age + "<br/>");
    };
    this.getAge = function() {
      return _age;
    }
    this.setAge = function(age) {
      if(typeof age === "number" &amp;&amp; age &gt;0 &amp;&amp; age&lt;110){
        _age = age;
      } else {
        console.log("Недопустимое значение");
      }
    }
  }
  
  var tom = new User("Том", 26);
  console.log(tom._age); // undefined - _age - локальная переменная
  console.log(tom.getAge()); // 26
  tom.setAge(32);
  console.log(tom.getAge()); // 32
  tom.setAge("54"); // Недопустимое значение
  </pre>
  <p>В конструкторе User объявляется локальная переменная <code>_age</code> вместо свойства <code>age</code>. Как правило, названия локальных переменных в 
  конструкторах начинаются со знака подчеркивания.</p>
  <p>Для того, чтобы работать с возрастом пользователя извне, определяются два метода. Метод <code>getAge()</code> предназначен для получения значения переменной 
  _age. Этот метод еще называется геттер (getter). Второй метод - <code>setAge</code>, который еще называется сеттер (setter), предназначен для установки 
  значения переменной _age.</p>
  <p>Плюсом такого подхода является то, что мы имеем больший контроль над доступом к значению _age. Например, мы можем проверить какие-то сопутствующие условия, 
  как в данном случае проверяются тип значение (он должен представлять число), само значение (возраст не может быть меньше 0).</p>
    `;
}

//=====================================================================================
function less38(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Функция как объект. Методы call и apply</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>В JavaScript функция тоже является объектом - объектом <span class="bb">Function</span> и тоже имеет прототип, свойства, методы. Все функции, которые используются в программе, 
  являются объектами Function и имеют все его свойства и методы.</p>
  <p>Например, мы можем создать функцию с помощью конструктора Function:</p>
  <pre class="brush:js;">
  var square = new Function('n', 'return n * n;');
  console.log(square(5));
  </pre>
  <p>В конструктор Function может передаваться ряд параметров. Последний параметр представляет собой само тело функции в виде строки. Фактически 
  строка содержит код javascript. Предыдущие аргументы содержат названия параметров. В данном случае определяется функция возведения числа в квадрат, которая имеет один 
  параметр n.</p>
  <p>Среди свойств объекта Function можно выделить следующие:</p>
  <ul>
  <li><p><span class="bb">arguments</span>: массив аргументов, передаваемых в функцию</p></li>
  <li><p><span class="bb">length</span>: определяет количество аргументов, которые ожидает функция</p></li>
  <li><p><span class="bb">caller</span>: определяет функцию, вызвавшую текущую выполняющуюся функцию</p></li>
  <li><p><span class="bb">name</span>: имя функции</p></li>
  <li><p><span class="bb">prototype</span>: прототип функции</p></li>
  </ul>
  <p>С помощью прототипа мы можем определить дополнительные свойства:</p>
  <pre class="brush:js;">
  function display(){
    
    console.log("привет мир");
  }
  Function.prototype.program ="Hello";
  
  console.log(display.program); // Hello
  </pre>
  <p>Среди методов надо отметить методы <span class="bb">call()</span> и <span class="bb">apply()</span>.</p>
  <p>Метод <span class="bb">call()</span> вызывает функцию с указанным значением this и аргументами:</p>
  <pre class="brush:js;">
  function add(x, y){
    
    return x + y;
  }
  var result = add.call(this, 3, 8);
  
  console.log(result); // 11
  </pre>
  <p><code>this</code> указывает на объект, для которого вызывается функция - в данном случае это глобальный объект window. После this передаются значения для параметров.</p>
  <p>При передаче объекта через первый параметр, мы можем ссылаться на него через ключевое слово <code>this</code>:</p>
  <pre class="brush:js;">
  function User (name, age) {
    this.name = name;
    this.age = age;
  }
  var tom = new User("Том", 26);
  function display(){
    console.log("Ваше имя: " + this.name);
  }
  display.call(tom); // Ваше имя: Том
  </pre>
  <p>В данном случае передается только одно значение, поскольку функция display не принимает параметров. То есть функция будет вызываться для объекта tom.</p>
  <p>Если нам не важен объект, для которого вызывается функция, то можно передать значение null:</p>
  <pre class="brush:js;">
  function add(x, y){
    
    return x + y;
  }
  var result = add.call(null, 3, 8);
  
  console.log(result); // 11
  </pre>
  <p>На метод <code>call()</code> похож метод <span class="bb">apply()</span>, который также вызывает функцию и в качестве первого параметра также 
  получает объект, для которого функция вызывается. Только теперь в качестве второго параметра передается массив аргументов:</p>
  <pre class="brush:js;">
  function add(x, y){
    
    return x + y;
  }
  var result = add.apply(null, [3, 8]);
  
  console.log(result); // 11
  </pre>`;
}

//=====================================================================================
function less39(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Наследование</h2><div class="date">Последнее обновление: 1.11.2015</div>  
    <p>JavaScript поддерживает наследование, то позволяет нам при создании новых типов объектов при необходимости унаследовать их функционал от уже существующих. Например, 
  у нас может быть объект User, представляющий отдельного пользователя. И также может быть объект Employee, который представляет работника. Но 
  работник также может являться пользователем и поэтому должен иметь все его свойства и методы. Например:</p>
  <pre class="brush:js;">
  // конструктор пользователя
  function User (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){document.write(this.name + " идет &lt;br/&gt;");}
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + this.age + "&lt;br/&gt;");
    };
  }
  User.prototype.maxage = 110;
  
  // конструктор работника
  function Employee(name, age, comp){
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
      document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "&lt;br/&gt;");
    };
  }
  Employee.prototype = Object.create(User.prototype);
  
  var tom = new User("Том", 26);
  var bill = new Employee("Билл", 32, "Google");
  tom.go();
  bill.go();
  tom.displayInfo(); 
  bill.displayInfo(); 
  console.log(bill.maxage);
  </pre>
  <p>Здесь в начале определяет конструктор User и к его прототипу добавляется свойство <code>maxage</code>. Затем определяется тип Employee.</p>
  <p>В конструкторе Employee происходит обращение к конструктору User с помощью вызова:</p>
  <pre class="brush:js;">User.call(this, name, age);</pre>
  <p>Передача первого параметра позволяет вызвать функцию конструктора User для объекта, создаваемого конструктором Employee. Благодаря этому 
  все свойства и методы, определенные в конструкторе User, также переходят на объект Employee.</p>
  <p>Кроме того, необходимо унаследовать также и прототип User. Для этого служит вызов:</p>
  <pre class="brush:js;">Employee.prototype = Object.create(User.prototype);</pre>
  <p>Метод <code>Object.create()</code> позволяет создать объект прототипа User, который затем присваивается прототипу Employee. При этом при необходимости в прототипе 
  Employee мы также можем определить дополнительные свойства и методы.</p>
  <p>При наследовании мы можем переопределять наследуемый функционал. Например, Employee переопределяет метод <code>displayInfo()</code>, унаследованный от User, 
  чтобы включить в вывод этого метода новое свойство <code>company</code>.</p>
  <p>В итоге браузер предоставит следующий вывод:</p>
  <img src="pics/inheritance.png" alt="Наследование в JavaScript" />
  `;
}

//=====================================================================================
function less310(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Ключевое слово this</h2><div class="date">Последнее обновление: 10.09.2021</div>
  
    <p>Поведение ключевого слова <span class="b">this</span> зависит от контекста, в котором оно используется, и от того, в каком режиме оно используется - строгом или нестрогом.</p>
  <h3>Глобальный контекст и объект globalThis</h3>
  <p>В глобальном контексте <code>this</code> ссылается на глобальный объект. Что такое "глобальный объект" в JavaScript? Это зависит от среды, в которой выполняется код. 
  Так, в веб-браузере <code>this</code> представляет объект <span class="b">window</span> - объект, который представляет окно браузера. 
  В среде Node.js <code>this</code> представляет объект <span class="b">global</span>. А для веб-воркеров <code>this</code> представляет объект 
  <span class="b">self</span></p>
  <p>Например, в веб-браузере при выполнении следующего кода:</p>
  <pre class="brush:js;">console.log(this);</pre>
  <p>мы получим консольный вывод вроде следующего</p>
  <pre class="browser">Window {window: Window, self: Window, document: document, name: "", location: Location, …}</pre>
  <p>В стандарт ES2020 было добавлено определение объекта <span class="b">globalThis</span>, который позволяет ссылаться на глобальный конекст вне зависимости, 
  в какой среде и в какой ситуации выполняется код:</p>
  <pre class="brush:js;">console.log(globalThis);</pre>
  <h3>Контекст функции</h3>
  <p>В пределах функции this ссылается на внешний контекст. Для функций, определенных в глобальном контексте, - это объект <span class="b">globalThis</span>. 
  Например:</p>
  <pre class="brush:js;">
  function foo(){
    var bar = "bar2";
    console.log(this.bar);
  }
  
  var bar = "bar1";
  
  foo();	// bar1
  </pre>
  <p>Если бы мы не использовали бы  <code>this</code>, то обращение шло бы к локальной переменной, определенной внутри функции.</p>
  <pre class="brush:js;">
  function foo(){
    var bar = "bar2";
    console.log(bar);
  }
  
  var bar = "bar1";
  
  foo();	// bar2
  </pre>
  <p>Но если бы мы использовали строгий режим (strict mode), то this в этом случае имело бы значение <code>undefined</code>:</p>
  <pre class="brush:js;">
  "use strict";
  function foo(){
    var bar = "bar2";
    console.log(this.bar);
  }
  
  var bar = "bar1";
  
  foo();	// ошибка - this - undefined
  </pre>
  <h3>Контекст объекта</h3>
  <p>В контексте объекта, в том числе в его методах, ключевое слово <code>this</code> ссылается на этот же объект:</p>
  <pre class="brush:js;">
  var o = {
    bar: "bar3",
    foo: function(){
      console.log(this.bar);
    }
  }
  var bar = "bar1";
  o.foo();	// bar3
  </pre>
  <h3>Примеры</h3>
  <p>Рассмотрим более сложный пример:</p>
  <pre class="brush:js;">
  function foo(){
    var bar = "bar2";
    console.log(this.bar);
  }
  
  var o3 = {bar:"bar3", foo: foo};
  var o4 = {bar:"bar4", foo: foo};
  
  var bar = "bar1";
  
  foo();	// bar1
  o3.foo();	// bar3
  o4.foo();	// bar4
  </pre>
  <p>Здесь определена глобальная переменная bar. И также в функции foo определена локальная переменная bar. Значение какой переменной будет выводиться в функции 
  foo? Функция foo выводит значение глобальной переменной, так как данный скрипт запускается в нестрогом режиме, а значит ключеое слово this в функции foo 
  ссылается на внешний контекст.</p>
  <p>Иначе дело обстоит с объектами. Они определяют свой собственный контекст, в котором существует свое свойство bar. И при вызове метода foo внешним контекстом по отношению 
  к функции будет контекст объектов o3 и o4.</p>
  <p>Подобное поведение может привести к некоторому непонимаю в отдельных случаях. Так, рассмотрим другую ситуацию:</p>
  <pre class="brush:js;">
  var o1 = {
    bar: "bar1",
    foo: function(){
      console.log(this.bar);
    }
  }
  var o2 = {bar: "bar2", foo: o1.foo};
  
  var bar = "bar3";
  var foo = o1.foo;
  
  o1.foo();	// bar1
  o2.foo();	// bar2
  foo();		// bar3
  </pre>
  <p>Несмотря на то, что объект o2 использует метод foo из объекта o1, тем не менее функция <code>o1.foo</code> также будет искать значение для <code>this.bar</code> 
  во внешнем котексте, то есть в контексте объекта o2. А в объекте o2 это значение равно <code>bar: "bar2"</code>.</p>
  <p>То же самое с глобальной переменной foo, которая ссылается на ту же функцию, что и метод o1.foo. В этом случае также будет происходить поиск значения для 
  <code>this.bar</code> во внешним контексте, то есть в глобальном контексте, где определена переменная <code>var bar = "bar3"</code>.</p>
  <p>Однако если мы вызываем функцию из другой функции, вызываемая функция также будет использовать внешний контекст:</p>
  <pre class="brush:js;">
  var bar = "bar2";
  
  function daz(){
    var bar = "bar5";
    function maz(){
      
      console.log(this.bar);
    }
    maz();
  }
  daz();	// bar2
  </pre>
  <p>Здесь функция daz в качестве <code>this.bar</code> использует значение переменной bar из внешнего контекста, то есть значение глобальной переменной bar. 
  Функция maz также в качестве <code>this.bar</code> использует значение переменной bar из внешнего контекста, а это значение <code>this.bar</code> из внешней функции daz, 
  которое в свою очередь представляет значение глобальной переменной bar. Поэтому в итоге консоль выведет "bar2", а не "bar5".</p>
  <h3>Явная привязка</h3>
  <p>С помощью методов <code>call()</code> и <code>apply()</code> можно задать явную привязку функции к определенному контексту:</p>
  <pre class="brush:js;">
  function foo(){
    console.log(this.bar);
  }
  
  var o3 = {bar: "bar3"}
  var bar = "bar1";
  foo();	// bar1
  foo.apply(o3);	// bar3
  // или
  // foo.call(o3);
  </pre>
  <p>Во втором случае функция foo привязывается к объекту o3, который и определяет ее контекст. Поэтому во втором случае консоль выведет "bar3".</p>
  <h3>Метод bind</h3>
  <p>Метод <code>f.bind(o)</code> позволяет создать новую функцию с тем же телом и областью видимости, что и функция f, но с привязкой к объекту o:</p>
  <pre class="brush:js;">
  function foo(){
    console.log(this.bar);
  }
  
  var o3 = {bar: "bar3"}
  var bar = "bar1";
  foo();	// bar1
  var func = foo.bind(o3);
  func();	// bar3
  </pre>
  <h3>this и стрелочные функции</h3>
  <p>В стрелочных функциях объект, передаваемый через <span class="b">this</span>, берется из родительского контекста, в котором определена стрелочная функция. Рассмотрим следующий пример:</p>
  <pre class="brush:js;">
  const person = {
    name: "Tom",
    say:()=&gt; console.log(\`Меня зовут \${this.name}\`)
  }
  person.say();	// Меня зовут 
  </pre>
  <p>Здесь стрелочная функция <code>say()</code> обращается к некому свойству <code>this.name</code>, но что здесь представляет <code>this</code>? Для внешнего контекста, 
  в котором определена стрелочная функция - то есть для контекста объекта person <code>this</code> представляет глобальный объект (объект окна браузера). Однако глобальной переменной <code>name</code> не определено, 
  поэтому на консоль будет выведено:</p>
  <div class="console">
  <pre class="consoletext">
  Меня зовут
  </pre>
  </div>
  <p>Теперь немного изменим пример:</p>
  <pre class="brush:js;">
  const person = {
    name: "Tom",
    hello(){
      console.log("Привет");
      let say = ()=&gt; console.log(\`Меня зовут \${this.name}\`);
      say();
    }
  }
  person.hello();
  </pre>
  <p>Теперь стрелочная функция определена в методе <code>hello()</code>. <code>this</code> для этого метода представляет текущий объект person, где определен данный метод. 
  Поэтому и в стрелочной функции <code>this</code> будет представлять объект person, а <code>this.name</code> - свойство name этого объекта. Поэтому при выполнении программы мы 
  получим:</p>
  <div class="console">
  <pre class="consoletext">
  Привет
  Меня зовут Tom
  </pre>
  </div>
  <p>Несмотря на то что, стрелочные функции могут добавить забот при работе this, в то же время они могут решить ряд проблем. Так, при работе с несколькими контекстами мы вынуждены учитывать, в каком контексте определяется переменная. Например, возьмем следующий код:</p>
  <pre class="brush:js;">
  const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
      this.courses.forEach(function(course){
        console.log(this.title, course);
      })
    }
  }
  school.printCourses();
  </pre>
  <p>Функция printCourses проходит по всем курсам из массива и при их выводе предваряет их значением свойства title. 
  Однако на консоли при запуске программы мы увидим следующее:</p>
  <pre class="browser">
  undefined "JavaScript"
  undefined "TypeScript"
  undefined "Java"
  undefined "Go"
  </pre>
  <p>Мы видим, что значение <code>this.title</code> не определено, так как this как контекст объекта замещается глобальным контекстом. 
  В этом случае нам надо передать подобное значение this.title или весь контекст объекта.</p>
  <pre class="brush:js;">
  const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
      const that = this;
      this.courses.forEach(function(course){
        console.log(that.title, course);
      })
    }
  }
  school.printCourses();
  </pre>
  <p>Стрелочные функции также позволяют решить данную проблему:</p>
  <pre class="brush:js;">
  const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
      this.courses.forEach((course)=&gt;console.log(this.title, course))
    }
  }
  school.printCourses();
  </pre>
  <p>Контекстом для стрелочной функции в данном случае будет выступать контекст объекта school. Соответственно, нам недо определять дополнительные переменые для передачи данных в функцию.</p>
  `;
}

//=====================================================================================
function less311(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Деструктуризация</h2><div class="date">Последнее обновление: 06.09.2021</div>
  
    <p>Деструктуризация (destructuring) позволяет извлечь из объекта отдельные значения в переменные или константы:</p>
  <pre class="brush:js;">
  const user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
  };
  let {name, email} = user;
  console.log(name);		// Tom
  console.log(email);		// tom@gmail.com
  </pre>
  <p>При деструктуризации объекта переменные помещаются в фигурные скобки и им присваивается объект. Сопоставление между свойствами объекта и 
  переменными/константами идет по имени.</p>
  <p>Мы можем указать, что мы хотим получить значения свойств объекта в переменные/константы с другим именем:</p>
  <pre class="brush:js;">
  const user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
  };
  const {name: userName, email: mailAddress} = user;
  console.log(userName);		// Tom
  console.log(mailAddress);	// tom@gmail.com
  </pre>
  <p>В данном случае свойство name сопоставляется с переменной userName, а поле email - с переменной mailAddress.</p>
  <p>Также можно задать для переменных/констант значения по умолчанию, если в объекте вдруг не окажется соответствующих свойств:</p>
  <pre class="brush:js;">
  const user = {
      name: "Tom",
      age: 24,
  };
  const {name  = "Sam", email: mailAddress = "sam@gmail.com"} = user;
  console.log(name);      		// Tom
  console.log(mailAddress);       // sam@gmail.com
  </pre>
  <p>Если переменная/константа при деструктуризации сопоставляется со свойством, который представляет сложный объект, то после деструктуризации эта переменная/константа 
  также будет представлять сложный объект:</p>
  <pre class="brush:js;">
  let user = {
      name: "Tom",
      age: 24,
    account: {
      login: "tom555",
      password: "qwerty"
    }
  };
  const {account} = user;
  console.log(account.login);			// tom555
  console.log(account.password);		// qwerty
  </pre>
  <p>Но если нам мы хотим получить отдельные значения из вложенного сложного объекта, как в примере выше объект account внутри объекта user, то нам необязательно 
  получать весь этот объект - мы также можем для его свойств предоставить отдельные переменные/константы:</p>
  <pre class="brush:js;">
  const user = {
      name: "Tom",
      age: 24,
      account: {
          login: "tom555",
          password: "qwerty"
      }
  };
  let {name, account: {login}} =  user;
  console.log(name);		// Tom
  console.log(login);		// tom555
  </pre>
  <p>Здесь мы получаем в переменную <code>login</code> значение свойства <code>user.account.login</code>.</p>
  <h4>Получение оставшихся свойств объекта с помощью rest-оператора</h4>
  <p><span class="b">rest-оператор</span> или оператор <span class="b">...</span> позволяет получить оставшиеся свойства объекта, которые не сооставлены с переменными/константами, 
  в отдельную переменную/константу:</p>
  <pre class="brush:js;">
  const tom = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
  };
  const {name, age, ...contacts} = tom;
  console.log(name);		// Tom
  console.log(age);		// 24
  console.log(contacts);	// {phone: "+367438787", email: "tom@gmail.com"}
  </pre>
  <p>В данном случае мы раскладываем объект <code>tom</code> на три константы: <code>name</code>, <code>age</code> и <code>contacts</code>. 
  Константы name и age сопоставляются со свойствами объекта <code>tom</code> по имени. А константа <code>contacts</code> получает все оставшиеся несопоставленные 
  свойства объекта. Однако чтобы их получить, перед названием константы указыватся оператор <span class="b">...</span>: <code>...contacts</code>. То есть 
  в данном случае константа <code>contacts</code> будет предлагать объект, который будет содержать свойства email и phone объекта tom.</p>
  <p>Стоит отметить, что переменная/константа, которая получает все оставшиеся свойства объекта, всегда будет представлять объект, даже если она получит только одно свойства из объекта.</p>
  <h3>Деструктуризация массивов</h3>
  <p>Также можно разложить массивы:</p>
  <pre class="brush:js;">
  let users = ["Tom", "Sam", "Bob"];
  let [a, b, c] = users;
  
  console.log(a);		// Tom
  console.log(b);		// Sam
  console.log(c);		// Bob
  </pre>
  <p>При деструктуризации массива переменные помещаются в квадратные скобки и последовательно получают значения элементов массива.</p>
  <p>Если переменных/констант меньше, чем элементов массива, то оставшиеся элементы массива просто опускаются.</p>
  <pre class="brush:js;">
  let users = ["Tom", "Sam", "Bob"];
  let [a, b] = users;
   
  console.log(a);     // Tom
  console.log(b);     // Sam
  </pre>
  <p>Если переменных/констант больше, чем элементов массива, то несопоставленные переменные/константы получают значение <code>undefined</code>:</p>
  <pre class="brush:js;">
  let users = ["Tom", "Sam", "Bob"];
  let [a, b, c, d] = users;
   
  console.log(a);     // Tom
  console.log(b);     // Sam
  console.log(c);     // Bob
  console.log(d);     // undefined
  </pre>
  <h4>Получение оствшихся элементов массива в другой массив</h4>
  <p>С помощью оператора <span class="b">...</span> можно получить все оставшиеся элементы массива в виде другого массива:</p>
  <pre class="brush:js;">
  let users = ["Tom", "Sam", "Bob", "Mike"];
  let [tom, ...others] = users;
   
  console.log(tom);		// Tom
  console.log(others);	// ["Sam", "Bob", "Mike"]
  </pre>
  <p>Здесь массив <code>others</code> будет содержать три последних элемента массива.</p>
  <h4>Пропуск элементов</h4>
  <p>При этом мы можем пропустить ряд элементов массива, оставив вместо имен переменных пропуски:</p>
  <pre class="brush:js;">
  let users = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
  let [first,,,,fifth] = users;
  
  console.log(first);		// Tom
  console.log(fifth);		// Alice
  </pre>
  <p>Выражение <code>first,,,,fifth</code> указывает, что мы хотим получить первый элемент массива в переменную first, затем пропустить три элемента и 
  получить пятый элемент в переменную fifth.</p>
  <p>Подобным образом можно получить, например, второй и четвертый элементы:</p>
  <pre class="brush:js;">
  let users = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
  let [,second,,forth] = users;
  
  console.log(second);		// Sam
  console.log(forth);			// Ann
  </pre>
  <h3>Деструктуризация объектов из массивов</h3>
  <p>Можно совместить получение данных из массива и объекта:</p>
  <pre class="brush:js;">
  let people = [
    {name: "Tom", age: 34},
    {name: "Bob", age: 23},
    {name: "Sam", age: 32}
  ];
  let [,{name}] = people;
  
  console.log(name);		// Bob
  </pre>
  <p>В данном случае получаем значение свойства name второго объекта в массиве.</p>
  <h3>Деструктуризация параметров</h3>
  <p>Если в функцию в качестве параметра передается массив или объект, то его также можно подобным образом разложить на отдельные значения:</p>
  <pre class="brush:js;">
  function display({name:userName, age:userAge}){
    console.log(userName, userAge);
  }
  function sum([a, b, c]){
    const result = a + b + c;
    console.log(result);
  }
  let user = {name:"Alice", age:33, email: "alice@gmail.com"};
  
  let numbers = [3, 5, 7, 8];
  
  display(user);	// Alice 33
  sum(numbers);	// 15
  </pre>
  <h3>Обмен значениями</h3>
  <p>Благодаря деструктуризации очень просто стало проводить обмен значениями между двумя переменными:</p>
  <pre class="brush:js;">
  let first = "Tom";
  let second = "Bob";
  [first, second] = [second, first];
   
  console.log(first);		// Bob
  console.log(second);	// Tom
  </pre>
  <p>Что упрощает решение ряда задач. Например, используем деструктуризацию для простейшей сортировки массива:</p>
  <pre class="brush:js;">
  let nums = [9, 3, 5, 2, 1, 4, 8, 6];
  for(let i = 0; i &lt; nums.length; i++)
    for(let j = 0; j &lt; nums.length; j++)
      if (nums[i] &lt; nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];
      
  console.log(nums);	// [1, 2, 3, 4, 5, 6, 8, 9]
  </pre>`;
}

//=====================================================================================
function less312(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Оператор ?.</h2><div class="date">Последнее обновление: 09.09.2021</div>
  
    <p>Оператор <span class="b">?.</span> или <code>optional chaning</code>-оператор позволяет проверить объект и его свойства и методы на null и undefined, и если объект или его свойства/методы определены, то обратиться к 
  его свойствам или методам:</p>
  <pre class="brush:js;">
  let tom = null;
  let bob = {name: "Bob"};
  
  function printName(person){
    console.log(person.name);
  }
  printName(tom);	// Uncaught TypeError: Cannot read properties of null (reading "name")
  printName(bob);
  </pre>
  <p>В данном случае переменная <code>tom</code> равна <code>null</code>, соответственно у ней нет свойства <code>name</code>. Соответственно при передаче этого объекта в функцию 
  <code>printName</code> мы получим ошибку. В этом случае мы можем перед обращением к объекту проверять его на null и undefined:</p>
  <pre class="brush:js;">
  let tom = null;
  let bob = {name: "Bob"};
  
  function printName(person){
    if(person !==null && person !==undefined) console.log(person.name);
  }
  printName(tom);	
  printName(bob);	// Bob
  </pre>
  <p>Также мы можем сократить проверку:</p>
  <pre class="brush:js;">
  function printName(person){
    if(person) console.log(person.name);
  }
  </pre>
  <p>Если person равен null или undefined, то <code>if(person)</code> возвратит false.</p>
  <p>Однако оператор <span class="b">?.</span> предлагает более элегантный способ решения:</p>
  <pre class="brush:js;">
  let tom = null;
  let bob = {name: "Bob"};
  
  function printName(person){
    console.log(person?.name);
  }
  printName(tom);	// undefined
  printName(bob);	// Bob
  </pre>
  <p>После названия объекта указывается оператор <code>?.</code> - если значение не равно <code>null</code> и <code>undefined</code>, то идет обращение к свойству/методу, которые указаны после точки. 
  Если же значени равно null/undefined, то обращения к свойству/методу не происходит. И на консоли мы увидим <code>undefined</code>.</p>
  <p>Данный оператор можно использовать перед обращением как к свойствам, так и к методам объекта:</p>
  <pre class="brush:js;">
  let tom = undefined;
  let bob = {
    name: "Bob", 
    sayHi(){
      console.log(\`Hi! I am \${this.name}\`);
    }
  };
  
  console.log(tom?.name);	// undefined
  console.log(bob?.name);	// Bob
  tom?.sayHi();			// не выполняется
  bob?.sayHi();			// Hi! I am Bob
  </pre>
  <p>В данном случае обращение к свойству <code>name</code> и методу <code>sayHi()</code> происходит только в том случае, если объекты tom и bob не равны null/undefined.</p>
  <p>Более того далее по цепочке вызывов проверять наличие свойства или метода в объекте.</p>
  <pre class="brush:js;">
  obj.val?.prop		// проверка свойства
  obj.arr?.[index]	// провера массива
  obj.func?.(args)	// проверка функции
  </pre>
  <h4>Проверка свойства</h4>
  <p>Объект может быть определен, однако не иметь какого-то свойства:</p>
  <pre class="brush:js;">
  let tom = { name: "Tom"};
  let bob = {
    name: "Bob", 
    company: {
      title: "Microsoft"
    }
  };
  
  console.log(tom.company?.title);	// undefined
  console.log(bob.company?.title);	// Microsoft
  </pre>
  <p>Подобным образом мы можем обращаться к свойствам объекта с помощью синтаксиса массивов:</p>
  <pre class="brush:js;">
  let tom = { name: "Tom"};
  let bob = {
    name: "Bob", 
    company: {
      title: "Microsoft"
    }
  };
  
  console.log(tom.company?.["title"]);	// undefined
  console.log(bob.company?.["title"]);	// Microsoft
  </pre>
  <h4>Проверка свойства-массива</h4>
  <p>Аналогично мы можем проверять наличие свойства-массива перед обращением к его элементам:</p>
  <pre class="brush:js;">
  let tom = { name: "Tom"};
  let bob = {
    name: "Bob", 
    languages: ["javascript", "typescript"]
  };
  
  console.log(tom.languages?.[0]);	// undefined
  console.log(bob.languages?.[0]);	// javascript
  </pre>
  <h4>Проверка метода</h4>
  <p>Объект также может не иметь вызываемого у него метода. Если метод не определен, то при обращении к неопределенному методу мы столкнемся с ошибкой, 
  и в этом случае также можно проверять наличие метода:</p>
  <pre class="brush:js;">
  let tom = { name: "Tom"};
  let bob = {
    name: "Bob", 
    say(words){
      console.log(words);
    }
  };
  
  console.log(tom.say?.("my name is Tom"));	// undefined
  console.log(bob.say?.("my name is Bob"));	// my name is Bob
  </pre>
  <h3>Цепочка проверок</h3>
  <p>С помощью оператора <span class="b">?.</span> можно создавать цепочки проверок, последовательно проверяя, представляет ли значение <code>null/undefined</code>:</p>
  <pre class="brush:js;">
  let sam = {name: "Sam"};
  let tom = { 
    name: "Tom", 
    company: { title: "Google"}
  };
  let bob = {
    name: "Bob", 
    company: {
      title: "Microsoft",
      print(){
        console.log(\`Компания \${this.title}\`)
      }
    }
  };
  sam?.company?.print?.();	// не вызывается - нет свойства company
  tom?.company?.print?.();	// не вызывается - нет метода print
  bob?.company?.print?.();	// Компания Microsoft
  </pre>`;
}

//=====================================================================================
function less40(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>ООП. Классы</h1><h2>Классы</h2><div class="date">Последнее обновление: 19.08.2021</div>
  
    <p>С внедрением стандарта ES2015 (ES6) в JavaScript появился новый способ определения объектов - с помощью классов. Класс представляет описание объекта, его состояния и поведения, 
  а объект является конкретным воплощением или экземпляром класса.</p>
  <h3>Опредление класса</h3>
  <p>Для определения класса используется ключевое слово <span class="b">class</span>:</p>
  <pre class="brush:js;">
  class Person{ }
  </pre>
  <p>После слова <code>class</code> идет название класса (в данном случае класс называется Person), и затем в фигурных скобках определяется тело класса.</p>
  <p>Это наиболее расспространенный способ определения класса. Но есть и другие способы. Так, также можно определить анонимный класс и присвоить его 
  переменной или константе:</p>
  <pre class="brush:js;">
  const Person = class{}
  </pre>
  <p>В принципе мы можем создать и неанонимный класс и присвоить его переменной или константе:</p>
  <pre class="brush:js;">
  const User = class Person{}
  </pre>
  <h3>Создание объектов</h3>
  <p>Класс - это общее представление некоторых сущностей или объектов. Конкретным воплощением этого представления, класса является объект. 
  И после определения класса мы можем создать объекты класса с помощью конструктора:</p>
  <pre class="brush:js;">
  class Person{}
  
  const tom = new Person();
  const bob = new Person();
  </pre>
  <p>Для создания объекта с помощью конструктора сначала ставится ключевое слово <span class="b">new</span>. Затем собственно идет вызов конструктора - по сути 
  вызов функции по имени класса. По умолчанию классы имеют один конструктор без параметров. Поэтому в данном случае при вызове конструктора в него не передается 
  никаких аргументов.</p>
  <p>Стоит отметить, что в отличие от функций, чтобы использовать класс, его надо сначала определить. Например, в следующем коде мы получим ошибку, так как пытаемся использовать класс до его определения:</p>
  <pre class="brush:js;">
  const tom = new Person();	// ! Ошибка - Uncaught ReferenceError: Cannot access 'Person' before initialization
  
  class Person{}
  </pre>
  <p>Если определение класса присвоено переменной или константе, то мы можем использовать имя этой переменной/константы для создания объектов класса:</p>
  <pre class="brush:js;">
  const User = class Person{}
  const tom = new User();
  console.log(tom);
  </pre>
  <p>Выше в коде несмотря на то, что мы используем вызов <code>new User()</code>, в реальности создаваемый объект будет представлять класс Person.</p>
  <p>Пример создания объекта анонимного класса:</p>
  <pre class="brush:js;">
  const Person = class{}
  const tom = new Person();
  console.log(tom);
  </pre>
  <h3>Поля и свойства класса</h3>
  <p>Для хранения данных или состояния объекта в классе используются поля и свойства.</p>
  <p>Итак, выше был определен класс Person, который представлял человека. У человека есть отличительных признаков, например, имя и возраст. Определим 
  в классе Person поля для хранения этих данных:</p>
  <pre class="brush:js;">
  class Person{
    name;
    age;
  }
  const tom = new Person();
  tom.name = "Tom";
  tom.age = 37;
  console.log(tom.name);	// Tom
  console.log(tom.age);	// 37
  </pre>
  <p>Определение поля фактически просто представляет его название:</p>
  <pre class="brush:js;">
  name;
  age;
  </pre>
  <p>Так, здесь определено поле <code>name</code> для хранения имени человека, и поле <code>age</code> для хранения возраста человека.</p>
  <p>После создания объекта класса мы можем обратиться к этим полям. Для этого после имени объекта через точку указывается имя поля:</p>
  <pre class="brush:js;">
  tom.name = "Tom";		// установим значение поля
  console.log(tom.name);	// получим значение свойства
  </pre>
  <p>В примере выше поля класса также можно назвать <span class="b">свойствами</span>. 
  По сути свойства представляют доступные извне или публичные поля класса. Дальше мы подробно разберем, 
  когда поля бывают непубличные, то есть недоступными извне. Но пока стоит понимать, что свойства и публичные поля - это одно и то же. И в примере выше поля name и age также 
  можно назвать свойствами.</p>
  <p>При необходимости мы можем присвоить полям некоторые начальные значения:</p>
  <pre class="brush:js;">
  class Person{
    name = "Unknown";
    age= 18;
  }
  const tom = new Person();
  console.log(tom.name);	// Unknown
  tom.name = "Tom";
  console.log(tom.name);	// Tom
  </pre>
  <h3>Поведение класса и его методы</h3>
  <p>Кроме хранения данных, которые определяют состояние объекта, класс может иметь методы, которые определяют поведение объекта - действия, которые выполняет 
  объект. Например, определим в классе Person пару методов:</p>
  <pre class="brush:js;">
  class Person{
    name;
    age;
    move(place){
      console.log(\`Go to \${place}\`);
    }
    eat(){
      console.log("Eat apples");
    }
  }
  const tom = new Person();
  tom.move("Hospital");	// Go to Hospital
  tom.move("Cinema");		// Go to Cinema
  tom.eat();				// Eat apples
  </pre>
  <p>Здесь определен метод <code>move()</code>, который представляет условное передвижение человека. В качестве параметра метод принимает место, к которому идет человек. 
  Второй метод - <code>eat()</code> - представляет условный процесс питания.</p>
  <h3>Обращение к полям и методам внутри класса. Слово this</h3>
  <p>Что если мы хотим в методах класса обратиться к полям класса или к другим его методам? В этом случае перед именем поля/свойства или метода указывается 
  ключевое слово <span class="b">this</span>, которое в данном случае указывает на текущий объект.</p>
  <p>Например, определим метод, который выводит информацию об объекте:</p>
  <pre class="brush:js;">
  class Person{
    name;
    age;
    print(){
      console.log(\`Name: \${this.name}  Age: \${this.age}\`);
    }
  }
  const tom = new Person();
  tom.name = "Tom";
  tom.age = 37;
  tom.print();	// Name: Tom  Age: 37
  
  const bob = new Person();
  bob.name = "Bob";
  bob.age = 41;
  bob.print();	// Name: Bob  Age: 41
  </pre>
  <h3>Определение конструктора</h3>
  <p>Для создания объекта класса используется конструктор:</p>
  <pre class="brush:js;">const bob = new Person();</pre>
  <p>Вызов конструктора по умолчанию, который есть в классах, фактически представляет вызов метода, который имеет то же название, что и класс, и возвращает объект этого класса.</p>
  <p>Но также мы можем определить в классах свои конструкторы:</p>
  <pre class="brush:js;">
  class Person{
    name;
    age;
    constructor(){
      console.log("Вызов конструктора");
    }
    print(){
      console.log(\`Name: \${this.name}  Age: \${this.age}\`);
    }
  }
  const tom = new Person();	// Вызов конструктора
  const bob = new Person();	// Вызов конструктора
  </pre>
  <p>Конструктор определяется с помощью метода с именем <span class="b">constructor</span>. По сути это обычный метод, который может принимать 
  параметры. В данном случае конструктор просто выводит на консоль некоторое сообщение. Соответственно при выполнении строки</p>
  <pre class="brush:js;">const tom = new Person();</pre>
  <p>Мы увидим в  консоли браузера соответствующее сообщение.</p>
  <p>Как правило, цель конструктора - инициализация объекта некоторыми начальными данными:</p>
  <pre class="brush:js;">
  class Person{
    name;
    age;
    constructor(personName, personAge){
      this.name = personName;
      this.age = personAge;
    }
    print(){
      console.log(\`Name: \${this.name}  Age: \${this.age}\`);
    }
  }
  const tom = new Person("Tom", 37);
  tom.print();	// Name: Tom  Age: 37
  const bob = new Person("Bob", 41); 
  bob.print()		// Name: Bob  Age: 41
  </pre>
  <p>Здесь конструктор принимает два параметра и передает их значения полям класса. Соответственно при создании объекта мы можем передать в конструктор соответствующие значения для этих параметров:</p>
  <pre class="brush:js;">const tom = new Person("Tom", 37);</pre>
  <p>Стоит отметить, что в примере выще определения полей класса избыточно. Обращение в конструкторе к полям через <code>this</code> фактически 
  будет аналогично их определению, и в данном случае мы можем убрать определение полей:</p>
  <pre class="brush:js;">
  class Person{
  
    constructor(personName, personAge){
      this.name = personName;
      this.age = personAge;
    }
    print(){
      console.log(\`Name: \${this.name}  Age: \${this.age}\`);
    }
  }
  const tom = new Person("Tom", 37);
  tom.print();	// Name: Tom  Age: 37
  const bob = new Person("Bob", 41); 
  bob.print()		// Name: Bob  Age: 41
  </pre>`;
}

//=====================================================================================
function less41(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Приватные поля и методы</h2><div class="date">Последнее обновление: 18.08.2021</div>
  
    <p>В прошлых темах мы использовали класс, свойства и методы которого были досупны извне, и соответственно мы могли к им обратиться в любом месте программы. 
  Например:</p>
  <pre class="brush:js;">
  class Person{
  
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
      print(){
          console.log(\`Name: \${this.name}  Age: \${this.age}\`);
      }
  }
  const tom = new Person("Tom", 37);
  tom.name = "Sam";
  tom.age = -45;
  tom.print();	// Name: Sam  Age: -45
  </pre>
  <p>С одной стороны, это замечательно, что мы можем использовать функциональность класса в своей программе, обращаться к его свойствам, методам. Но это 
  может быть источником потенциальных проблем. Как видно в примере выше, мы можем изменить имя человека. Но что, если мы не хотим, чтобы в программе можно 
  было менять начальное имя? Также мы можем изменить возраст человека, но изменить его на любое число, которое может предствлять некорректный возраст (например, отрицательный).</p>
  <p>Иногда необходимо, чтобы к данным или действиям извне класса нельзя было обратиться, и чтобы к ним можно было обращаться только внутри этого 
  же класса. Или иными словами, сделать свойства и методы класса приватными - доступными только для этого класса. И язык JavaScript предоставляет для этого необходимый инструментарий. 
  Для этого название полей и методов должно начинаться с символа решетки <span class="b">#</span>.</p>
  <h3>Приватные поля</h3>
  <p>Названия приватных полей предваряется символом <span class="b">#</span>:</p>
  <pre class="brush:js;">
  class Person{
    #name;
    #age;
    constructor(name, age){
      this.#name = name;
      this.#age = age;
    }
      print(){
          console.log(\`Name: \${this.#name}  Age: \${this.#age}\`);
      }
  }
  const tom = new Person("Tom", 37);
  // tom.#name = "Sam";	// ! Ошибка - нельзя обратиться к приватному полю
  // tom.#age = -45;		// ! Ошибка - нельзя обратиться к приватному полю
  tom.print();	// Name: Tom  Age: 37
  </pre>
  <p>В примере выше определены приватные поля <code>#name</code> и <code>#age</code>. Установить и получить их значение можно только внури класса Person. 
  Вне его они не доступны. Поэтому при попытке обратиться к ним через имя объекта, мы получим ошибку:</p>
  <pre class="brush:js;">
  tom.#name = "Sam";	// ! Ошибка - нельзя обратиться к приватному полю
  tom.#age = -45;		// ! Ошибка - нельзя обратиться к приватному полю
  </pre>
  <p>Если потребуется как-то к ним все-таки обратиться, то мы можем определить для этого методы. Например, выше метод <code>print()</code> получает их значения и выводит на консоль. 
  Подобным образом можно определить и методы для установки значения:</p>
  <pre class="brush:js;">
  class Person{
    #name;
    #age= 1;
    constructor(name, age){
      this.#name = name;
      this.setAge(age);
    }
    setAge(age){
      if (age &gt; 0 && age &lt; 110) this.#age = age;
    }
      print(){
          console.log(\`Name: \${this.#name}  Age: \${this.#age}\`);
      }
  }
  const tom = new Person("Tom", 37);
  tom.print();	// Name: Tom  Age: 37
  tom.setAge(22);
  tom.print();	// Name: Tom  Age: 22
  tom.setAge(-1234);
  tom.print();	// Name: Tom  Age: 22
  </pre>
  <p>В данном случае метод <code>setAge</code> проверяет корректность переданного значения, и если оно корректно, переустанавливает возраст.</p>
  <h3>Приватные методы</h3>
  <p>Названия приватных методов также предваряются символом <span class="b">#</span>:</p>
  <pre class="brush:js;">
  class Person{
    #name = "undefined";
    #age = 1;
    constructor(name, age){
      this.#name = this.#checkName(name);
      this.setAge(age);
    }
    #checkName(name){
      if(name!=="admin") return name;
    }
    setAge(age){
      if (age &gt; 0 && age &lt; 110) this.#age = age;
    }
      print(){
          console.log(\`Name: \${this.#name}  Age: \${this.#age}\`);
      }
  }
  const tom = new Person("Tom", 37);
  tom.print();	// Name: Tom  Age: 37
  const bob = new Person("admin", 41);
  bob.print();	// Name: Undefined  Age 41
  //let personName = bob.#checkName("admin");	// ! Ошибка - нельзя обратится к приватному методу
  </pre>
  <p>В примере выше определен приватный метод <code>#checkName()</code>, который выполняет условную проверку имени - ели оно не равно "admin", то возвращает переданное значение. (К примеру, мы не хотим, 
  чтобы имя пользователя было "admin"). И также вне класса мы не можем обратиться к этому методу:</p>
  <pre class="brush:js;">let personName = bob.#checkName("admin");	// ! Ошибка</pre>
  <p>Как правило, подобные приватные методы используются для выполнения каких-то вспомогательных действий, как, например, валидация в примере выше, и которые нет смысла делать доступнми из вне.</p>
  `;
}

//=====================================================================================
function less42(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Статические поля и методы</h2><div class="date">Последнее обновление: 18.08.2021</div>
  
    <p>Кроме обычных полей и методов класс может определять статические поля и методы. В отличие от обычных полей/свойств и методов они относятся ко всему классу, а не 
  к отдельному объекту.</p>
  <h3>Статические поля</h3>
  <p>Статические поля хранят состояния класса в целом, а не отдельного объекта. Перед названием статического поля ставится ключевое слово <span class="b">static</span>. Например:</p>
  <pre class="brush:js;">
  class Person{
    static retirementAge = 65;
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
      print(){ 
      console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`); 
    }
  }
  
  console.log(Person.retirementAge); // 65
  Person.retirementAge = 62;
  console.log(Person.retirementAge); // 62
  </pre>
  <p>Здесь в классе Person определено статическое поле <code>retirementAge</code>, которое хранит условный возраст выхода на пенсию:</p>
  <pre class="brush:js;">static retirementAge = 65;</pre>
  <p>Это поле относится ко всему классу Person в целом и описывает состояние всего класса в целом. Ведь, 
  как правило, есть некий общий возраст выхода на пенсию, принтый для всех (не берем в расчет отдельные случаи для отдельных профессий). 
  И поэтому для обращения к статическому полю применяется имя класса, а не имя какого-либо объекта. Используя имя класса, мы можем получить или установить его значение:</p>
  <pre class="brush:js;">
  Person.retirementAge = 62;
  console.log(Person.retirementAge); // 62
  </pre>
  <p>При этом мы НЕ можем в нестатических методах и конструкторе класса обращаться к этим полям через <code>this</code>, наподобие следующего:</p>
  <pre class="brush:js;">
  print(){ 
      console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`); 
      console.log(\`Пенсионный возраст: \${this.retirementAge}\`);	// к статическому полю нельзя обратиться через this
  }
  </pre>
  <p>Если мы все таки хотим обратиться к статическим полям и методам внутри нестатических методов и конструкторе класса, то опять же, как и в общем случае, необходимо использовать 
  имя класса:</p>
  <pre class="brush:js;">
  print(){ 
    console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`); 
    console.log(\`Пенсионный возраст: \${Person.retirementAge}\`);
  }
  </pre>
  <h3>Статические методы</h3>
  <p>Статические методы, как и статические поля, определяются для всего класса в целом, а не для отдельного объекта. 
  Для их определения перед названием метода ставится оператор <span class="b">static</span>. Например:</p>
  <pre class="brush:js;">
  class Person{
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
      print(){ 
      console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`);
    }
    static printClassInfo(){ 
      console.log("Класс Person представляет человека");
    }
  }
  Person.printClassInfo();	// Класс Person представляет человека
  </pre>
  <p>Здесь определен статический метод <code>printClassInfo()</code>, который для простоты просто выводит некоторое сообщение. В отличие от обычных нестатических методов, которые определяют поведение объекта, 
  статические методы определяют поведение для всего класса. Поэтому для их вызова применяется имя класса, а не имя объекта:</p>
  <pre class="brush:js;">Person.printClassInfo();</pre>
  <p>Поскольку статический метод относится классу в целом, а не к объекту, то мы НЕ можем обращаться в нем к нестатическим полям/свойствам и методам объекта, наподобие следующего:</p>
  <pre class="brush:js;">
  class Person{
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
      print(){ 
      console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`);
    }
    static printAge(){  console.log(this.age); }	// для статического метода this.age не существует
  }
  Person.printAge();	// undefined
  </pre>
  <p>Если необходимо в статическом методе обратиться к свойствам объекта, то мы можем опеределить в методе параметр, через который в метод будет передаваться объект:</p>
  <pre class="brush:js;">
  class Person{
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
      static print(person){ 
      console.log(\`Имя: \${person.name}  Возраст: \${person.age}\`);
    }
  }
  const tom = new Person("Tom", 37);
  const bob = new Person("Bob", 41);
  Person.print(tom);	// Tom 37
  Person.print(bob);	// Bob 41
  </pre>
  <p>Однако мы можем использовать в статических методах слово <span class="b">this</span> для обращения к статическим полям и другим статическим методам:</p>
  <pre class="brush:js;">
  class Person{
    static retirementAge = 65;
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
      print(){ 
      console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`);
    }
    static calculateRestAges(person){
      if(this.retirementAge &gt; person.age){
        const restAges = this.retirementAge - person.age;
        console.log(\`До пенсии осталось \${restAges} лет\`);
      }
      else console.log("Вы уже на пенсии");
    }
  }
  const tom = new Person("Tom", 37);
  Person.calculateRestAges(tom);		// До пенсии осталось 28 лет
  const bob = new Person("Bob", 71);
  Person.calculateRestAges(bob);		// Вы уже на пенсии
  </pre>
  <p>Здесь определен статический метод <code>calculateRestAges()</code>, который расчитывает, сколько определенному человеку осталось до пенсии. И для вычисления он 
  обращается к статическому полю <code>retirementAge</code>:</p>
  <pre class="brush:js;">const restAges = this.retirementAge - person.age;</pre>
  <h3>Приватные статические поля и методы</h3>
  <p>Как и обычные поля и методы статические поля и методы могут быть приватными. Такие поля и методы доступны только из других статических методов класса:</p>
  <pre class="brush:js;">
  class Person{
    static #retirementAge = 65;
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
      print(){ 
      console.log(\`Имя: \${this.name}  Возраст: \${this.age}\`);
    }
    static calculateRestAges(person){
      if(this.#retirementAge &gt; person.age){
        const restAges = this.#retirementAge - person.age;
        console.log(\`До пенсии осталось \${restAges} лет\`);
      }
      else console.log("Вы уже на пенсии");
    }
  }
  // console.log(Person.#retirementAge);	// ! Ошибка: поле retirementAge -приватное
  const tom = new Person("Tom", 37);
  Person.calculateRestAges(tom);		// До пенсии осталось 28 лет
  const bob = new Person("Bob", 71);
  Person.calculateRestAges(bob);		// Вы уже на пенсии
  </pre>
  <p>В отличие от предыдущего примера теперь статическое поле <code>retirementAge</code> - приватное. И теперь к нему можно обратиться только внутри статических методов класса.</p>
  `;
}

//=====================================================================================
function less43(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Свойства и методы доступа</h2><div class="date">Последнее обновление: 18.08.2021</div>
  
    <p>Для опосредования доступа к свойствам класса в последних стандартах JavaScript была добавлена поддержка методов доступа - <span class="b">get</span> и <span class="b">set</span>. Сначала рассмотрим проблему, с 
  которой мы можем столкнуться:</p>
  <pre class="brush:js;">
  class Person{
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
  }
  const tom = new Person("Tom", 37);
  console.log(tom.age);	// 37
  tom.age = -15;
  console.log(tom.age);	// -15
  </pre>
  <p>Класс Person определяет два свойства - <code>name</code> (имя) и <code>age</code> (возраст человека), значения которых мы можем получить или установить. Но что если 
  мы передадим некорректные значения? Так, в примере выше свойству age передается отрицательное число, но возраст не может быть отрицательным.</p>
  <p>Чтобы выйти из этой ситуации, мы можем определить приватное поле age</code>, к которому можно было бы обратиться только из текущего класса. 
  А для получения или установки его значения создать специальные методы:</p>
  <pre class="brush:js;">
  class Person{
    #ageValue = 1;
      constructor(name, age){
          this.name = name;
          this.setAge(age);
      }
      getAge(){
      return this.#ageValue;
    }
    setAge(value){ if(value&gt;0 && value &lt; 110) this.#ageValue = value; }
  }
  const tom = new Person("Tom", 37);
  console.log(tom.getAge());	// 37
  tom.setAge(-15);
  console.log(tom.getAge());	// 37
  </pre>
  <p>Теперь возраст хранится в приватном поле <code>ageValue</code>. При его установке в методе <code>setAge()</code> проверяется переданное значение. И 
  установка происходит, если только передано корректное значение. А метод <code>getAge()</code> возвращает значение этой переменной.</p>
  <p>Но есть и другое решение - применение методов доступа <code>get</code> и <code>set</code>.</p>
  <pre class="brush:js;">
  // определение приватного поля
  #field;
  set field(value){
    this.#field= value;
  }
  get field(){
    return this.#field;
  }
  </pre>
  <p>Оба метода - <code>get</code> и <code>set</code> имеют одинаковые названия. Как правило, они опосредуют доступ к некоторому приватному полю. 
  Метод <span class="b">set</span> предназначен для установки. Он принимает в качестве параметра новое значение. Далее в методе <code>set</code> мы можем выполнить ряд действий при установке.</p>
  <p>Метод <span class="b">get</span> предназначен для получения значения. Здесь мы можем определить какую-нибудь логику при возвращении значения.</p>
  <p>Так, перепишем предыдущий пример с использованием <span class="b">get</span> и <span class="b">set</span>:</p>
  <pre class="brush:js;">
  class Person{
    #ageValue = 1;
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
      set age(value){
      console.log(\`Передано \${value}\`);
      if(value&gt;0 && value &lt; 110) this.#ageValue = value;
    }
    get age(){
      return this.#ageValue;
    }
  }
  const tom = new Person("Tom", 37);
  console.log(tom.age);
  tom.age = -15;
  console.log(tom.age);
  </pre>
  <p>Стоит отметить, что работа с методами доступа производится также, как с обычными свойствами. Так, для получения значения и вывода на консоль применяется вызов:</p>
  <pre class="brush:js;">console.log(tom.age);</pre>
  <p>а не</p>
  <pre class="brush:js;">console.log(tom.age());</pre>
  <p>То есть при обращении <code>tom.age</code> фактически будет срабатывать метод <span class="b">get</span>, который возвратит значение поля <code>ageValue</code>.</p>
  <p>А при вызове </p>
  <pre class="brush:js;">tom.age = -15;</pre>
  <p>будет срабатывать метод <span class="b">set</span>, который получит передаваемое ему значение (здесь число -15) через единственный параметр. И далее в самом методе <code>set</code> мы можем решить, надо ли устанавливать 
  это значение.</p>
  <h3>Свойства, доступные только для чтения</h3>
  <p>Выше применялись оба метода <code>get</code> и <code>set</code>, соответственно значение поля можно было и получить, и установить. Однако в реальност мы можем использовать только один из них. 
  Например, мы можем оставить только метод <code>get</code> и тем самым сделать свойство доступным <span class="b">только для чтения</span>.</p>
  <p>Например, в изменим пример выше и сделаем свойство <code>name</code> доступным только для чтения:</p>
  <pre class="brush:js;">
  class Person{
    #age = 1;
    #name;
      constructor(name, age){
          this.#name = name;
          this.age = age;
      }
    //set name(value){ this.#name = value; }
    get name(){ return this.#name; }
      set age(value){ if(value&gt;0 && value &lt; 110) this.#age = value; }
    get age(){ return this.#age; }
  }
  const tom = new Person("Tom", 37);
  console.log(tom.name);	// Tom ’,
  tom.name = "Bob";		// Это ничего не даст
  console.log(tom.name);	// Tom	 - значение не изменилось
  </pre>
  <p>В данном случае вместо общедоступного свойства <code>name</code> определена приватное поле <code>#name</code>. Его можно установить только из внутри класса, что мы и делаем в конструкторе класса. 
  Однако из вне его можно только прочитать с помощью метода <code>get</code>. Поэтому попытка установки свойства</p>
  <pre class="brush:js;">tom.name = "Bob";</pre>
  <p>ни к чему не приведет</p>
  <h3>Свойства только для установки</h3>
  <p>Также мы можем сделать свойство доступным только для записи, оставив только метод <code>set</code>. Например, добавим новое свойство id, которое будет доступно только для записи:</p>
  <pre class="brush:js;">
  class Person{
    #id;
      constructor(name, age, id){
          this.name = name;
          this.age = age;
      this.id = id;
      }
    set id(value){ this.#id = value;}
    print(){
      console.log(\`id: \${this.#id}   name: \${this.name}   age: \${this.age}\`);
    }
  }
  const tom = new Person("Tom", 37, 1);
  tom.print();			// id: 1   name: Tom   age: 37
  tom.id = 55;			// устанавливаем значение свойства id
  tom.print();			// id: 55   name: Tom   age: 37
  console.log(tom.id);	// undefined - значение свойства id нельзя получить
  </pre>
  <p>Здесь определено свойство <code>id</code>, которое устанавливает значение приватного поля <code>#id</code>. Но поскольку метода <code>get</code> для этого свойства не определено, 
  то при попытке получить значение свойства id, мы получим <code>undefined</code>:</p>
  <pre class="brush:js;">console.log(tom.id);	// undefined - значение свойства id нельзя получить</pre>
  <h3>Свойства без обращения к полям</h3>
  <p>Стоит отметить, что методы <code>get</code> и <code>set</code> необязательно должны обращаться к приватным или неприватным полям. Это могут быть и вычисляемые свойства. Например:</p>
  <pre class="brush:js;">
  class Person{
      constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
      }
    get fullName(){ return \`\${this.firstName} \${this.lastName}\` }
  }
  const tom = new Person("Tom", "Smith");
  console.log(tom.fullName);	// Tom Smith
  </pre>
  <p>В данном случае свойство для чтения <code>fullName</code> возращает фактически объединение двух свойств - <code>firstName</code> и <code>lastName</code>.</p>
  <p>Подобным образом можно определить и свойство для записи:</p>
  <pre class="brush:js;">
  class Person{
      constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
      }
    get fullName(){ return \`\${this.firstName} \${this.lastName}\` }
    set fullName(value){ 
      [this.firstName, this.lastName] = value.split(" ");
    }
  }
  const tom = new Person("Tom", "Smith");
  console.log(tom.fullName);	// Tom Smith
  tom.fullName = "Tomas Jefferson";
  console.log(tom.lastName);	// Jefferson
  </pre>
  <p>В данном случае метод <code>set</code> свойства <code>fullName</code> в качестве параметра получает некоторую строку и с помощью ее метода <code>split</code> разбивает по пробелу и получает массив подстрок, которые были разделены пробелом. То есть, теоретически мы рассчитываем, 
  что будет передано что-то наподобие "Tom Smith", а после разделения по пробелу свойство <code>firstName</code> получит значение "Tom", а свойтсво 
  <code>lastName</code> - значение "Smith". Стоит отметить, что для простоты и целй демонстрации здесь мы не рассматриваем исключительные ситуации, 
  когда передается пустая строка или строка, которая не делится по пробелу на две части и т.д.</p>
  <p>В итоге при получении нового значения</p>
  <pre class="brush:js;">tom.fullName = "Tomas Jefferson";</pre>
  <p>Метод <code>set</code> разобьет его по пробелу, и первый элемент массива будет передан свойству <code>firstName</code>, а второй - свойству <code>lastName</code>.</p>
  `;
}

//=====================================================================================
function less44(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Наследование</h2><div class="date">Последнее обновление: 18.08.2021</div>
    <p>Одни классы могут наследоваться от других. Наследование позволяет сократить объем кода в классах-наследниках. Например, возьмем следующие классы:</p>
    <pre class="brush:js;">
    class Person{
      name;
      age;
      
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
    }
    class Employee{
        name; 
      age;
      company;
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
        work(){
            console.log(\`\${this.name} works in \${this.company}\`);
        }
    }
     
    const tom = new Person();
    tom.name = "Tom"; 
    tom.age= 34;
    const bob = new Employee();
    bob.name = "Bob"; 
    bob.age = 36; 
    bob.company = "Google";
    tom.print();	// Name: Tom  Age: 34
    bob.print();	// Name: Bob  Age: 36
    bob.work();		// Bob works in Google
    </pre>
    <p>Здесь определены два класса - Person, который представляет человека, и Employee, который представляет работника предприятия. Оба класса прекрасно работают, мы можем создавать их объекты, но мы также видим, что 
    класс Employee повторяет функционал класса Person, так как работник также является человеком, для которого также можно определить свойства name и age и метод print.</p>
    <p>Наследование позволяет одним классам автоматически получить функцонал других классов и тем самым сократить объем кода. Для наследования одного класса от другого применяется 
    ключевое слово <span class="b">extends</span>:</p>
    <pre class="brush:js;">
    class Base{}
    class Derived extends Base{}
    </pre>
    <p>После названия класса-наследника ставится ключевое слово <span class="b">extends</span>, после которого идет имя класса, от которого мы хотим унаследовать функционал.</p>
    <p>Так, изменим классы Person и Employee, применив наследование:</p>
    <pre class="brush:js;">
    class Person{
      name;
      age;
      
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
    }
    class Employee extends Person{
      company;
        work(){
            console.log(\`\${this.name} works in \${this.company}\`);
        }
    }
     
    const tom = new Person();
    tom.name = "Tom"; 
    tom.age= 34;
    const bob = new Employee();
    bob.name = "Bob"; 
    bob.age = 36; 
    bob.company = "Google";
    tom.print();	// Name: Tom  Age: 34
    bob.print();	// Name: Bob  Age: 36
    bob.work();		// Bob works in Google
    </pre>
    <p>Теперь класс Employee наследуется от класса Person. В этом отношении класс Person еще называется базовым или родительским классом, а Employee - 
    производным классом или классом-наследником. Поскольку класс Employee наследует функционал от Person, то нам нет необходимости заново определять в нем свойства name, age и метод print. В итоге код класса Employee 
    получился короче, а результат программы тот же.</p>
    <h3>Наследование класса с конструктором</h3>
    <p>Вместе со всем функционалом производный класс наследует и конструктор базового класса. Например, определим в базовом классе Person конструктор:</p>
    <pre class="brush:js;">
    class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
    }
    class Employee extends Person{
      company;
        work(){
            console.log(\`\${this.name} works in \${this.company}\`);
        }
    }
     
    const tom = new Person("Tom", 34);
    tom.print();	// Name: Tom  Age: 34
    
    const sam = new Employee("Sam", 25);	// унаследованный конструктор
    sam.print();	// Name: Sam  Age: 25
    </pre>
    <p>В данном случае класс Person определяет конструктор с двумя параметрами. В этом случае класс Employee наследует его и использует для создания объекта Employee.</p>
    <h3>Определение конструктора в классе-наследнике и ключевое слово super.</h3>
    <p>Производный класс также может определить свой конструктор. Если производный класс определяет конструктор, то в нем должен быть вызван конструктор базового класса. Для обращения производном классе к функциональности 
    базового класса, в том числе для обращения к конструктору базового класса, применяется ключевое слово <span class="b">super</span></p>
    <pre class="brush:js;">
    class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
    }
    class Employee extends Person{
      
      constructor(name, age, company){
        super(name, age);
        this.company = company;
      }
        work(){
            console.log(\`\${this.name} works in \${this.company}\`);
        }
    }
     
    const tom = new Person("Tom", 34);
    tom.print();	// Name: Tom  Age: 34
    
    const sam = new Employee("Sam", 25, "Google");
    sam.print();	// Name: Sam  Age: 25
    sam.work();		// Sam works in Google
    </pre>
    <p>Класс Employee определяет свой конструктор с тремя параметрами, первой строкой в котором идет обращение к конструктору базового класса Person:</p>
    <pre class="brush:js;">super(name, age);</pre>
    <p>Поскольку конструктор класса Person имеет два параметра, соответственно в него передаются два значения. При этом конструктор базового класса должен вызываться до 
    обращения к свойствам текущего объекта через <code>this</code>.</p>
    <h3>Переопределение методов базового класса.</h3>
    <p>Производный класс, как и в случае с конструктором, может переопределять методы базового класса. Так, в примере выше метод <code>print()</code> класса Person 
    выводит имя и возраст человека. Но что, если мы хотим, чтобы для работника метод <code>print()</code> выводил также и компанию? В этом случае мы можем определить в классе Employee 
    свой метод <code>print()</code>:</p>
    <pre class="brush:js;">
    class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
    }
    class Employee extends Person{
      
      constructor(name, age, company){
        super(name, age);
        this.company = company;
      }
      print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        console.log(\`Company: \${this.company}\`);
        }
        work(){
            console.log(\`\${this.name} works in \${this.company}\`);
        }
    }
    const sam = new Employee("Sam", 25, "Google");
    sam.print();	// Name: Sam  Age: 25
            // Company: Google
    </pre>
    <p>Однако в коде выше мы видим, что первая строка метода <code>print()</code> в классе Employee по сути повторяет код метода <code>print()</code> из 
    класса Person. В данном случае это всего одна строка, но в другой ситуации повторяемый код мог бы больше. И чтобы не повторяться, мы опять же можем 
    просто обратиться к реализации метода <code>print()</code> родительского класса Person через <span class="b">super</span>:</p>
    <pre class="brush:js;">
    class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
        print(){
            console.log(\`Name: \${this.name}  Age: \${this.age}\`);
        }
    }
    class Employee extends Person{
      
      constructor(name, age, company){
        super(name, age);
        this.company = company;
      }
      print(){
            super.print();
        console.log(\`Company: \${this.company}\`);
        }
        work(){
            console.log(\`\${this.name} works in \${this.company}\`);
        }
    }
    const sam = new Employee("Sam", 25, "Google");
    sam.print();	// Name: Sam  Age: 25
            // Company: Google
    </pre>
    <p>То есть в данном случае вызов</p>
    <pre class="brush:js;">super.print();</pre>
    <p>представляет вызов реализации метода из базового класса. Таким образом, с помощью this и super мы можем разграничить обращение к функциональности текущего класса или его базового класса.</p>
    <h3>Наследование и приватные поля и методы</h3>
    <p>При наследовании стоит учитывать, что производный класс может обращаться к любой функциональности базового класса, кроме
    приватных полей и методов. Например:</p>
    <pre class="brush:js;">
    class Person{
      #name;
      constructor(name, age){
        this.#name = name;
        this.age = age;
      }
        print(){
            console.log(\`Name: \${this.#name}  Age: \${this.age}\`);
        }
    }
    class Employee extends Person{
      
      constructor(name, age, company){
        super(name, age);
        this.company = company;
      }
      print(){
            super.print();
        console.log(\`Company: \${this.company}\`);
        }
        work(){
            console.log(\`\${this.#name} works in \${this.company}\`);	// ! Ошибка - поле #name недоступно из Employee
        }
    }
    </pre>
    <p>В данном случае поле <code>#name</code> в классе Person определено как приватное, поэтому достуно только внутри этого класса. Поытка обратиться 
    к этому полю в классе-наследнике Employee приведет к ошибке вне зависимости будет идти обращение через <code>this.#name</code> или <code>super.#name</code>.</p>
         `;
}

//=====================================================================================
function less50(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Массивы</h1><h2>Создание массива и объект Array</h2><div class="date">Последнее обновление: 18.08.2021</div>
  
    <p>Для хранения набора данных в языке JavaScript предназначены массивы. Массивы в JavaScript представлены объектом 
  <span class="b">Array</span>. Объект <span class="b">Array</span> предоставляет ряд свойств и методов, с помощью которых мы можем управлять массивом и его элементами.</p>
  <h3>Создание массива</h3>
  <p>Можно создать пустой массив, используя квадратные скобки или конструктор Array:</p>
  <pre class="brush:js;">
  const users = new Array();
  const people = [];
  
  console.log(users);	// Array[0]
  console.log(people); // Array[0]
  </pre>
  <p>Можно сразу же инициализировать массив некоторым количеством элементов:</p>
  <pre class="brush:js;">
  const users = new Array("Tom", "Bill", "Alice");
  const people = ["Sam", "John", "Kate"];
  
  console.log(users); // ["Tom", "Bill", "Alice"]
  console.log(people); // ["Sam", "John", "Kate"]
  </pre>
  <p>Еще один способ инициализации массивов представляет метод <span class="b">Array.of()</span> - он принимает элементы и инициизирует ими массив:</p>
  <pre class="brush:js;">
  const people = Array.of("Tom", "Bob", "Sam");
  console.log(people); // ["Tom", "Bob", "Sam"]
  </pre>
  <p>Можно определить массив и по ходу определять в него новые элементы:</p>
  <pre class="brush:js;">
  const users = [];
  users[1] = "Tom";
  users[2] = "Kate";
  console.log(users[1]); // "Tom"
  console.log(users[0]); // undefined
  </pre>
  <p>При этом не важно, что по умолчанию массив создается с нулевой длиной. С помощью индексов мы можем подставить на конкретный индекс в массиве тот или иной элемент.</p>
  
  <h3>Array.from</h3>
  <p>И еще один способ представляет функция <span class="b">Array.from()</span>. Она имеет много вариантов, рассмотрим самые распространенные:</p>
  <pre class="brush:js;">
  Array.from(arrayLike)
  Array.from(arrayLike, function mapFn(element) { ... })
  Array.from(arrayLike, function mapFn(element, index) { ... })
  </pre>
  <p>В качестве первого параметра - <code>arrayLike</code> функция принимает некий объект, который, условно говоря, "похож на массив", то есть может быть представлен в виде набора элементов. 
  Это может быть и другой массив, это может быть и строка, которая по сути предоставляет набор символов. Вообщем какой-то набор элементов, который можно 
  преобразовать в массив. Кроме того, это может и некий объект, в котором определено свойство <code>length</code>. Например:</p>
  <pre class="brush:js;">
  const array = Array.from("Hello");
  console.log(array); // ["H", "e", "l", "l", "o"]
  </pre>
  <p>В данном случае в функцию передается строка и возвращается массив, каждый элемент которого предоставляет один из символов этой строки.</p>
  <p>В качестве второго параметра передается функция преобразования, которая через первый параметр получает текущий элемент набора и возвращает некоторый результат его трансформации. Например:</p>
  <pre class="brush:js;">
  const numbers = [1, 2, 3, 4];
  const array = Array.from(numbers, n =&gt; n * n);
  console.log(array); // [1, 4, 9, 16]
  </pre>
  <p>В данном случае в функцию <code>Array.from()</code> передается массив чисел. Второй параметр - функция (в данном случае в ее роли выступает лямбда-выражение) 
  запускается для каждого числа из этого массива и получает это число через параметр <code>n</code>. В самом лямбда-выражении возвращаем квадрат этого числа. В итоге <code>Array.from()</code> 
  возвратит новый массив, в котором будут квадраты чисел из массива numbers.</p>
  <p>И еще одна версия функции <code>Array.from()</code> в качестве второго параметра принимает функцию преобразования, в которую кроме элемента из перебираемого набора передается и индекс этого элемента: 
  <code>Array.from(arrayLike, function mapFn(element, index) { ... })</code>. Используем эту версию и передадим в функцию объект со свойством <code>length</code>:</p>
  <pre class="brush:js;">
  const array = Array.from({length:3}, (element, index) =&gt; { 
    console.log(element);	// undefined
    return index;
  });
  console.log(array); // [0, 1, 2]
  </pre>
  <p>Здесь в функцию передается объект, у которого свойство <code>length</code> равно 3. Для функции <code>Array.from</code> это будет сигналом, в возвращаемом 
  массиве должно быть три элемента. При этом неважно, что функция преобразования из второго параметра принимает элемент набора (параметр <code>element</code>) - 
  в данном случае он будет всегда <code>undefined</code>, тем не менее значение <code>length:3</code> будет указателем, что возвращаемый массив будет иметь три элемента с соответственно индексами от 0 до 2. 
  И через второй параметр функции преобразования - параметр <code>index</code> мы можем и получить текущий индекс элемента.</p>
  <p>Тем не менее мы можем передать объект, где в качестве названий свойств применяются индексы. В этом случае объект превратится в массивоподобный объект, который можно перебрать:</p>
  <pre class="brush:js;">
  const array = Array.from({length:3, "0": "Tom", "1": "Sam", "2": "Bob"}, (element) =&gt; { 
    console.log(element);	
    return element;
  });
  console.log(array); // ["Tom", "Sam", "Bob"]
  </pre>
  
  <h3>length</h3>
  <p>Чтобы узнать длину массива, используется свойство <span class="b">length</span>:</p>
  <pre class="brush:js;">
  const fruit = [];
  fruit[0] = "яблоки";
  fruit[1] = "груши";
  fruit[2] = "сливы";
  
  console.log("В массиве fruit ", fruit.length, " элемента");
  for(let i=0; i &lt; fruit.length; i++)
    console.log(fruit[i]);
  </pre>
  <p>По факту длиной массива будет индекс последнего элемента с добавлением единицы. Например:</p>
  <pre class="brush:js;">
  const users = []; // в массиве 0 элементов
  users[0] = "Tom";
  users[1] = "Kate";
  users[4] = "Sam";
  for(let i=0; i&lt;users.length;i++)
    console.log(users[i]);
  </pre>
  <p>Вывод браузера:</p>
  <pre class="browser">
  Tom
  Kate
  undefined
  undefined
  Sam
  </pre>
  <p>Несмотря на то, что для индексов 2 и 3 мы не добавляли элементов, но длиной массива в данном случае будет число 5. Просто элементы с индексами 2 и 3 
  будут иметь значение <code>undefined</code>.</p>`;
}

//=====================================================================================
function less51(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Массивы и spread-оператор</h2><div class="date">Последнее обновление: 28.08.2021</div>
  
    <p><span class="b">spread-оператор</span> (оператор <span class="b">...</span>) позволяет разложить массив на отдельные значения. Для этого 
  перед массивом ставится многоточие:</p>
  <pre class="brush:js;">...массив</pre>
  <p>Простейший пример:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bob"];
  console.log(...users);	// Tom Sam Bob
  </pre>
  <p>И, применяя этот оператор, мы можем наполнить один массив значениями из другого массива:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bob"];
  console.log(users);     //  ["Tom", "Sam", "Bob"]
  const people1 = [...users];
  const people2 = new Array(...users);
  const people3 = Array.of(...users);
  console.log(people1);     //  ["Tom", "Sam", "Bob"]
  console.log(people2);     //  ["Tom", "Sam", "Bob"]
  console.log(people3);     //  ["Tom", "Sam", "Bob"]
  </pre>
  <h4>Объединение массивов</h4>
  <p>С помощью spread-оператора можно при создания нового массива передать ему значения сразу нескольких массивов. Например:</p>
  <pre class="brush:js;">
  const men = ["Tom", "Sam", "Bob"];
  const women = ["Kate", "Alice", "Mary"];
  const people = [...men, "Alex", ...women];
  
  console.log(people);     //  ["Tom", "Sam", "Bob", "Alex", "Kate", "Alice", "Mary"]
  </pre>
  <p>В данном случае в массив people передаются значения из массивов men, women, и, кроме того, мы можем дополнительно передать отдельные значения, которые не входят в эти массивы.</p>
  <h3>Передача аргументов функции</h3>
  <p>Подобным образом можно передавать из массива значения параметрам функции:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob"];
  
  function print(first, second, third){
    console.log(first);
    console.log(second);
    console.log(third);
  }
  print(...people); 
  // Tom
  // Sam
  // Bob
  </pre>
  <p>В данном случае функция <code>print()</code> принимает три параметра. Операция <code>...people</code> при вызове функции позволяет разложить массив <code>people</code> на отдельные значения, 
  которые передаются параметрам этой функции.</p>
  <p>Стоит отметить, что это не то же самое, что передать при вызове функции массив:</p>
  <pre class="brush:js;">print(people);</pre>
  <p>В этом случае весь массив будет передан первому параметру функции - параметру <code>first</code>, а остальные будут иметь значение <code>undefined</code>.</p>
  
  <p>Еще один пример передачи параметрам значений из массива:</p>
  <pre class="brush:js;">
  function sum(a, b, c){
    const d = a + b + c;
    console.log(d);
  }
  sum(1, 2, 3);
  const nums = [4, 5, 6];
  sum(...nums);
  </pre>
  <p>Во втором случае в функцию передается числа из массива nums. Но чтобы передавался не просто массив, как одно значение, а именно числа из этого массива, 
  применяется spread-оператор (многоточие <code>...</code>).</p>
  
  <p>Если количество параметров функции меньше количества элементов массива, то оставшие элементы массива просто будут отброшены. Если количество параметров больше 
  количества элементов массива, то параметры, которым не досталось значений, получат значение <code>undefined</code>:</p>
  <pre class="brush:js;">
  const people1 = ["Tom", "Sam", "Bob", "Mike"];
  const people2 = ["Alex", "Bill"];
  function print(first, second, third){
    console.log(\`\${first}, \${second}, \${third}\`);
  }
  print(...people1); 	// Tom, Sam, Bob
  print(...people2);	// Alex, Bill, undefined
  </pre>
  <h3>Копирование массивов</h3>
  <p>spread-оператор предоставляет самый простой способ скопировать элементы одного массива в другой. Однако тут надо соблюдать осторожность. Рассмотрим пример:</p>
  <pre class="brush:js;">
  const people = ["Sam", "Tom", "Bob"];
  const employees = [...people];
  employees[0] = "Dan";
  console.log(employees);		// ["Dan", "Tom", "Bob"]
  console.log(people);  		//  ["Sam", "Tom", "Bob"]
  </pre>
  <p>Здесь создаются два массива. При этом массиву employees передаются элементы массива people. Далее мы меняем первый элемент массива employees. И по консольному 
  выводу мы можем увидеть, что изменение одного массива не повлияло на другой массив.</p>
  <p>Однако что будет, если мы скопируем массив объектов:</p>
  <pre class="brush:js;">
  const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
  const employees = [...people];
  //employees[0] = {name: "Dan"};
  employees[0].name = "Dan";
  console.log(employees);		// 	[{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
  console.log(people);  		//  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
  </pre>
  <p>Теперь массив people предоставляет массив объектов, где каждый объект имеет одно свойство - name. Далее мы изменяем значение свойства name у первого элемента.</p>
  <p>И консольный вывод нам покажет, что изменение одного массива привело к изменению второго массива. Поскольку объекты - представляют ссылочный тип, и при копировании 
  в новый массив передается не копия объекта (как в случае со строками), а сам объект. Поэтому первый элемент одного массива и первый элемент второго массива фактически будет представлять 
  один и тот же объект.</p>
  <p>Однако мы можем полностью заменить элемент одного массива на другой объект, и тогда элемент второго массива по прежнему будет хранить ссылку на старый объект и будет не зависеть от первого массива:</p>
  <pre class="brush:js;">
  const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
  const employees = [...people];
  employees[0] = {name: "Dan"};
  console.log(employees);		// 	[{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
  console.log(people);  		//  [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}]
  </pre>
  <p>В данном случае первый элемент массива employees заменяется на ссылку на новый объект, а первый элемент массива people по прежнему хранит ссылку на старый объект.</p>
  `;
}

//=====================================================================================
function less52(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Операции с массивами</h2><div class="date">Последнее обновление: 08.09.2021</div>
  
    <p>Язык JavaScript предоставлет богатые возможности для работы с массивами, которые реализуются с помощью методов объекта Array. Рассмотрим применение этих методов</p>
  <h3>Копирование массива. slice()</h3>
  <p>Копирование массива может быть поверхностным или неглубоким (shallow copy) и глубоким (deep copy).</p>
  <p>При неглубоком копировании достаточно присвоить переменной значение другой переменной, которая хранит массив:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bill"];
  console.log(users);		//	["Tom", "Sam", "Bill"]
  const people = users;		//	неглубокое копирование
  
  people[1] = "Mike";		//	изменяем второй элемент
  console.log(users);		//	["Tom", "Mike", "Bill"]
  </pre>
  <p>В данном случае переменная people после копирования будет указывать на тот же массив, что и переменная users. Поэтому при изменении элементов в people, 
  изменятся элементы и в users, так как фактически это один и тот же массив.</p>
  <p>Такое поведение не всегда является желательным. Например, мы хотим, чтобы после копирования переменные указывали на отдельные массивы. И в этом случае 
  можно использовать глубокое копирование с помощью метода <span class="b">slice()</span>:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bill"];
  console.log(users);				//	["Tom", "Sam", "Bill"]
  const people = users.slice();		//	глубокое копирование
  
  people[1] = "Mike";				//	изменяем второй элемент
  console.log(users);				//	["Tom", "Sam", "Bill"]
  console.log(people);			//	["Tom", "Mike", "Bill"]
  </pre>
  <p>В данном случае после копирования переменные будут указывать на разные массивы, и мы сможем изменять их отдельно друг от друга.</p>
  <p>Но тут стоит отметить, что то же самое копирование по сути можно выполнить и с помощью spread-оператора <span class="b">...</span>:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bill"];
  console.log(users);     //  ["Tom", "Sam", "Bill"]
  const people = [...users];
   
  people[1] = "Mike";     //  изменяем второй элемент
  console.log(users);     //  ["Tom", "Sam", "Bill"]
  console.log(people);     //  ["Tom", "Mike", "Bill"]
  </pre>
  
  <p>Также метод <code>slice()</code> позволяет скопировать часть массива. Для этого он принимает два параметра:</p>
  <pre class="brush:js;">slice(начальный_индекс, конечный_индекс)</pre>
  <p>Первый параметр указывает на начальный индекс элемента, с которого  которые используются для выборки значений из массива. А второй параметр - конечный индекс, по который надо выполнить копирование.</p>
  <p>Например, выберем в новый массив элементы, начиная с 1 индекса по индекс 4 не включая:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
  const people = users.slice(1, 4);
  console.log(people);		// ["Sam", "Bill", "Alice"]
  </pre>
  <p>И поскольку индексация массивов начинается с нуля, то в новом массиве окажутся второй, третий и четвертый элемент.</p>
  <p>Если указан только начальный индекс, то копирование выполняется до конца массива:</p>
  <pre class="brush:js;">
  const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
  const people = users.slice(2);  // со второго индекса до конца
  console.log(people);		// ["Bill", "Alice", "Kate"]
  </pre>
  <h3>push()</h3>
  <p>Метод <code>push()</code> добавляет элемент в конец массива:</p>
  <pre class="brush:js;">
  const people = [];
  people.push("Tom");
  people.push("Sam");
  people.push("Bob","Mike");
  
  console.log("В массиве people элементов: ", people.length);
  console.log(people); // ["Tom", "Sam", "Bob", "Mike"]
  </pre>
  <h3>pop()</h3>
  <p>Метод <code>pop()</code> удаляет последний элемент из массива:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob", "Mike"];
  
  const lastPerson = people.pop(); // извлекаем из массива последний элемент
  console.log(lastPerson );	// Mike
  console.log(people);	// ["Tom", "Sam", "Bob"]
  </pre>
  <h3>shift()</h3>
  <p>Метод <code>shift()</code> извлекает и удаляет первый элемент из массива:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob", "Mike"];
  
  const firstPerson = people.shift(); // извлекаем из массива первый элемент
  console.log(firstPerson);	// Tom
  console.log(people);	// ["Sam", "Bob", "Mike"]
  </pre>
  <h3>unshift()</h3>
  <p>Метод <span class="b">unshift()</span> добавляет новый элемент в начало массива:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob"];
  
  people.unshift("Alice");
  console.log(people);	// ["Alice", "Tom", "Sam", "Bob"]
  </pre>
  
  <h3>Удаление элемента по индексу. splice()</h3>
  <p>Метод <code>splice()</code> удаляет элементы с определенного индекса. Например, удаление элементов с третьего индекса:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
  const deleted = people.splice(3);
  console.log(deleted);       // [ "Alice", "Kate" ]
  console.log(people);         // [ "Tom", "Sam", "Bill" ]
  </pre>
  <p>Метод splice возвращает удаленные элементы в виде нового массива.</p>
  <p>В данном случае удаление идет с начала массива. Если передать отрицательный индекс, то удаление будет производиться с конца массива. 
  Например, удалим последний элемент:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
  const deleted = people.splice(-1);
  console.log(deleted);       // [ "Kate" ]
  console.log(people);         // ["Tom", "Sam", "Bill", "Alice"]
  </pre>
  <p>Дополнительная версия метода позволяет задать количество элементов для удаления. Например, удалим с первого индекса три элемента:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
  const deleted = people.splice(1, 3);
  console.log(deleted);       // ["Sam", "Bill", "Alice"]
  console.log(people);         // ["Tom", "Kate"]
  </pre>
  <p>Еще одна версия метода splice позволяет вставить вместо удаляемых элементов новые элементы:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
  const deleted = people.splice(1, 3, "Ann", "Bob");
  console.log(deleted);       // ["Sam", "Bill", "Alice"]
  console.log(people);         // ["Tom", "Ann", "Bob", "Kate"]
  </pre>
  <p>В данном случае удаляем три элемента с 1-го индекса и вместо них вставляем два элемента.</p>
  <h3>concat()</h3>
  <p>Метод <code>concat()</code> служит для объединения массивов. В качестве результата он возвращает объединенный массив:</p>
  <pre class="brush:js;">
  const men = ["Tom", "Sam", "Bob"];
  const women = ["Alice", "Kate"];
  const people = men.concat(women);
  console.log(people);         // ["Tom", "Sam", "Bob", "Alice", "Kate"]
  </pre>
  
  <h3>join()</h3>
  <p>Метод <code>join()</code> объединяет все элементы массива в одну строку, используя определенный разделитель, который передается через параметр:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob"];
  
  const peopleToString = people.join("; ");
  console.log(peopleToString);         // Tom; Sam; Bob
  </pre>
  <p>В метод <code>join()</code> передается разделитель между элементами массива. В данном случае в качестве разделителя будет использоваться точка с запятой и пробел ("; ").</p>
  <h3>sort()</h3>
  <p>Метод <code>sort()</code> сортирует массив по возрастанию:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob"];
  
  people.sort();
  console.log(people);         // ["Bob", "Sam", "Tom"]
  </pre>
  <p>Стоит отметить, что по умолчанию метод <code>sort()</code> рассматривает элементы массива как строки и сортирует их в алфавитном порядке. Что может 
  привести к неожиданным результатам, например:</p>
  <pre class="brush:js;">
  const numbers = [200, 15, 5, 35];
  
  numbers.sort();
  console.log(numbers);         // [15, 200, 35, 5]
  </pre>
  <p>Здесь мы хотим отсортировать массив чисел, но результат может нас обескуражить: <code>[15, 200, 35, 5]</code>. В этом случае мы можем настроить метод, передав в него функцию 
  сортировки. Логику функции сортировки мыы определяем сами:</p>
  <pre class="brush:js;">
  const numbers = [200, 15, 5, 35];
  
  numbers.sort( (a, b) =&gt;  a - b);
  console.log(numbers);         // [5, 15, 35, 200]
  </pre>
  <p>Функция сортировки получает два рядом расположенных элемента массива. Она возвращает положительное число, если первый элемент должен находится перед вторым элементом. Если первый элемент должен располагаться после второго, то возвращается отрицательное число. Если элементы равны, возвращается 0.</p>
  <h3>reverse()</h3>
  <p>Метод <code>reverse()</code> переворачивает массив задом наперед:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob"];
  
  people.reverse();
  console.log(people);         // ["Bob", "Sam", "Tom"]
  </pre>
  <h3>Поиск индекса элемента</h3>
  <p>Методы <span class="b">indexOf()</span> и <span class="b">lastIndexOf()</span> возвращают индекс первого и последнего включения 
  элемента в массиве. Например:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
  
  const firstIndex = people.indexOf("Tom");
  const lastIndex = people.lastIndexOf("Tom");
  const otherIndex = people.indexOf("Mike");
  console.log(firstIndex); // 0
  console.log(lastIndex);  // 3
  console.log(otherIndex); // -1
  </pre>
  <p>firstIndex имеет значение 0, так как первое включение строки "Tom" в массиве приходится на индекс 0, а последнее на индекс 3.</p>
  <p>Если же элемент отсутствует в массиве, то в этом случае методы <code>indexOf()</code> и <code>lastIndexOf()</code> возвращают значение -1.</p>
  
  <h3>Проверка наличия элемента</h3>
  <p>Метод <span class="b">includes()</span> проверяет, есть ли в массиве значение, переданное в метод через параметр. Если такое значение есть, то метод 
  возвращает <code>true</code>, если значения в массиве нет, то возвращается <code>false</code>. Например:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
  
  console.log(people.includes("Tom")); 	// true - Tom есть в массиве
  console.log(people.includes("Kate"))	// false - Kate нет в массиве
  </pre>
  <p>В качестве второго параметра метод <span class="b">includes()</span> принимает индекс, с которого надо начинать поиск:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
  
  console.log(people.includes("Bob", 2)); // true
  console.log(people.includes("Bob", 4))	// false
  </pre>
  <p>В данном случае мы видим, что при поиске со 2-го индекса в массиве есть строка "Bob", тогда как начиная с 4-го индекса данная строка отсутствует.</p>
  <p>Если если этот параметр не передается, то по умолчанию поиск идет с 0-го индекса.</p>
  <p>При передаче отрицательного значения поиск идет с конца</p>
  <pre class="brush:js;">
  const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
  
  console.log(people.includes("Tom", -2)); // false - 2-й индекс с конца
  console.log(people.includes("Tom", -3))	// true	- 3-й индекс с конца
  </pre>
  <h3>every()</h3>
  <p>Метод <span class="b">every()</span> проверяет, все ли элементы соответствуют определенному условию:</p>
  <pre class="brush:js;">
  const numbers = [ 1, -12, 8, -4, 25, 42 ];
  const passed = numbers.every(n =&gt; n &gt; 0);
  console.log(passed); // false
  </pre>
  <p>В метод <code>every()</code> в качестве параметра передается функция, которая представляет условие. Эта функция в качестве параметра 
  принимает элемент и возвращает <code>true</code> (если элемент соответствует условию) или <code>false</code> (если не соответствует).</p>
  <p>Если хотя бы один элемент не соответствует условию, то метод <code>every()</code> возвращает значение <code>false</code>.</p>
  <p>В данном случае условие задается с помощью лямбда-выражения <code>n =&gt; n &gt; 0</code>, которое проверяет, больше ли элемент нуля.</p>
  <h3>some()</h3>
  <p>Метод <code>some()</code> похож на метод <code>every()</code>, только он проверяет, соответствует ли хотя бы один элемент условию. И в этом случае метод 
  <code>some()</code> возвращает <code>true</code>. Если элементов, соответствующих условию, в массиве нет, то возвращается значение 
  <code>false</code>:</p>
  <pre class="brush:js;">
  const numbers = [ 1, -12, 8, -4, 25, 42 ];
  const passed = numbers.some(n =&gt; n &gt; 0);
  console.log(passed); // true
  </pre>
  <h3>filter()</h3>
  <p>Метод <code>filter()</code>, как <code>some()</code> и <code>every()</code>, принимает функцию условия. 
  Но при этом возвращает массив тех элементов, которые соответствуют этому условию:</p>
  <pre class="brush:js;">
  const numbers = [ 1, -12, 8, -4, 25, 42 ];
  const filteredNumbers = numbers.filter(n =&gt; n &gt; 0);
  console.log(filteredNumbers); // [1, 8, 25, 42]
  </pre>
  <h3>forEach() и map()</h3>
  <p>Методы <span class="b">forEach()</span> и <span class="b">map()</span> осуществляют перебор элементов и выполняют с ними определенный операции. 
  Например, используем метод метода <code>forEach()</code> для вычисления квадратов чисел в массиве:</p>
  <pre class="brush:js;">
  const numbers = [ 1, 2, 3, 4, 5, 6];
  
  numbers.forEach(n =&gt; 
    console.log("Квадрат числа", n, "равен", n * n )
  );
  </pre>
  <p>Метод <code>forEach()</code> в качестве параметра принимает функцию, которая имеет один ппараметр - текущий перебираемый элемент массива. А в теле функции 
  над этим элементом можно выполнить различные операции.</p>
  <p>Консольный вывод программы:</p>
  <pre class="browser">
  Квадрат числа 1 равен 1
  Квадрат числа 2 равен 4
  Квадрат числа 3 равен 9
  Квадрат числа 4 равен 16
  Квадрат числа 5 равен 25
  Квадрат числа 6 равен 36
  </pre>
  <p>Метод <span class="b">map()</span> похож на метод <code>forEach</code>, он также в качестве параметра принимает функцию, с помощью 
  которой выполняются операции над перебираемыми элементами массива, но при этом метод map() возвращает новый массив с результатами операций 
  над элементами массива.</p>
  <p>Например, применим метод map к вычислению квадратов чисел массива:</p>
  <pre class="brush:js;">
  const numbers = [ 1, 2, 3, 4, 5, 6];
  
  const squares = numbers.map(n => n * n);
  console.log(squares);	//  [1, 4, 9, 16, 25, 36]
  </pre>
  <p>Функция, которая передается в метод <code>map()</code> получает текущий перебираемый элемент, выполняет над ним операции и 
  возвращает некоторое значение. Это значение затем попадает в результирующий массив <code>squares</code></p>
  <h3>Поиск в массиве</h3>
  <p>Метод <span class="b">find()</span> возвращает первый элемент массива, который соответствует некоторому условию. В качестве параметр метод <code>find</code> принимает функцию условия:</p>
  <pre class="brush:js;">
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
  
  // получаем первый элемент, который больше 10
  let found = numbers.find(n =&gt; n &gt; 10 );
  console.log(found);	// 13
  </pre>
  <p>В данном случае получаем первый элемент, который больше 10. Если элемент, соответствующий условию, не найден, то возвращается <code>undefined</code>.</p>
  <p>Метод <span class="b">findIndex</span> также принимает функцию условия, только возвращает индекс первого элемента массива, который соответствует этому условию:</p>
  <pre class="brush:js;">
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34];
  
  // получаем индекс первого элемента, который больше 10
  let foundIndex = numbers.findIndex(n =&gt; n &gt; 10 );
  console.log(foundIndex);	// 5
  </pre>
  <p>Если элемент не найден, то возвращается число -1.</p>
  <h3>Метод flat и преобразование массива</h3>
  <p>Метод <span class="b">flat()</span> упрощает массив с учетом указанной вложенности элементов:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
  const flattenPeople = people.flat();
  console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", ["Sam", "Ann"]]
  </pre>
  <p>То есть метод <code>flat()</code> фактически из вложенных массивов переводит элементы во внешний массив самого верхнего уровня. Однако мы видим, 
  что элементы массива второго уровня вложенности перешли в массив первого уровня вложенности, но тем не менее по-прежнему находятся во вложенном 
  массиве. Дело в том, что метод <code>flat()</code> по умолчанию применяется только к вложенным массивам первого уровня вложенности. Но мы можем передать 
  в метод уровень вложености:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
  const flattenPeople = people.flat(2);
  console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"]
  </pre>
  <p>Если массив содержит вложенные массивы гораздо более глубоких уровней вложенности, или мы даже не знаем, какие уровни вложенности есть в массиве, но 
  мы хотим, чтобы все элементы были преобразованы в один массив, то можно использовать значение <code>Infinity</code>:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
  const flattenPeople = people.flat(Infinity);
  console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"]
  </pre>`;
}

//=====================================================================================
function less53(){  
    document.querySelector(".frameCenter0").innerHTML=`<p>Массив представляет наиболее простой способ определения набора данных. Но иногда базовых возможностей массивов может быть недсотаточно. Например, определим массив, который представляет некоторую команду:</p>
    <pre class="brush:js;">
    const team = ["Tom", "Sam", "Bob"];
    for(const person of team) {
      console.log(person);
    }
    </pre>
    <p>Но что, если мы хотим добавить к команде какие-то доолнительные атрибуты - имя тренера, страну или город, где базируется команда, название, какие-то другие признаки? 
    На первый взгляд, мы можем определить сложный объект:</p>
    <pre class="brush:js;">
    const team = { 
      name: "Barcelona",				// название
      members: ["Tom", "Sam", "Bob"]	// игроки
    };
    for(const person of team.members) {
      console.log(person);
    }
    </pre>
    <p>Но есть и другое решение, которое позволяет нам определить свой тип коллекции: создать свой класс, который будет унаследован от Array.</p>
    <pre class="brush:js;">
    class Team extends Array{
      
      constructor(name, ...members){
        super(...members);
        this.name = name;
      }
    }
    </pre>
    <p>Здесь мы предполагаем, что в качестве первого параметра конструктора класса выступает имя команды, а в качестве второго - набор игроков команды, 
    число которых не фиксировано.</p>
    <p>Благодаря наследованию от Array мы можем рассматривать объекты класса Team как наборы данных и применять к ним все те операции, которые применяются к 
    массивам:</p>
    <pre class="brush:js;">
    class Team extends Array{
      
      constructor(name, ...members){
        super(...members);
        this.name = name;
      }
    }
    // создаем объект команды
    const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");
    console.log(barcelona);		// Team(3) ["Tom", "Sam", "Bob"]
    
    // перебор набора
    for(const person of barcelona) {
      console.log(person);
    }
    barcelona.push("Tim");		// добавим один элемент
    console.log(barcelona);		// Team(4) ["Tom", "Sam", "Bob", "Tim"]
    barcelona.splice(1, 1);		// удалим второй элемент
    console.log(barcelona);		// Team(3) ["Tom", "Bob", "Tim"]
    </pre>
    <h3>Переопределение методов</h3>
    <p>Как и в общем при наследоваании м можем переопределять унаследованные методы. Например, переопределим поведение метода добавления <span class="b">push()</span>, который отвечает за добавление в конец массива:</p>
    <pre class="brush:js;">
    class Team extends Array{
      
      constructor(name, ...members){
        super(...members);
        this.name = name;
      }
      push(person){
        if(person !== "admin") super.push(person);
      }
    }
    
    const snowbars = new Team("SnowBars", "Tom", "Sam", "Bob");
    
    snowbars.push("admin");		// добавим один элемент - admin
    console.log(snowbars);		// Team(3) ["Tom", "Sam", "Bob"]
    snowbars.push("Tim");		// добавим один элемент - Tim
    console.log(snowbars);		// Team(4) ["Tom", "Sam", "Bob", "Tim"]
    </pre>
    <p>В данном случае если в метод передано любое имя, кроме "admin", то оно добавляется в команду.</p>
    
`;
}

//=====================================================================================
function less60(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Строки</h1><h2>Строки, объект String и его методы</h2><div class="date">Последнее обновление: 10.09.2021</div>
  
    <p>Для создания строк мы можем как напрямую присваивать переменной или константе строку:</p>
  <pre class="brush:js;">
  const name = "Tom";
  </pre>
  <p>Для работы со строками предназначен объект <span class="b">String</span>, поэтому также можно использовать конструктор String:</p>
  <pre class="brush:js;">
  const name = new String("Tom");
  </pre>
  <p>Но как правило, используется первый более краткий способ. В первом случае JavaScript при необходимости автоматически преобразует 
  переменную примитивного типа в объект String.</p>
  <p>Объект String имеет большой набор свойств и методов, с помощью которых мы можем манипулировать строками.</p>
  <h3>Длина строки</h3>
  <p>Свойство <span class="b">length</span> указывает на длину строки:</p>
  <pre class="brush:js;">
  const hello = "привет мир";
  console.log(\`В строке "\${hello}"  \${hello.length} символов\`);
  // В строке "привет мир"  10 символов
  </pre>
  <h3>Повторение строки</h3>
  <p>Метод <span class="b">repeat()</span> позволяет создать строку путем многократного повторения другой строки. Количество повторов передается в качестве аргумента:</p>
  <pre class="brush:js;">
  const hello = "hello ";
  console.log(hello.repeat(3));	// hello hello hello
  </pre>
  <h3>Поиск в строке</h3>
  <p>Для поиска в строке некоторой подстроки используются методы <span class="b">indexOf()</span> (индекс первого вхождения подстроки) и 
  <span class="b">lastIndexOf()</span> (индекс последнего вхождения подстроки). Эти методы принимают два параметра:</p>
  <ul>
  <li><p>Подстроку, которую надо найти</p></li>
  <li><p>Необязательный параметр, который указывает, с какого символа следует проводить поиск подстроки в строке</p></li>
  </ul>
  <p>Оба этих метода возвращают индекс символа, с которого в строке начинается подстрока. Если подстрока не найдена, то возвращается число -1.</p>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  const key = "мир";
  const firstPos = hello.indexOf(key);
  const lastPos = hello.lastIndexOf(key);
  console.log("Первое вхождение: ", firstPos);	// 7
  console.log("Последнее вхождение: ", lastPos);	// 17
  </pre>
  <p>Еще один метод - <span class="b">includes()</span> возвращает true, если строка содержит определенную подстроку.</p>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  
  console.log(hello.includes("мир"));	// true
  console.log(hello.includes("миг"));	// false
  </pre>
  <p>С помощью второго дополнительного параметра можно определить индекс, с которого будет начинаться поиск подстроки:</p>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  
  console.log(hello.includes("мир", 5));	// true
  console.log(hello.includes("привет", 6));	// false
  </pre>
  <h3>Выбор подстроки</h3>
  <p>Для того, чтобы вырезать из строки подстроку, применяются методы <span class="b">substring()</span> и <span class="b">slice()</span>.</p>
  <h4>Substring</h4>
  <p>Метод <span class="b">substring()</span> принимает два параметра:</p>
  <ul>
  <li><p>индекс символа в строке, начиная с которого надо проводить обрезку строки. Обязательный параметр</p></li>
  <li><p>индекс, до которого надо обрезать строку. Необязательный параметра - если он не указан, то обрезается вся остальная часть строки</p></li>
  </ul>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  const world = hello.substring(7, 10); // с 7-го по 10-й индекс
  console.log(world); // мир
  const bye = hello.substring(12);	// c 12 индекса до конца строки
  console.log(bye); // пока мир
  </pre>
  <h4>slice</h4>
  <p>Еще один метод <span class="b">slice</span> также позволяет получить из строки какую-то ее часть. Она принимает два параметра:</p>
  <ul>
  <li><p>индекс символа в строке, начиная с которого надо проводить обрезку строки. Обязательный параметр</p></li>
  <li><p>индекс, до которого надо обрезать строку. Необязательный параметра - если он не указан, то обрезается вся остальная часть строки</p></li>
  </ul>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  const world = hello.slice(7, 10); // с 7-го по 10-й индекс
  console.log(world); // мир
  const bye = hello.slice(12);	// c 12 индекса до конца строки
  console.log(bye); // пока мир
  </pre>
  <p>Можно заметить, что этот метод похож на метод <code>substring()</code>, тем не менее между ними есть небольшие различие. 
  Прежде всего, в <code>slice()</code> начальный индекс должен быть меньше чем конечный. В <code>substring()</code>, если начальный индекс больше конечного, то они меняются местами 
  (то есть <code>substring(5, 1)</code> будет равноценно <code>substring(1, 5)</code>):</p>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  const world1 = hello.slice(6, 0); //
  console.log(world1); // 
  const world2 = hello.substring(6, 0); // аналогично hello.substring(0, 6)
  console.log(world2); // привет
  </pre>
  <p>Другое отличие, что <code>slice</code> позволяет использовать отрицательные индексы. Отрицательный индекс указывает на индекс символа относительно конца строки. 
  <code>substring()</code> же отрицательные индексы не поддерживает:</p>
  <pre class="brush:js;">
  const hello = "привет мир. пока мир";
  const bye1 = hello.slice(-8, -4); // с 8-го индекса с конца до 4 индекса с конца
  console.log(bye1); // 
  const bye2 = hello.substring(-8, -4); // не работает
  console.log(bye2); // 
  </pre>
  <h3>Управление регистром</h3>
  <p>Для изменения регистра имеются методы <span class="b">toLowerCase()</span> (для перевода в нижний регистр) и 
  <span class="b">toUpperCase()</span> (для перевода в верхний регистр).</p>
  <pre class="brush:js;">
  const hello = "Привет Том";
  console.log(hello.toLowerCase()); // привет том
  console.log(hello.toUpperCase()); // ПРИВЕТ ТОМ
  </pre>
  <h3>Получение символа по индексу</h3>
  <p>Чтобы получить определенный символ в строке по индексу, можно применять методы <span class="b">charAt()</span> и <span class="b">charCodeAt()</span>. 
  Оба этих метода в качестве параметра принимают индекс символа:</p>
  <pre class="brush:js;">
  const hello = "Привет Том";
  console.log(hello.charAt(2)); 		// и
  console.log(hello.charCodeAt(2)); 	// 1080
  </pre>
  <p>Но если в качестве результата метод <code>charAt()</code> возвращает сам символ, то метод <code>charCodeAt()</code> возвращает числовой код 
  этого символа.</p>
  <h3>Удаление пробелов</h3>
  <p>Для удаления начальных и концевых пробелов в стоке используется метод <span class="bb">trim()</span>:</p>
  <pre class="brush:js;">
  let hello = "   Привет Том  ";
  const beforeLength = hello.length;
  hello = hello.trim();
  const afterLength = hello.length;
  console.log("Длина строки до: ", beforeLength); 	// 15
  console.log("Длина строки после: ", afterLength); 	// 10
  </pre>
  <p>Дополнительно есть ряд методов, которые удаляют пробелы с определенной стороны строки:</p>
  <ul>
  <li><p><span class="b">trimStart()</span>: удаляет пробел с начала строки</p></li>
  <li><p><span class="b">trimEnd()</span>: удаляет пробел с конца строки</p></li>
  <li><p><span class="b">trimLeft()</span>: удаляет пробел с левой части строки</p></li>
  <li><p><span class="b">trimRight()</span>: удаляет пробел с правой части строки</p></li>
  </ul>
  <h3>Объединение строк</h3>
  <p>Метод <span class="b">concat()</span> объединяет две строки:</p>
  <pre class="brush:js;">
  let hello = "Привет ";
  let world = "мир";
  hello = hello.concat(world);
  console.log(hello); // Привет мир
  </pre>
  <h3>Замена подстроки</h3>
  <p>Метод <span class="b">replace()</span> заменяет первое вхождение одной подстроки на другую:</p>
  <pre class="brush:js;">
  let hello = "Добрый день";
  hello = hello.replace("день", "вечер");
  console.log(hello); // Добрый вечер
  </pre>
  <p>Первый параметр метода указывает, какую подстроку надо заменить, а второй параметр - на какую подстроку надо заменить.</p>
  <p>В то же время у этого метода есть одна особенность - он заменяет только первое вхождение подстроки:</p>
  <pre class="brush:js;">
  let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
  menu = menu.replace("чай", "кофе");
  console.log(menu);	// Завтрак: каша, кофе. Обед: суп, чай. Ужин: салат, чай.
  </pre>
  <p>Однако еще один метод - <span class="b">replaceAll()</span> позволяет заменить все вхождения подстроки:</p>
  <pre class="brush:js;">
  let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
  menu = menu.replaceAll("чай", "кофе");
  console.log(menu);	// Завтрак: каша, кофе. Обед: суп, кофе. Ужин: салат, кофе.
  </pre>
  <h3>Разделение строки</h3>
  <p>Метод <span class="b">split()</span> разбивает строку на массив подстрок по определенному разделителю. В качестве разделителя используется 
  строка, которая передается в метод:</p>
  <pre class="brush:js;">
  const message = "Сегодня была прекрасная погода";
  const messageParts = message.split(" ");
  console.log(messageParts);	// ["Сегодня", "была", "прекрасная", "погода"]
  </pre>
  <p>В данном случае строка разделяется по проблему, то есть в итоге в массиве messageParts окажется четыре элемента.</p>
  <h3>Проверка начала и окончания строки</h3>
  <p>Метод <span class="b">startsWith()</span> возвращает true, если строка начинается с определенной подстроки. А метод <span class="b">endsWith()</span> 
  возвращает true, если строка оканчивается на определенную подстроку.</p>
  <pre class="brush:js;">
  const hello = "let me speak from my heart";
  console.log(hello.startsWith("let"));		// true
  console.log(hello.startsWith("Let"));		// false
  console.log(hello.startsWith("lets"));		// false
  
  console.log(hello.endsWith("heart"));		// true
  console.log(hello.startsWith("bart"));		// false
  </pre>
  <p>При этом играет роль регистр символов, и из примера выше мы видим, что "let" не эквивалентно "Let".</p>
  <p>Дополнительный второй параметр позволяет указать индекс (для startsWith - индекс с начала, а для endsWith - индекс с конца строки), относительно которого будет производиться 
  сравнение:</p>
  <pre class="brush:js;">
  const hello = "let me speak from my heart";
  console.log(hello.startsWith("me", 4));		// true, "me" - 4 индекс с начала строки
  
  console.log(hello.startsWith("my", hello.length-8));	// true, "my" - 8 индекс с конца
  </pre>
  <h3>Зполнение строки</h3>
  <p>Методы <span class="b">padStart()</span> и <span class="b">padEnd()</span> растянуть строку на определенное количество символов и заполнить строку слева и справа соответственно.</p>
  <pre class="brush:js;">
  let hello = "hello".padStart(8);  // "   hello"
  console.log(hello);
  hello = "hello".padEnd(8);		// "hello   "
  console.log(hello);
  </pre>
  <p>Вызов <code>"hello".padStart(8)</code> будет рястягивать строку "hello" на 8 символов. То есть изначально в строке "hello" 5 символов, значит, к ней будет добавлено 3 символа. При чем они будут добавлено в начале строки. 
  По умолчанию добавляемые символы представляют пробелы. Аналогично вызов <code>"hello".padEnd(8)</code> растянет строку на 8 символов, но оставшие символы в виде пробелов будут добавлены в конец строки.</p>
  <p>По умолчанию эти методы используют пробелы для заполнения, но в качестве второго параметра мы можем передать методам значение, которым надо дополнить строку:</p>
  <pre class="brush:js;">
  let hello = "hello".padStart(17, "JavaScript, ");  // "JavaScript, hello"
  hello = "hello".padEnd(12, " Eugene");		// "hello Eugene"
  </pre>
  <p>Если добавляемое количество символов больше добавляемой строки, то добавляемая строка повторяется:</p>
  <pre class="brush:js;">
  let hello = "123".padStart(6, "0");  // "000123"
  hello = "123".padEnd(6, "0");		// "123000"
  </pre>`;
}

//=====================================================================================
function less61(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Шаблоны строк</h2><div class="date">Последнее обновление: 17.07.2021</div><p>Шаблоны строк (template strings / template literals) позволяют вставлять в строку различные значения. Подобный прием еще называют интерполяцией. 
    Для этого строки заключаются в косые кавычки, а вставляемое значение предваряется символом <span class="b">$</span> и заключается в фигурные скобки:</p>
    <pre class="brush:js;">
    const name = "Tom";
    const hello = \`Hello \${name}\`;
    console.log(hello);		// Hello Tom
    </pre>
    <p>Здесь на место <code>\${name}</code> будет вставляться значение константы <code>name</code>. Таким образом, из шаблона <code>\`Hello \${name}\`</code> мы получим строку 
    <code>Hello Tom</code>.</p>
    <p>Подобным образом в строку можно вставлять сразу несколько значений:</p>
    <pre class="brush:js;">
    const name = "Tom";
    let age = 37;
    const userInfo = \`\${name} is \${age} years old\`;
    console.log(userInfo);		// Tom is 37 years old
    </pre>
    <p>Также вместо скалярных значений могут добавляться свойства сложных объектов:</p>
    <pre class="brush:js;">
    const tom ={
      name: "Tom",
      age: 22
    }
    const tomInfo = \`\${tom.name} is \${tom.age} years old\`;
    console.log(tomInfo);		// Tom is 22 years old
    </pre>
    <p>Любо можно вставлять более сложные вычисляемые выражения:</p>
    <pre class="brush:js;">
    function sum(x, y){
      return x + y;
    }
    let a = 5;
    let b = 4;
    
    const result = \`\${a} + \${b} = \${sum(a, b)}\`;
    console.log(result);	// 5 + 4 = 9
    
    
    let expression = \`\${a} * \${b} = \${ a * b}\`;
    console.log(expression);	// 5 * 4 = 20
    </pre>
    <p>В первом случае в шаблоне вызывается функция <code>sum()</code>, параметрам которой передаются значения переменных <code>a</code> и 
    <code>b</code>: <code>\${sum(a, b)}</code>. В итоге в это место будет вставлена сумма a и b.</p>
    <p>Во втором случае в шаблоне выполняется операция умножения переменных: <code>\${ a * b}</code>.</p>
    <h3>html-код в шаблонах</h3>
    <p>Шаблоны также могут хранить html-код, который будет динамически формироваться.</p>
    <pre class="brush:js;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
      &lt;title&gt;METANIT.COM&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;script&gt;
    const tom = {name: "Tom", age: 37};
    const markup = \`&lt;div&gt;
      &lt;p&gt;&lt;b&gt;Name&lt;/b&gt;: \${tom.name}&lt;/p&gt;
      &lt;p&gt;&lt;b&gt;Age&lt;/b&gt;: \${tom.age}&lt;/p&gt;
    &lt;/div&gt;\`;
    
    document.body.innerHTML = markup;
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <img src="./pics/templates_1.png" alt="String templates in JavaScript" />
    <h3>Вложенные шаблоны</h3>
    <p>Рассмотрим другой пример - создадим из элементов массива список html:</p>
    <pre class="brush:xml;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
      &lt;title&gt;METANIT.COM&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;script&gt;
    const people = [{name: "Tom", age: 37}, {name:"Sam", age: 41}, {name: "Bob", age: 21}];
    const markup = \`&lt;ul&gt;
      \${people.map(person =&gt; \`&lt;li&gt;\${person.name}&lt;/li&gt;\`)}
    &lt;/ul&gt;\`;
    
    document.body.innerHTML = markup;
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <img src="./pics/templates_2.png" alt="Шаблоны строк в JavaScript" />
    <p>В данном случае мы имеем дело с вложенным шаблоном. То есть вначале определяется общий внешний шаблон:</p>
    <pre class="brush:js;">
    const markup = \`&lt;ul&gt;
      \${.............}
    &lt;/ul&gt;\`;
    </pre>
    <p>А в динамически формируемом выражении применяется еще один шаблон:</p>
    <pre class="brush:js;">
    \${people.map(person =&gt; \`&lt;li&gt;\${person.name}&lt;/li&gt;\`)}
    </pre>
    <p>В данном случае у массива people вызывается функция <code>map()</code>, которое определяет некоторое действие для каждого элемента массива. Это действие передается в 
    <code>map()</code> в виде функции. Здесь для упрощения в качестве такой функции применяется лямбда-выражение. Оно получает каждый элемент массива 
    через параметр <code>person</code> и для него формирует шаблон строки <code>\`&lt;li&gt;\${person.name}&lt;/li&gt;\`</code>.</p>
    <h3>Передача шаблона строки в функцию</h3>
    <p>JavaScript позволяет передать в функцию шаблон строки, причем не просто как строку, но и все ее динамчески вычисляемые фрагменты в виде отдельных параметров. 
    Подобная возможность может применяться, например, для предобработки шаблонов и их значений.</p>
    <p>Рассмотрим следующий пример:</p>
    <pre class="brush:xml;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
      &lt;title&gt;METANIT.COM&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;script&gt;
    const person = "Tom";
    
    function check (parts, name){
      console.log(parts);
      return parts[0] + name + parts[1];
    }
    let checkedTemplate = check\`Person: \${person}.\`;
    console.log(checkedTemplate);
    
    document.body.innerHTML = checkedTemplate;
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <p>Здесь определена функция <code>check()</code>, которая имеет два параметра: <code>parts</code> и <code>name</code></p>
    <pre class="brush:js;">
    function check (parts, name){
      console.log(parts);
      return parts[0] + name + parts[1];
    }
    </pre>
    <p>Параметр <code>parts</code> - это массив частей шаблона, разделенных вставляемыми динамическими фрагментами. Второй параметр - <code>name</code> - это динамически 
    вычисляемый фрагмент шаблона. То есть в данном случае мы предполагаем, что шаблон строки, который передается в функцию <code>check()</code>, 
    будет иметь только один динамчески вычисляемый фрагмент. Соответственно в массиве <code>parts</code> будет два элемента: статическая часть шаблона, которая идет 
    до вычисляемого фрагмента, и часть шаблона, которая идет после.</p>
    <p>Чтобы было более ясно, о чем идет речь, в функции выводим на консоль эти элементы массива parts.</p>
    <p>Функция возвращает <code>return parts[0] + name + parts[1]</code>, то есть по сути мы просто возвращаем ранее сформированный шаблон, ничего не меняя.</p>
    <p>Обратите внимание, как мы передаем этой функции шаблон:</p>
    <pre class="brush:js;">let checkedTemplate = check\`Person: \${person}.\`;</pre>
    <p>шаблон просто указывается после названия функции.</p>
    <p>Результат работы программы:</p>
    <img src="./pics/templates_3.png" alt="Tagged function in JavaScript" />
    <p>Из консольного вывода мы видим, что элементами массива parts являются подстроки "Person: " и ".". А в качестве значения параметра <code>name</code> передается строка "Tom". Стоит отметить, 
    что даже если после динамически вычисляемого фрагмента больше не было бы никаких символов (например, <code>\`Person: \${person}\`</code>), то массив 
    parts все равно имел бы два элемента, только вторым элементом тогда была бы пустая строка.</p>
    <p>Но в примере выше мы просто возвращали то же содержимое, которое было сформировано на основе шаблона. Однако мы можем выполнить некоторую обработку:</p>
    <pre class="brush:js;">
    const tom = "Tom";
    const admin = "Admin";
    
    function check (parts, name){
      if(name === "Admin") return "Пользователь не определен";
      else return parts[0] + name + parts[1];
    }
    let checkedTemplate1 = check\`Пользователь: \${tom}\`;
    let checkedTemplate2 = check\`Пользователь: \${admin}\`;
    
    console.log(checkedTemplate1);
    console.log(checkedTemplate2);
    </pre>
    <p>В данном случае, если в шаблон передается значение "Admin", то возвращаем один результат, иначе возвращаем, то, что было бы сформированно на основе шаблона.</p>
    <img src="./pics/templates_4.png" alt="Обработка шаблонов строк в функциях в JavaScript" />
    <p>Подобным образом можно обрабатывать шаблоны с большим количеством вычисляемых фрагментов:</p>
    <pre class="brush:js;">
    const tom = {name: "Tom", age: 37};
    const bob = {name: "Bob", age: 11};
    
    function check (parts, name, age){
      if(age &gt; 18) return \`\${parts[0]}\${name}. Доступ открыт\`;
      else return \`Для пользователя \${name} доступ закрыт. Возраст \${age} недействителен\`;
    }
    let checkedTemplate1 = check\`Пользователь: \${tom.name} \${tom.age}\`;
    let checkedTemplate2 = check\`Пользователь: \${bob.name} \${bob.age}\`;
    
    console.log(checkedTemplate1);
    console.log(checkedTemplate2);
    </pre>
    <p>В данном случае шаблон содержит два динамческих фрагмента. Соответственно в массива part будет три элемента.</p>
    <p>В функции <code>check()</code> в зависимости от значения второго динамического фрамегмента (условного возраста пользователя) возвращаем то или иное значение.</p>
    <p>Консольный вывод:</p>
    <div class="console">
    <pre class="consoletext">
    Пользователь:  Tom. Доступ открыт
    Для пользователя Bob доступ закрыт. Возраст 11 недействителен
    </pre>
    </div>`;
}

//=====================================================================================
function less62(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект RegExp. Регулярные выражения</h2><div class="date">Последнее обновление: 06.09.2021</div>
  
    <p><span class="b">Регулярные выражения</span> представляют шаблон, который используется для поиска или модификации строки. Для работы с регулярными выражениями 
  в JavaScript определен объект <span class="b">RegExp</span>.</p>
  <p>Определить регулярное выражение можно двумя способами:</p>
  <pre class="brush:js;">
  const myExp1 = /hello/;
  const myExp2 = new RegExp("hello");
  </pre>
  <p>Используемое здесь регулярное выражение довольно простое: оно состоит из одного слова "hello". В первом случае выражение помещается между двумя 
  косыми чертами, а во втором случае используется конструктор RegExp, в который выражение передается в виде строки.</p>
  <h3>Методы RegExp</h3>
  <p>Чтобы определить, соответствует ли регулярное выражение строке, в объекте RegExp определен метод <span class="b">test()</span>. Этот метод 
  возвращает <code>true</code>, если строка соответствует регулярному выражению, и <code>false</code>, если не соответствует.</p>
  <pre class="brush:js;">
  const initialText = "hello world!";
  const exp = /hello/;
  const result = exp.test(initialText);
  console.log(result); // true
   
  const initialText2 = "beautifull wheather";
  const result2 = exp.test(initialText2);
  console.log(result2); // false - в строке "beautifull wheather" нет "hello"
  </pre>
  <p>Аналогично работает метод <span class="b">exec</span> - он также проверяет, соответствует ли строка регулярному выражению, только теперь 
  данный метод возвращает ту часть строки, которая соответствует выражению. Если соответствий нет, то возвращается значение <span class="b">null</span>.</p>
  <pre class="brush:js;">
  let initialText = "hello world!";
  let exp = /hello/;
  let result = exp.exec(initialText);
  console.log(result); // hello
  
  initialText = "beautifull wheather";
  result = exp.exec(initialText);
  console.log(result); // null
  </pre>
  <h3>Группы символов</h3>
  <p>Регулярное выражение не обязательно состоит из обычных строк, но также может включать специальные элементы синтаксиса регулярных выражений. 
  Один из таких элементов представляют группы символов, заключенные в квадратные скобки. Например:</p>
  <pre class="brush:js;">
  let initialText = "обороноспособность";
  let exp = /[абв]/;
  let result = exp.test(initialText);
  console.log(result); // true
  
  initialText = "город";
  result = exp.test(initialText);
  console.log(result); // false
  </pre>
  <p>Выражение <code>[абв]</code> указывает на то, что строка должна иметь одну из трех букв.</p>
  <p>Если нам надо определить наличие в строке буквенных символов из определенного диапазона, то можно сразу задать этот диапазон:</p>
  <pre class="brush:js;">
  let initialText = "обороноспособность";
  let exp = /[а-я]/;
  let result = exp.test(initialText);
  console.log(result); // true
  
  initialText = "3di0789";
  result = exp.test(initialText);
  console.log(result); // false
  </pre>
  <p>В данном случае строка должна содержать хотя бы один символ из диапазона а-я.</p>
  <p>Если, наоборот, не надо, чтобы строка имела только определенные символы, то необходимо в квадратных скобках перед перечислением символов ставить знак ^:</p>
  <pre class="brush:js;">
  let initialText = "обороноспособность";
  let exp = /[^а-я]/;
  let result = exp.test(initialText);
  console.log(result); // false
  
  initialText = "3di0789";
  exp = /[^0-9]/;
  result = exp.test(initialText);
  console.log(result); // true
  </pre>
  <p>В первом случае строка не должна иметь только символы из диапазона а-я, но поскольку строка "обороноспособность" состоит только 
  из символов из этого диапазона, то метод <code>test()</code> возвращает false, то есть регулярное выражение не соответствует стоке.</p>
  <p>Во втором случае ("3di0789") строка не должна состоять только из цифровых символов. Но так как в строке также есть и буквы, 
  то строка соответствует регулярному выражению, поэтому метод test возвращает значение true.</p>
  <p>При необходимости мы можем собирать комбинации выражений:</p>
  <pre class="brush:js;">
  const initialText = "дома";
  const exp = /[дт]о[нм]/;
  const result = exp.test(initialText);
  console.log(result); // true
  </pre>
  <p>Выражение <code>[дт]о[нм]</code> указывает на те строки, которые могут содержать подстроки "дом", "том", "дон", "тон".</p>
  <h3>Флаги выражений</h3>
  <p>Флаги позволяют настроить поведение регулярных выражений. Каждый флаг представляет отдельный символ, который ставится в конце регулярного выражения. 
  В JavaScript применяются следующие флаги:</p>
  <ul>
  <li><p>Флаг <span class="b">global</span> позволяет найти все подстроки, которые соответствуют регулярному выражению. По умолчанию 
  при поиске подстрок регулярное выражение выбирает первую попавшуюся подстроку из строки, которая соответствует выражению. Хотя в строке может быть 
  множество подстрок, которые также соответствуют выражению. Для этого применяется данный флаг в виде символа <code>g</code> в выражениях</p></li>
  <li><p>Флаг <span class="b">ignoreCase</span> позволяет найти подстоки, которые соответствуют регулярному выражению, вне зависимости от регистра 
  символов в строке. Для этого в регулярных выражениях применяется символ <code>i</code></p></li>
  <li><p>Флаг <span class="b">multiline</span> позволяет найти подстроки, которые соответствуют регулярному выражению, в многострочном тексте. 
  Для этого в регулярных выражениях применяется символ <code>m</code></p></li>
  <li><p>Флаг <span class="b">dotAll</span> позволяет сопоставить точку в регулярном выражении с любым символом текста, в том числе с разделителем строки. 
  Для этого в регулярных выражениях применяется символ <code>s</code></p></li>
  </ul>
  <h4>Флаг i. Регистр символов</h4>
  <p>Рассмотрим следующий пример:</p>
  <pre class="brush:js;">
  const initialText = "привет Мир";
  const exp = /мир/;
  const result = exp.test(initialText); // false
  </pre>
  <p>Здесь совпадения строки с выражением нет, так как "Мир" отличается от "мир" по регистру. В этом случае надо изменить регулярное выражение, добавив в него свойство 
  <code>ignoreCase</code>:</p>
  <pre class="brush:js;">const exp = /мир/i;</pre>
  <p>Ну и также мы можем использовать сразу несколько свойств:</p>
  <pre class="brush:js;">const exp = /мир/ig;</pre>
  <h4>Флаг s</h4>
  <p>Флаг <span class="b">s</span> или <code>dotAll</code> позволяет сопоставить символ <span class="b">.</span> (точка) с любым символом, в том числе и с разделителем строки. Например, возьмем следующий пример:</p>
  <pre class="brush:js;">
  const text = "hello\nworld";
  const exp = /hello world/;
  const result = exp.test(text); // false
  console.log(result);	// false
  </pre>
  <p>Здесь в строке "hello\nworld" слова "hello" и "hello" разделены переносом строки (например, мы имеем дело с многострочным текстом). Однако, например, мы хотим, 
  чтобы JavaScript не учитывал перенос строки и чтобы данный текст соответствовал регулярному выражению <code>/hello world/</code>. В этом случае мы можем применить 
  флаг <span class="b">s</span>:</p>
  <pre class="brush:js;">
  const text = "hello\nworld";
  const exp = /hello.world/s;
  const result = exp.test(text); // true
  console.log(result);	// true
  </pre>
  <p>В выражении <code>/hello.world/s</code> точка означает произвольный символ. Однако без флага s данное выражение не будет соответствовать многострочному тексту.</p>
  `;
}

//=====================================================================================
function less63(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Регулярные выражения в методах String</h2><div class="date">Последнее обновление: 10.09.2021</div>
  
    <p>Ряд методов объекта String могут использовать регулярные выражения в качестве параметра.</p>
  <h3>Разделение строки. Метод split</h3>
  <p>Метод split может использовать регулярные выражения для разделения строк. Например, разделим приложение по словам:</p>
  <pre class="brush:js;">
  const initialText = "Сегодня была прекрасная погода";
  const exp = /\s/;
  const result = initialText.split(exp);
  result.forEach(value =&gt; console.log(value));
  </pre>
  <p>Вывод браузера:</p>
  <pre class="browser">
  Сегодня
  была
  прекрасная
  погода
  </pre>
  <h3>Метод match</h3>
  <p>Для поиска всех соответствий в строке применяется метод <span class="bb">match()</span>:</p>
  <pre class="brush:js;">
  const initialText = "Он пришел домой и сделал домашнюю работу";
  const exp = /дом[а-я]*/gi;
  const result = initialText.match(exp);
  result.forEach(value =&gt; console.log(value));
  </pre>
  <p>Символ звездочки указывает на возможность наличия после строки "дом" неопределенного количества символов от а до я. В итоге в массиве result 
  окажутся следующие слова:</p>
  <pre class="browser">
  домой
  домашнюю
  </pre>
  <h3>Поиск в строке. Метод search</h3>
  <p>Метод search находит индекс первого включения соответствия в строке:</p>
  <pre class="brush:js;">
  const initialText = "hello world";
  const exp = /wor/;
  const result = initialText.search(exp);
  console.log(result); // 6
  </pre>
  <h3>Замена. Методы replace</h3>
  <p>Метод replace позволяет заменить все соответствия регулярному выражению определенной строкой:</p>
  <pre class="brush:js;">
  let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
  const exp = /чай/gi;
  menu = menu.replace(exp, "кофе");
  console.log(menu);
  </pre>
  <p>Вывод браузера:</p>
  <pre class="browser">Завтрак: каша, кофе. Обед: суп, кофе. Ужин: салат, кофе.</pre>`;
}

//=====================================================================================
function less64(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Синтаксис регулярных выражений</h2><div class="date">Последнее обновление: 06.09.2021</div>
  
    <p>Рассмотрим базовые моменты синтаксиса регулярных выражений.</p>
  <h3>Метасимволы</h3>
  <p>Регулярные выражения также могут использовать метасимволы - символы, которые имеют определенный смысл:</p>
  <ul>
  <li><p><code>\d</code>: соответствует любой цифре от 0 до 9</p></li>
  <li><p><code>\D</code>: соответствует любому символу, который не является цифрой</p></li>
  <li><p><code>\w</code>: соответствует любой букве, цифре или символу подчеркивания (диапазоны A–Z, a–z, 0–9)</p></li>
  <li><p><code>\W</code>: соответствует любому символу, который не является буквой, цифрой или символом подчеркивания (то есть не находится 
  в следующих диапазонах A–Z, a–z, 0–9)</p></li>
  <li><p><code>\s</code>: соответствует пробелу</p></li>
  <li><p><code>\S</code>: соответствует любому символу, который не является пробелом</p></li>
  <li><p><code>.</code>: соответствует любому символу</p></li>
  </ul>
  <p>Здесь надо заметить, что метасимвол \w применяется только для букв латинского алфавита, кириллические символы для него не подходят.</p>
  <p>Так, стандартный формат номера телефона <code>+1-234-567-8901</code> соответствует регулярному выражению <code>\d-\d\d\d-\d\d\d-\d\d\d\d</code>. 
  Например, заменим числа номера нулями:</p>
  <pre class="brush:js;">
  let phoneNumber = "+1-234-567-8901";
  let myExp = /\d-\d\d\d-\d\d\d-\d\d\d\d/;
  phoneNumber = phoneNumber.replace(myExp, "00000000000");
  document.write(phoneNumber);
  </pre>
  <h3>Модификаторы</h3>
  <p>Кроме выше рассмотренных элементов регулярных выражений есть еще одна группа комбинаций, которая указывает, как символы в строке будут повторяться. 
  Такие комбинации еще называют модификаторами:</p>
  <ul>
  <li><p><code>{n}</code>: соответствует n-ому количеству повторений предыдущего символа. Например, <code>h{3}</code> соответствует подстроке "hhh"</p></li>
  <li><p><code>{n,}</code>: соответствует n и более количеству повторений предыдущего символа. Например, <code>h{3,}</code> соответствует подстрокам 
  "hhh", "hhhh", "hhhhh" и т.д.</p></li>
  <li><p><code>{n,m}</code>: соответствует от n до m повторений предыдущего символа. Например, <code>h{2, 4}</code> соответствует подстрокам 
  "hh", "hhh", "hhhh".</p></li>
  <li><p><code>?</code>: соответствует одному вхождению предыдущего символа в подстроку или его отсутствию в подстроке. Например, <code>/h?ome/</code> соответствует подстрокам 
  "home" и "ome".</p></li>
  <li><p><code>+</code>: соответствует одному и более повторений предыдущего символа</p></li>
  <li><p><code>*</code>: соответствует любому количеству повторений или отсутствию предыдущего символа</p></li>
  <li><p><code>^</code>: соответствует началу строки. Например, <code>^h</code> соответствует строке "home", но не "ohma", так как h должен представлять начало строки</p></li>
  <li><p><code>$</code>: соответствует концу строки. Например, <code>м$</code> соответствует строке "дом", так как строка должна оканчиваться на букву м</p></li>
  </ul>
  <p>Например, возьмем номер тот же телефона. Ему соответствует регулярное выражение <code>\d-\d\d\d-\d\d\d-\d\d\d\d</code>. Однако с 
  помощью выше рассмотренных комбинаций мы его можем упростить: <code>\d-\d{3}-\d{3}-\d{4}</code></p>
  <p>Также надо отметить, что так как символы ?, +, * имеют особый смысл в регулярных выражениях, то чтобы их использовать в обычным для них значении 
  (например, нам надо заменить знак плюс в строке на минус), то данные символы надо экранировать с помощью слеша:</p>
  <pre class="brush:js;">
  let phoneNumber = "+1-234-567-8901";
  let myExp = /\+\d-\d{3}-\d{3}-\d{4}/;
  phoneNumber = phoneNumber.replace(myExp, "80000000000");
  console.log(phoneNumber);
  </pre>
  <p>Отдельно рассмотрим применение комбинации '\b', которая указывает на соответствие в пределах слова. Например, у нас есть 
  следующая строка: "Языки обучения: Java, JavaScript, C++". Со временем мы решили, что Java надо заменить на C#. Но простая замена приведет также 
  к замене строки "JavaScript" на "C#Script", что недопустимо. И в этом случае мы можем проводить замену, если регулярное выражение соответствует 
  всему слову:</p>
  <pre class="brush:js;">
  let initialText = "Языки обучения: Java, JavaScript, C++";
  let exp = /\bJava\b/g;
  let result = initialText.replace(exp, "C#");
  console.log(result); // Языки обучения: C#, JavaScript, C++
  </pre>
  <p>Но при использовании '\b' надо учитывать, что в JavaScript отсутствует полноценная поддержка юникода, поэтому применять '\b' мы сможем только к англоязычным словам.</p>
  `;
}

//=====================================================================================
function less65(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Группы в регулярных выражениях</h2><div class="date">Последнее обновление: 07.09.2021</div>
  
    <h3>Определение групп в регулярных выражениях</h3>
  <p>Для поиска в строке более сложных соответствий применяются группы. В регулярных выражениях группы заключаются в скобки. Например, 
  у нас есть следующий код html, который содержит тег изображения: '&lt;img src="picture.png" /&gt;'. И допустим, нам надо вычленить из этого 
  кода пути к изображениям:</p>
  <pre class="brush:js;">
  let initialText = '&lt;img src= "picture.png" /&gt;'; 
  let exp = /[a-z]+\.(png|jpg)/i;
  let result = initialText.match(exp); 
  result.forEach(function(value, index, array){
    
    console.log(value);
  })
  </pre>
  <p>Вывод браузера:</p>
  <pre class="browser">
  picture.png
  png
  </pre>
  <p>Первая часть до скобок ([a-z]+\.) указывает на наличие в строке от 1 и более символов из диапазона a-z, после которых идет точка. Так как точка 
  является специальным символом в регулярных выражениях, то она экранируется слешем. А дальше идет группа: <code>(png|jpg)</code>. 
  Эта группа указывает, что после точки может использоваться как "png", так и "jpg".</p>
  <h3>Получение значений групп</h3>
  <p>Преимуществом использованием групп в регулярных выражениях является то, что мы можем получить значения каждой отдельной группы. Например, как известно, в разных 
  странах используются разные форматы дат. Что, если мы хотим получаем дату в формате "год-месяц-день" и хотим преобразовать ее в какой-то другой формат? 
  В этом случае для каждого отдельного компонента мы можем определить свою группу:</p>
  <pre class="brush:js;">
  const exp = /(\d{4})-(\d{2})-(\d{2})/;
  const result = exp.exec("2021-09-06");
  
  console.log(result[0]);	// 2021-09-06
  console.log(result[1]);	// 2021
  console.log(result[2]);	// 09
  console.log(result[3]);	// 06
  console.log(\`\${result[3]}.\${result[2]}.\${result[1]}\`); // 06.09.2021
  </pre>
  <p>Здесь применяется регулярное выражение "/(\d{4})-(\d{2})-(\d{2})/", где определены три группы:</p>
  <ol>
  <li><p>Первая группа <code>(\d{4})</code> соответствует числу из четырех цифр</p></li>
  <li><p>Вторая группа <code>(\d{2})</code> соответствует числу из двух цифр</p></li>
  <li><p>Третья группа аналогична второй</p></li>
  </ol>
  <p>Полученный результат представляет массив, где первый элемент (с индексом 0) всегда представляет подстроку, совпавшую с регулярным выражением. 
  Все последующие элементы этого массива представляют группы. То есть первая группа имеет индекс 1, вторая - индекс 2 и так далее.</p>
  <h3>Именнованные группы</h3>
  <p>JavaScript позволяет назначить каждой группе в регулярных выражениях определенное имя. С помощью этого имени потом можно получить значение, которое соответствует этой группе. 
  Для установки имени групы внутри скобок, которые определяют группу, ставится знак вопроса, после которого в угловых скобках идет название группы:</p>
  <pre class="brush:js;">(?&lt;название_группы&gt; ... )</pre>
  <p>Рассмотрим следующий пример:</p>
  <pre class="brush:js;">
  const exp = /(?&lt;year&gt;\d{4})-(?&lt;month&gt;\d{2})-(?&lt;day&gt;\d{2})/u;
  const result = exp.exec("2021-09-06");
  console.log(result.groups);			// {year: "2021", month: "09", day: "06"}
  console.log(result.groups.year);	// 2021
  console.log(result.groups.month);	// 09
  console.log(result.groups.day);		// 06
  </pre>
  <p>Здесь регулярное выражение определяет три группы. Первая группа называется "year", вторая - "month" и третья "day". При получении результата 
  мы можем обаться к каждой группе через свойство <code>groups</code>. Это свойство представляет объект, в котором свойства называются так же, как и группы, и содержат значения для каждой группы:</p>
  <pre class="brush:js;">console.log(result.groups);			// {year: "2021", month: "09", day: "06"}</pre>
  <p>Соответственно с помощью названия группы мы можем получить значение для определенной группы.</p>
  <h3>Утверждения</h3>
  <p>Утверждения или <span class="b">assertiobs</span> позвляют получить подстроку, которая соответствует регулярному выражению и которая предваряется или, наоборо, не предваряется 
  определенным выражением.</p>
  <p>Положительное утверждение (когда подстрока должна предваряться другой подстрокой) определяется с помощью выражения:</p>
  <pre class="brush:js;">(?&lt;=...)</pre>
  <p>После знака равно = идет выражение, которым должна предваряться подстрока.</p>
  <p>Отрицательное утверждение (когда подстрока НЕ должна предваряться другой подстрокой) определяется с помощью выражения:</p>
  <pre class="brush:js;">(?&lt;!...)</pre>
  <p>После восклицательного знака ! идет выражение, которым НЕ должна предваряться подстрока.</p>
  <p>Возьмем простую задачу. Допустим у нас есть некоторая информация с какой-то суммой. Но эта сумма может быть оределена в долларах, в эвро, в рублях и так далее. Что-то наподобие:</p>
  <pre class="brush:js;">
  const text1 = "All costs: $10.53";
  const text2 = "All costs: €10.53";
  
  const exp = /\d+(\.\d*)?/;
  const result1 = exp.exec(text1);
  console.log(result1[0]);	// 10.53
  
  const result2 = exp.exec(text2);
  console.log(result2[0]);	 // 10.53
  </pre>
  <p>Здесь мы видим, что и сумма в долларах () и сумма в евро соответствует нашему регулярному выражению. Но что, если мы хотим получить только сумму 
  в долларах. Для этого применим положительное утверждение:</p>
  <pre class="brush:js;">
  const text1 = "All costs: $10.53";
  const text2 = "All costs: €10.53";
  
  const exp = /(?&lt;=\$)\d+(\.\d*)?/;
  
  const result1 = exp.exec(text1);
  console.log(result1);	// ["10.53", ".53", index: 12, input: "All costs: $10.53", groups: undefined]
  
  const result2 = exp.exec(text2);
  console.log(result2);	 // null
  </pre>
  <p>Группа <code>(?&lt;=\$)</code> укзывает, что перед строкой должен идти знак доллара $. Если его нет, то метод <code>exec()</code> не найдет соответствий и возвратит null.</p>
  `;
}

//=====================================================================================
function less70(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Встроенные объекты</h1><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Кроме возможности создавать свои объекты JavaScript также предоставляет набор встроенных типов объектов, которые мы можем применять в различных ситуациях.</p>
  <h2>Объект Date. Работа с датами</h2>
  <p>Объект <span class="b">Date</span> позволяет работать с датами и временем в JavaScript.</p>
  <p>Существуют различные способы создания объекта Date. Первый способ заключается в использовании пустого конструктора без параметров:</p>
  <pre class="brush:js;">
  var currentDate = new Date();
  document.write(currentDate);
  </pre>
  <p>В этом случае объект будет указывать на текущую дату компьютера:</p>
  <img src="pics/4.1.png" alt="Создание объекта Date в JavaScript" />
  <p>Второй способ заключается в передаче в конструктор Date количества миллисекунд, которые прошли с начала эпохи Unix, то есть с 1 января 1970 
  года 00:00:00 GMT:</p>
  <pre class="brush:js;">
  var myDate = new Date(1359270000000);
  document.write(myDate); // Sun Jan 27 2013 10:00:00 GMT+0300 (RTZ 2 (зима))
  </pre>
  <p>Третий способ состоит в передаче в конструктор Date дня, месяца и года:</p>
  <pre class="brush:js;">
  var myDate = new Date("27 March 2008");
  // или так
  // var myDate = new Date("3/27/2008");
  document.write(myDate); // Thu Mar 27 2008 00:00:00 GMT+0300 (RTZ 2 (зима))
  </pre>
  <p>Если мы используем полное название месяца, то оно пишется в по-английски, если используем сокращенный вариант, тогда используется формат месяц/день/год.</p>
  <p>Четвертый способ состоит в передаче в конструктор Date всех параметров даты и времени:</p>
  <pre class="brush:js;">
  var myDate = new Date(2012,11,25,18,30,20,10); // Tue Dec 25 2012 18:30:20 GMT+0300 (RTZ 2 (зима))
  </pre>
  <p>В данном случае используются по порядку следующие параметры: <code>new Date(год, месяц, число, час, минуты, секунды, миллисекунды)</code>. 
  При этом надо учитывать, что отсчет месяцев начинается с нуля, то есть январь - 0, а декабрь - 11.</p>
  <h3>Получение даты и времени</h3>
  <p>Для получения различных компонентов даты применяется ряд методов:</p>
  <ul>
  <li><p><span class="b">getDate()</span>: возвращает день месяца</p></li>
  <li><p><span class="b">getDay()</span>: возвращает день недели (отсчет начинается с 0 - воскресенье, и последний день - 6 - суббота)</p></li>
  <li><p><span class="b">getMonth()</span>: возвращает номер месяца (отсчет начинается с нуля, то есть месяц с номер 0 - январь)</p></li>
  <li><p><span class="b">getFullYear()</span>: возвращает год</p></li>
  <li><p><span class="b">toDateString()</span>: возвращает полную дату в виде строки</p></li>
  <li><p><span class="b">getHours()</span>: возвращает час (от 0 до 23)</p></li>
  <li><p><span class="b">getMinutes()</span>: возвращает минуты (от 0 до 59)</p></li>
  <li><p><span class="b">getSeconds()</span>: возвращает секунды (от 0 до 59)</p></li>
  <li><p><span class="b">getMilliseconds()</span>: возвращает миллисекунды (от 0 до 999)</p></li>
  <li><p><span class="b">toTimeString()</span>: возвращает полное время в виде строки</p></li>
  </ul>
  <p>Получим текущую дату:</p>
  <pre class="brush:js;">
  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        
  var myDate = new Date();
  var fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + 
          " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
  document.write(fullDate); // Сегодня: 18 Август 2015, Вторник
  </pre>
  <p>Перевести из числовых значений в более привычные названия для дней недели и месяцев используются массивы. Получив индекс дня недели (<code>myDate.getDay()</code>) 
  и индекс месяца (<code>myDate.getMonth()</code>) можно получить нужный элемент из массива.</p>
  <p>Теперь получим текущее время:</p>
  <pre class="brush:js;">
  var welcome;
  var myDate = new Date();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  if (minute &lt; 10) {
    minute = "0" + minute;
  }
  if (second &lt; 10) {
    second = "0" + second;
  }
  if (hour &lt; 12) {
    welcome = "Доброе утро";
  } else if (hour &lt; 17) {
    welcome = "Добрый день";
  } else {
    welcome = "Добрый вечер";
  }
  document.write(welcome + ", текущее время: " + hour + 
          ":" + minute + ":" + second); // Добрый вечер, текущее время: 22:50:39
  </pre>
  <h3>Установка даты и времени</h3>
  <p>Коме задания параметров даты в конструкторе для установки мы также можем использовать дополнительные методы объекта Date:</p>
  <ul>
  <li><p><span class="b">setDate()</span>: установка дня в дате</p></li>
  <li><p><span class="b">setMonth()</span>: уставовка месяца (отсчет начинается с нуля, то есть месяц с номер 0 - январь)</p></li>
  <li><p><span class="b">setFullYear()</span>: устанавливает год</p></li>
  <li><p><span class="b">setHours()</span>: установка часа</p></li>
  <li><p><span class="b">setMinutes()</span>: установка минут</p></li>
  <li><p><span class="b">setSeconds()</span>: установка секунд</p></li>
  <li><p><span class="b">setMilliseconds()</span>: установка миллисекунд</p></li>
  </ul>
  <p>Установим дату:</p>
  <pre class="brush:js;">
  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четвег", "Пятница", "Суббота"];
  var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        
  var myDate = new Date();
  myDate.setDate(15);
  myDate.setMonth(6);
  myDate.setYear(2013);
  
  var fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + 
          " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
  document.write(fullDate); // 15 Июль 2013, Понедельник
  </pre>
  <p>При установке значений мы можем передать величину, большую, чем максимальное допустимое значение. Например, установить для часа число 54:</p>
  <pre class="brush:js;">
  myDate.setHour(54);
  </pre>
  <p>В этом случае значение часа будет равно 54 - 24 * 2 = 6, а оставшиеся часы будут составлять два дня (24 * 2), что прибавит к дате два дня. То же самое действует и 
  в отношении дней, минут, секунд, миллисекунд и месяцев.</p>
  `;
}

//=====================================================================================
function less71(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект Math. Математические операции</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Объект Math предоставляет ряд математических функций, которые можно использовать при вычислениях. Рассмотрим основные математические функции.</p>
  <h3>abs()</h3>
  <p>Функция <code>abs()</code> возвращает абсолютное значение числа:</p>
  <pre class="brush:js;">
  var x = -25;
  document.write(Math.abs(x)); // 25
  var y = 34;
  document.write(Math.abs(y)); // 34
  </pre>
  <h3>min() и max()</h3>
  <p>Функции <code>min()</code> и <code>max()</code> возвращают соответственно минимальное и максимальное значение из набора чисел:</p>
  <pre class="brush:js;">
  var max = Math.max(19, 45); // 45
  var min = Math.min(33, 24); // 24
  </pre>
  <p>Эти функции необязательно должны принимать два числа, в них можно передавать и большее количество чисел:</p>
  <pre class="brush:js;">var max = Math.max(1, 2, 3, -9, 46, -23); // 46</pre>
  <h3>ceil()</h3>
  <p>Функция <code>ceil()</code> округляет число до следующего наибольшего целого числа:</p>
  <pre class="brush:js;">
  var x = Math.ceil(9.2); // 10
  var y = Math.ceil(-5.9); // -5
  </pre>
  <p>Выражение <code>Math.ceil(9.2)</code> возвращает число 10, так как число 10 следующее наибольшее целое число после 9.2. И также 
  выражение <code>Math.ceil(-5.9)</code> возвращает -5, потому что число -5 следующее наибольшее целое после -5.9</p>
  <h3>floor()</h3>
  <p>Функция <code>floor()</code> округляет число до следующего наименьшего целого числа:</p>
  <pre class="brush:js;">
  var x = Math.floor(9.2); // 9
  var y = Math.floor(-5.9); // -6
  </pre>
  <h3>round()</h3>
  <p>Функция <code>round()</code> округляет число до следующего наименьшего целого числа, если его десятичная часть меньше 0.5. Если же десятичная 
  часть равна или больше 0.5, то округление идет до ближайшего наибольшего целого числа:</p>
  <pre class="brush:js;">
  var x = Math.round(5.5); // 6
  var y = Math.round(5.4); // 5
  var z = Math.round(-5.4); // -5
  var n = Math.round(-5.5); // -5
  var m = Math.round(-5.6); // -6
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(n);
  </pre>
  <h3>random()</h3>
  <p>Функция <code>random()</code> возвращает случайное число с плавающей точкой их диапазона от 0 до 1:</p>
  <pre class="brush:js;">
  var x = Math.random();
  </pre>
  <h3>pow()</h3>
  <p>Функция <code>pow()</code> возвращает число в определенной степени. Например, возведем число 2 в степень 3:</p>
  <pre class="brush:js;">
  var x = Math.pow(2, 3); // 8
  </pre>
  <h3>sqrt()</h3>
  <p>Функция <code>sqrt()</code> возвращает квадратный корень числа:</p>
  <pre class="brush:js;">
  var x = Math.sqrt(121); // 11
  var y = Math.sqrt(9); // 3
  var z = Math.sqrt(20); // 4.47213595499958
  </pre>
  <h3>log()</h3>
  <p>Функция <code>log()</code> возвращает натуральный логарифм числа:</p>
  <pre class="brush:js;">
  var x = Math.log(1); // 0
  var z = Math.log(10); // 2.302585092994046
  </pre>
  <h3>Тригонометрические функции</h3>
  <p>Целый ряд функций представляют тригонометрические функции: <code>sin()</code> (вычисляет синус угла), 
  <code>cos()</code> (вычисляет косинус угла), <code>tan()</code> (вычисляет тангенс угла).</p>
  <pre class="brush:js;">
  var x = Math.sin(90); // 0.8939966636005579
  var y = Math.cos(0); // 1
  var z = Math.tan(45); // 1.6197751905438615
  </pre>
  <p>Функция <code>asin()</code> вычисляет арксинус числа, <code>acos</code> - арккосинус, а <code>atan()</code> - арктангенс числа:</p>
  <pre class="brush:js;">
  var x = Math.asin(0.9); // 1.1197695149986342
  var y = Math.acos(1); // 1
  var z = Math.atan(1); // 0.7853981633974483
  </pre>
  <h3>Константы</h3>
  <p>Кроме методов объект Math также определяет набор встроенных констант, которые можно использовать в различных вычислениях:</p>
  <ul>
  <li><p><code>Math.PI</code> (число PI): 3.141592653589793</p></li>
  <li><p><code>Math.SQRT2</code> (квадратный корень из двух): 1.4142135623730951</p></li>
  <li><p><code>Math.SQRT1_2</code> (половина от квадратного корня из двух): 0.7071067811865476</p></li>
  <li><p><code>Math.E</code> (число e или число Эйлера): 2.718281828459045</p></li>
  <li><p><code>Math.LN2</code> (натуральный логарифм числа 2): 0.6931471805599453</p></li>
  <li><p><code>Math.LN10</code> (натуральный логарифм числа 10): 2.302585092994046</p></li>
  <li><p><code>Math.LOG2E</code> (двоичный логарифм числа e): 1.4426950408889634</p></li>
  <li><p><code>Math.LOG10E</code> (десятичный логарифм числа e): 0.4342944819032518</p></li>
  </ul>
  <p>Используем константы в вычислениях:</p>
  <pre class="brush:js;">
  var x = Math.log(Math.E); // 1
  var z = Math.tan(Math.PI/4); // 0.9999999999999999
  </pre>`;
}

//=====================================================================================
function less72(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект Number</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Объект Number представляет числа. Чтобы создать число, надо передать в конструктор Number число или строку, представляющую число:</p>
  <pre class="brush:js;">
  var x = new Number(34);
  var y = new Number('34');
  document.write(x+y); // 68
  </pre>
  <p>Определения x и y в данном случае будут практически аналогичны.</p>
  <p>Однако создавать объект Number можно и просто присвоив переменной определенное число:</p>
  <pre class="brush:js;">
  var z = 34;
  </pre>
  <p>Объект Number предоставляет ряд свойств и методов. Некоторые его свойства:</p>
  <ul>
  <li><p><code>Number.MAX_VALUE</code>: наибольшее возможное целое число. Приблизительно равно 1.79E+308. Числа, которые больше этого значения, рассматриваются как Infinity</p></li>
  <li><p><code>Number.MIN_VALUE</code>: наименьшее возможное положительное целое число. Приблизительно равно 5e-324 (где-то около нуля)</p></li>
  <li><p><code>Number.NaN</code>: специальное значение, которое указывает, что объект не является числом</p></li>
  <li><p><code>Number.NEGATIVE_INFINITY</code>: значение, которое обозначает отрицательную неопределенность и которое возникает при переполнении. Например, если мы складываем два 
  отрицательных числа, которые по модулю равны Number.MAX_VALUE. Например:</p>
  <pre class="brush:js;">
  var x = -1 * Number.MAX_VALUE
  var y = -1 * Number.MAX_VALUE
  var z = x + y;
  if(z===Number.NEGATIVE_INFINITY)
    document.write("отрицательная неопределенность");
  else
    document.write(z);
  </pre>
  </li>
  <li><p><code>Number.POSITIVE_INFINITY</code>: положительная неопределенность. Также, как и отрицательная неопределенность, возникает при переполнении, 
  только теперь в положительную сторону:</p>
  <pre class="brush:js;">
  var x = Number.MAX_VALUE
  var y = Number.MAX_VALUE
  var z = x * y;
  if(z===Number.POSITIVE_INFINITY)
    document.write("положительная неопределенность");
  else
    document.write(z);
  </pre>
  </li>
  </ul>
  <p>Некоторые основные методы:</p>
  <ul>
  <li><p><code>isNaN()</code>: определяет, является ли объект числом. Если объект не является числом, то возвращается значение true:</p>
  <pre class="brush:js;">
  var a = Number.isNaN(Number.NaN); // true
  var b = Number.isNaN(true); // false - new Number(true) = 1
  var c = Number.isNaN(null);  // false - new Number(null) = 0
  var d = Number.isNaN(25);  // false
  var e = Number.isNaN("54"); // false
  </pre>
  <p>Но следующее выражение вернет false, хотя значение не является числом:</p>
  <pre class="brush:js;">
  var f = Number.isNaN("hello"); // false
  </pre>
  <p>Чтобы избежать подобных ситуаций, лучше применять глобальную функцию <span class="bb">isNaN</span>:</p>
  <pre class="brush:js;">
  var f = isNaN("hello"); // true
  </pre>
  </li>
  <li><p><code>parseFloat()</code>: преобразует строку в число с плавающей точкой. Например:</p>
  <pre class="brush:js;">
  var a = Number.parseFloat("34.90"); // 34.9
  document.write(a);
  var b = Number.parseFloat("hello"); // NaN
  document.write(b);
  var c = Number.parseFloat("34hello"); // 34
  document.write(c);
  </pre>
  </li>
  <li><p><code>parseInt()</code>: преобразует строку в целое число. Например:</p>
  <pre class="brush:js;">
  var a = Number.parseInt("34.90"); // 34
  document.write(a);
  var b = Number.parseInt("hello"); // NaN
  document.write(b);
  var c = Number.parseInt("25hello"); // 25
  document.write(c);
  </pre>
  </li>
  <li><p><code>toFixed()</code>: оставляет в числе с плавающей точкой определенное количество знаков в дробной части. Например:</p>
  <pre class="brush:js;">
  var a =  10 / 1.44;
  document.write("До метода toFixed(): " + a + "&lt;br/&gt;");
  a = a.toFixed(2); // оставляем два знака после запятой
  document.write("После метода toFixed(): " + a + "&lt;br/&gt;");
  </pre>
  <p>Вывод браузера:</p>
  <pre class="browser">
  До метода toFixed(): 6.944444444444445
  После метода toFixed(): 6.94
  </pre>
  </li>
  </ul>`;
}

//=====================================================================================
function less73(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Символы</h2><div class="date">Последнее обновление: 17.08.2021</div>
  
    <p>Символ или тип <span class="b">Symbol</span> представляет некоторое уникальное значение.</p>
  <p>Для определения символа применяется конструктор типа <span class="b">Symbol</span>. Например, создадим простейший символ:</p>
  <pre class="brush:js;">
  const tom = Symbol("Tom");
  console.log(tom);	// Symbol(Tom)
  </pre>
  <p>Причем каждый символ <span class="b">уникален</span>. Так, попробуем создать два одинаковых символа:</p>
  <pre class="brush:js;">
  const tom = Symbol("Tom");
  console.log(tom);	// Symbol(Tom)
  
  const tomas = Symbol("Tom");
  console.log(tomas);	// Symbol(Tom)
  
  console.log(tom == tomas);		// false
  console.log(tom === tomas);		// false
  </pre>
  <p>Несмотря на то, что оба создаваемых выше в примее символа инициализированы одним и тем же значением, но оба оператора - равенства и эквивалентности при 
  сравнению этих символа возвращают <code>false</code>. То есть символы всегда уникальны.</p>
  <h3>Символы как идентификаторы свойств объектов</h3>
  <p>Основной областью применения символов являются определение идентификаторов свойств объектов. То есть, если вкратце, символы позволяют избежать ситуаций, когда 
  несколько свойств объекта имеют одинаковые названия. Возможно, данная ситуация может показаться искусственной: ну как мы можем определить в объекте два одинакоых свойства? 
  Однако если свойства добавляются динамически в довольно большой программе или даже где-то во внешнем коде, который мы не можем контролировать, то задача по контролю за идентификаторами свойств усложняется.</p>
  <p>Для примера возьмем следующую задачу: в комании работают три программиста, один из 
  которых старший разработчик, а остальные два - младшие разработчики. Но при этом два из разработчиков имеют одинаковые имена. Скажем, один Том является старшим разработчиком, 
  а Сэм и другой Том - младшие разработчики. Например, мы могли бы представить подобную компанию так:</p>
  <pre class="brush:js;">
  const company = { 
    "Tom": "senior",
    "Sam": "junior",
    "Tom": "junior"
  }
  for(developer in company) {
    console.log(\`\${developer} - \${company[developer]}\`);
  }
  </pre>
  <p>Однако консольный вывод покажет, что в нашей компании только два разработчика, поскольку названия двух из них совпадают:</p>
  <div class="console"><pre class="consoletext">
  Tom - junior
  Sam - junior
  </pre></div>
  <p>Теперь применим символы:</p>
  <pre class="brush:js;">
  const company = { 
    [Symbol("Tom")]: "senior",
    [Symbol("Sam")]: "junior",
    [Symbol("Tom")]: "junior"
  }
  const developers = Object.getOwnPropertySymbols(company);
  for(developer of developers) {
    console.log(\`\${developer.toString()} - \${company[developer]}\`);
  }
  </pre>
  <p>Для получения всех символов из объекта применяется функция <span class="b">Object.getOwnPropertySymbols()</span>, в которую передается объект. Возвращает эта функция набор символов, 
  которые мы можем перебрать в цикле. Для получения текстового представления символов можно применять метод <code>toString()</code> символа. А для получения 
  значения, как и в общем случае, применяется синтаксис массивов: <code>company[developer]</code>. В итоге мы получим следующий консольный вывод:</p>
  <div class="console"><pre class="consoletext">
  Symbol(Tom) - senior
  Symbol(Sam) - junior
  Symbol(Tom) - junior
  </pre></div>
  <p>Также можно динамически добавлять свойства с символьными идентификаторами в объект:</p>
  <pre class="brush:js;">
  const company = { };
  company[Symbol("Tom")]= "senior";
  company[Symbol("Sam")]= "junior";
  company[Symbol("Tom")]= "junior";
  </pre>`;
}

//=====================================================================================
function less74(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Proxy</h2><div class="date">Последнее обновление: 30.08.2021</div>
  
    <p><span class="b">Прокси (Proxy)</span> представляет объект, который позволяет перехватывать выполнение операций по отношению к некотоому объекту и переопределять его поведение.</p>
  <p>Для создания объекта Proxy применяется конструктор <span class="b">Proxy()</span>:</p>
  <pre class="brush:js;">
  const proxy = new Proxy(target, handler);
  </pre>
  <p>Конструктор Proxy принимает два параметра:</p>
  <ul>
  <li><p><code>target</code> - цель создания прокси, это может быть любой объект, к которому применяется Proxy</p></li>
  <li><p><code>handler</code> - другой объект, который определяет, какие именно операции объекта target будут перехватываться и переопределяться и как именно.</p></li>
  </ul>
  <p>Рассмотрим простейший пример:</p>
  <pre class="brush:js;">
  // объект, к которому применяется прокси
  const target = {name: "Tom"};
  // объект, который определяет, как будет переопределяться target
  const handler = {};
  // объект прокси
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.name); 	// Tom
  </pre>
  <p>Итак, в примере выше <code>target</code> - это объект, к которому будет применяться проксирование. В данном случае этот объект имеет свойство 
  <code>name</code>.</p>
  <pre class="brush:js;">const target = {name: "Tom"};</pre>
  <p>Далее создается пустой обработчик handler:</p>
  <pre class="brush:js;">const handler = {};</pre>
  <p>В принципе этот объект должен определять, как будет переопределяться объект target. Но пока оставим его пустым.</p>
  <p>Затем создаем объект Proxy, передавая в его конструктор объекты <code>target</code> и <code>handler</code>.</p>
  <pre class="brush:js;">const proxy = new Proxy(target, handler);</pre>
  <p>Проксирование объекта (в данном случае объекта <code>target</code>) означает, что через прокси мы можем обращаться к функциональности этого объекта. И в данном случае 
  через объект proxy мы можем обратиться к свойству <code>name</code> проксированного объекта <code>target</code>:</p>
  <pre class="brush:js;">
  console.log(proxy.name); 	// Tom
  </pre>
  <p>И поскольку мы использовали пустой handler, который ничего не переопределяет, то по сути прокси ведет себя как оригинальный объект target.</p>
  <h3>Переопределение функциональности объекта</h3>
  <p>Выше мы выполнили проксирование объекта, но пока никак не переопределяли его поведение. Ключевым в данном случае является определение обработчика <span class="b">handler</span>, 
  который может перехватывать обращения к свойствам проксированного объекта. Этот обработчик может определять два метода: <span class="b">get</span> 
  и <span class="b">set</span>.</p>
  <h4>Метод get и получение свойств объекта</h4>
  <p>Метод <span class="b">get</span> перехватывает обращения к свойству при получении его значения и возвращает для этого свойства некоторое значение:</p>
  <pre class="brush:js;">
  const handler = {
    get: function(target, prop, receiver) {
      return некоторое_значение;
    }
  };
  </pre>
  <p>Метод <span class="b">get</span> имеет три параметра:</p>
  <ul>
  <li><p><code>target</code>: сам проксированный объект. Благодаря этому параметру мы можем обратиться к функциональности оригинального объекта</p></li>
  <li><p><code>prop</code>: название свойства, к которому идет обращение</p></li>
  <li><p><code>receiver</code>: объект Proxy, через который выполняется проксирование</p></li>
  </ul>
  <p>Возьмем следующий пример:</p>
  <pre class="brush:js;">
  const target = {name: "Tom"};
  const handler = {
    get: function(target, prop, receiver) {
      return "Tomas Smith";
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.name); 	// Tomas Smith
  </pre>
  <p>Здесь в обработчике <code>handler</code> в методе <code>get</code> возвращается строка "Tomas Smith":</p>
  <pre class="brush:js;">
  get: function(target, prop, receiver) {
    return "Tomas Smith";
  }
  </pre>
  <p>Это приведет к тому, что при обращение к любому свойству прокси-объекта будет возвращаться данная строка:</p>
  <pre class="brush:js;">
  console.log(proxy.name); 	// Tomas Smith
  </pre>
  <p>Так, мы выполнили перехват обращения к свойству и простейшее переопределение. При этом мы можем обащаться и к оригинальному объекту, который проксируется:</p>
  <pre class="brush:js;">
  const target = {name: "Tom"};
  const handler = {
    get: function(target, prop) {
      return "Name: " + target.name;
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.name); 	// Name: Tom
  </pre>
  <p>Здесь обработчик возвращает строку <code>"Name: " + target.name</code>, где <code>target.name</code> представляет обращение к свойству name оригинального объекта. 
  Естественно логика возвращение значения свойства может более сложной.</p>
  <p>Но возьмем более сложный объект - с двумя свойствами:</p>
  <pre class="brush:js;">
  const target = {name: "Tom", age: 37};
  const handler = {
    get: function(target, prop) {
      return target[prop];
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.name); 	// Tom
  console.log(proxy.age); 	// 37
  </pre>
  <p>Здесь целевой объект имеет два свойства: name и age. В обработчике мы перехватываем обращение к ним, но никак его не переопределяем, а просто возвращаем 
  значения свойств оригинального объекта:</p>
  <pre class="brush:js;">return target[prop];</pre>
  <p>Для обращения к свойствам целевого объекта применяется синтаксис массивов.</p>
  <p>Но также мы можем проверить, к какому именно свойству идет обращение, и выполнить некоторое переопределение:</p>
  <pre class="brush:js;">
  const target = {name: "Tom", age: 37};
  const handler = {
    get: function(target, prop) {
    if(prop==="name")
      return target.name.toUpperCase();
    else
      return target[prop];
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.name); 	// TOM
  console.log(proxy.age); 	// 37
  </pre>
  <p>В данном случае, если обращение идет к свойству <code>name</code>, то есть к свойству, которое хранит строку, то вызываем у этой строки метод <code>toUpperCase()</code> и 
  переводим ее в верхний регистр.</p>
  <h4>Установка свойства и метод set</h4>
  <p>Метод <span class="b">set</span> перехватывает обращения к свойству при установке его значения:</p>
  <pre class="brush:js;">
  const handler = {
    set: function(target, property, value, receiver) {
      
    }
  };
  </pre>
  <p>Метод <span class="b">set</span> имеет четыре параметра:</p>
  <ul>
  <li><p><code>target</code>: оригинальный объект, к которому идет проксирование</p></li>
  <li><p><code>property</code>: название свойства, к которому идет обращение</p></li>
  <li><p><code>value</code>: устанавливаемое значение</p></li>
  <li><p><code>receiver</code>: объект Proxy, через который выполняется проксирование</p></li>
  </ul>
  <p>Рассмотрим на примере:</p>
  <pre class="brush:js;">
  const target = {name: "Tom", age: 37};
  const handler = {
    set: function(target, prop, value) {
      console.log(value);
      target[prop] = value;
    }
  };
  const proxy = new Proxy(target, handler);
  proxy.name = "Tomas";
  console.log(proxy.name); 	// Tomas
  proxy.age = 22;				
  console.log(proxy.age); 	// 22
  </pre>
  <p>В данном примере в методе set сначала логирруем передаваеемое свойству значение, затем устанавливаем свойство:</p>
  <pre class="brush:js;">target[prop] = value;</pre>
  <p>Немного изменим пример:</p>
  <pre class="brush:js;">
  const target = {name: "Tom", age: 37};
  const handler = {
    set: function(target, prop, value) {
    if(prop==="age" && value &lt; 1)
      console.log("Некорректный возраст");
    else
      return target[prop] = value;
    }
  };
  const proxy = new Proxy(target, handler);
  proxy.name = "Tomas";
  console.log(proxy.name); 	// Tomas
  proxy.age = -199;			// Некорректный возраст
  console.log(proxy.age); 	// 37
  proxy.age = 22;				
  console.log(proxy.age); 	// 22
  </pre>
  <p>Здесь в методе <code>set</code> обработчика проверяем, если идет установка свойства <code>age</code> и значение меньше 1, то просто выводим сообщение о некорректности данных</p>
  <pre class="brush:js;">
  if(prop==="age" && value &lt; 1)
    console.log("Некорректный возраст");
  </pre>
  <p>Иначе передаем значение свойству оригинального объекта:</p>
  <pre class="brush:js;">
  else
    return target[prop] = value;
  </pre>`;
}

//=====================================================================================
function less80(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Обработка ошибок</h1><h2>Конструкция try..catch..finally</h2><div class="date">Последнее обновление: 30.08.2021</div>
  
    <p>В процессе работы прогаммы могут возникать различные ошибки, которые нарушают привычный ход программы и даже заставляют ее прервать выполнение. 
  Язык JavaScript имеет инструменты для обаботки таких ситуаций.</p>
  <p>Простейшая ситуация - вызов функции, которой не существует:</p>
  <pre class="brush:js;">
  callSomeFunc();
  
  console.log("Остальные инструкции");
  </pre>
  <p>Здесь вызывается функция <code>callSomeFunc()</code>, которая нигде не определена. Соответственно при вызове этой функции мы столкнемся с ошибкой:</p>
  <pre class="browser">
  <span style="color:red;">Uncaught ReferenceError: callSomeFunc is not defined</span>
  </pre>
  <p>Все остальные инструкции, которые идут после строки, на которой возникла ошибка, не выполняется. Программа заканчивает свою работу.</p>
  <p>Ситуация может показаться искуственной, поскольку мы знаем, что функция callSomeFunc нигде не определена. Однако когда мы имеем дело с большой программой, 
  различные куски которой определяли разные разработчики, становится сложнее контоллировать код. И таких ситуаций может быть много. Какие-то мы можем сами отследить и предупредить, а 
  какие-то нет.</p>
  <p>Для обработки подобных ситуаций JavaScript предоставляет конструкцию <span class="b">try...catch...finally</span>, которая имеет следующее формальное определение:</p>
  <pre class="brush:js;">
  try {
    инструкции блока try
  }
  catch (error) {
    инструкции блока catch
  }
  finally {
    инструкции блока finally
  }
  </pre>
  <p>После оператора <span class="b">try</span> определяется блок кода. В этот блок помещаются инструкции, при выполнении которых может возникнуть 
  потенциальная ошибка.</p>
  <p>Затем идет оператор <span class="b">catch</span>. После этого оператора в круглых скобках указывается название объекта, который будет содержать информацию об ошибке. И далее идет 
  блок catch. Этот блок выполняется только при возникновении ошибки в блоке try.</p>
  <p>После блока catch идет оператор <span class="b">finally</span> со своим блоком инструкций. Этот блок выполняется в конце после блока try и catch вне 
  зависимости, возникла ошибка или нет.</p>
  <p>Стоит отметить, что только блок <span class="b">try</span> является обязательным. А один из остальных блоков - <span class="b">catch</span> или 
  <span class="b">finally</span> мы можем опустить. Однако один из этих блоков (не важно catch или finally) обязательно должен присуствовать. То есть мы можем использовать 
  следующие варианты этой конструкции:</p>
  <ul>
  <li><p>try...catch</p></li>
  <li><p>try...finally</p></li>
  <li><p>try...catch...finally</p></li>
  </ul>
  <p>Например, обработаем с помощью этой конструкцию предыдущую ситуацию с несуществующей функцией:</p>
  <pre class="brush:js;">
  try{
    callSomeFunc();
    console.log("Конец блока try");
  }
  catch{
    console.log("Возникла ошибка!");
  }
  console.log("Остальные инструкции");
  </pre>
  <p>Итак, сначала выполняется блок <span class="b">try</span>. Однако при выполнении первой же инструкции - вызова функции <code>callSomeFunc()</code> возникает ошибка. Это приведет к тому, что все последующие инструкции в 
  блоке <span class="b">try</span> НЕ будут выполняться. А управление перейдет к блоку <span class="b">catch</span>. В этом блоке выводится сообщение, что возникла ошибка. 
  После выполнения блока <span class="b">catch</span> выполняются остальные инструкции программы. Таким образом, программа не прерывает свою работу при возникновении ошибки и продолжает свою работу. 
  И в данном случае консольный вывод будет следующим:</p>
  <pre class="browser">
  Возникла ошибка!
  Остальные инструкции
  </pre>
  <p>Рассмотим другой пример:</p>
  <pre class="brush:js;">
  function callSomeFunc(){console.log("Функция callSomeFunc");}
  try{
    callSomeFunc();
    console.log("Конец блока try");
  }
  catch(error){
    console.log("Возникла ошибка!");
  }
  
  console.log("Остальные инструкции");
  </pre>
  <p>Теперь функция <code>callSomeFunc()</code> определена в прогамме, поэтому при вызове функции ошибки не произойдет, и блок <span class="b">try</span> доработает до конца. А блок <span class="b">catch</span> при отсутствии ошибки 
  не будет выолняться. И консольный вывод будет следующим:</p>
  <pre class="browser">
  Функция callSomeFunc
  Конец блока try
  Остальные инструкции
  </pre>
  <h3>Получение ошибки в блоке catch</h3>
  <p>В качестве в качестве параметра в блок catch передается объект с информацией об ошибке:</p>
  <pre class="brush:js;">
  try{
    callSomeFunc();
    console.log("Конец блока try");
  }
  catch(error){
    console.log("Возникла ошибка!");
    console.log(error);
  }
  </pre>
  <p>В этом случае мы получим консольный вывод на подобие следующего:</p>
  <pre class="browser">
  Возникла ошибка!
  ReferenceError: callSomeFunc is not defined
      at index.html:35
  </pre>
  <h3>Блок finally</h3>
  <p>Конструкция <span class="b">try</span> также может содержать блок <span class="b">finally</span>. Мы можем использовать этот блок вместе с блоком <span class="b">catch</span> или вместо него. 
  Блок <span class="b">finally</span> выполняется вне зависимости, произошла ошибка или нет. Например:</p>
  <pre class="brush:js;">
  try{
    callSomeFunc();
    console.log("Конец блока try");
  }
  catch{
    console.log("Произошла ошибка");
  }
  finally{
    console.log("Блок finally")
  }
  
  console.log("Остальные инструкции");
  </pre>
  <p>Консольный вывод программы:</p>
  <pre class="browser">
  Произошла ошибка
  Блок finally
  Остальные инструкции
  </pre>`;
}

//=====================================================================================
function less81(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Генерация ошибок и оператор throw</h2><div class="date">Последнее обновление: 30.08.2021</div>
  
    <p>Интерпретатор JavaScript генерирует ошибки для ряда ситуаций, например, при вызове несуществующей функции, при повторном присвоении константе значения и т.д. 
  Но при необходимости мы сами можем генерировать ошибки и определить условия, когда будет генерироваться ошибка.</p>
  <p>Например, рассмотрим следующую ситуацию:</p>
  <pre class="brush:js;">
  class Person{
   
      constructor(name, age){
          this.name = name;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
  const tom = new Person("Tom", -123);
  tom.print();	// Name: Tom  Age: -123
  </pre>
  <p>Класс Person описывает человека. В конструкторе класс получает значения для свойств name (имя) и age (возраст). Исходя из здравого смысла мы понимаем, что 
  возраст не может быть отрицательным. Тем не менее пока, исходя из логики класса, ничего не мешает при создании объекта Person передать ему для возраста отрицательное значение. 
  С точки зрения интерпретатора JavaScript ошибки нет, однако с точки логики и здравого смысла - это ошибка. Как исправить эту ситуацию? Есть различные способы, и 
  один из них заключается в генерации исключения.</p>
  <p>Для генерации исключения применяется оператор <span class="b">throw</span>, после которого указывается информация об ошибке:</p>
  <pre class="brush:js;">throw информация_об_ошибке;</pre>
  <p>Информация об ошибке может представлять любой объект.</p>
  <p>Так, сгенерируем исключение при передаче в конструктор Person отрицательного значения для свойства age:</p>
  <pre class="brush:js;">
  class Person{
   
      constructor(name, age){
      if(age &lt; 0) throw "Возраст должен быть положительным";
          this.name = name;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
  const tom = new Person("Tom", -123);	// Uncaught Возраст должен быть положительным
  tom.print();
  </pre>
  <p>В итоге при вызове конструктора Person будет сгенерировано исключение и программа завершится ошибкой. А на консоли браузера мы увидим информацию 
  об ошибке, которая указана после оператора <code>throw</code>:</p>
  <pre class="browser">
  <span style="color:red;">Uncaught Возраст должен быть положительным</span>
  </pre>
  <p>Как и в общем случае мы можем обработать эту ошибку с помощью блока <span class="b">try...catch</span>:</p>
  <pre class="brush:js;">
  class Person{
   
      constructor(name, age){
      if(age &lt; 0) throw "Возраст должен быть положительным";
          this.name = name;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
    
  try{
    const tom = new Person("Tom", -123);	// Uncaught Возраст должен быть положительным
    tom.print();
  }
  catch(error){
    console.log("Произошла ошибка");
    console.log(error);		// Возраст должен быть положительным
  }
  </pre>
  <p>Оператор <span class="b">throw</span> может вызываться в различных контекстах, например, в том же блоке <span class="b">try</span>:</p>
  <pre class="brush:js;">
  try{
    throw "Непредвиденная ошибка!";
  }
  catch(error){
    console.log(error);	// Непредвиденная ошибка!
  }
  </pre>`;
}

//=====================================================================================
function less82(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Типы ошибок</h2><div class="date">Последнее обновление: 30.08.2021</div>
  
    <p>В блоке <span class="b">catch</span> мы можем получить информацию об ошибке, которая представляет объект. Все ошибки, которые генерируются интерретатором JavaScript, 
  предоставляют объект типа <span class="b">Error</span>, который имеет ряд свойств:</p>
  <ul>
  <li><p><span class="b">message</span>: сообщение об ошибке</p></li>
  <li><p><span class="b">name</span>: тип ошибки</p></li>
  </ul>
  <p>Стоит отметить, что отдельные браузеры поддерживают еще ряд свойств, но их поведение в зависимости от браузера может отличаться:</p>
  <ul>
  <li><p><span class="b">fileName</span>: название файла с кодом JavaScript, где произошла ошибка</p></li>
  <li><p><span class="b">lineNumber</span>: строка в файле, где произошла ошибка</p></li>
  <li><p><span class="b">columnNumber</span>: столбец в строке, где произошла ошибка</p></li>
  <li><p><span class="b">stack</span>: стек ошибки</p></li>
  </ul>
  <p>Получим данные ошибки, например, при вызове несуществующей функции:</p>
  <pre class="brush:js;">
  try{
    callSomeFunc();
  }
  catch(error){
    console.log("Тип ошибки:", error.name);
    console.log("Ошибка:", error.message);
  }
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  Тип ошибки: ReferenceError
  Ошибка: callSomeFunc is not defined
  </pre>
  <h3>Типы ошибок</h3>
  <p>Выше мы рассмотрели, что генерируемая интерпретатором ошибка представляет тип Error, однако при вызове несуществующей функции 
  генерируется ошибка типа <span class="b">ReferenceError</span>. Дело в том, что тип Error представляет общий тип ошибок. В то же время есть конкретные типы ошибок для определенных ситуаций:</p>
  <ul>
  <li><p><span class="b">EvalError</span>: представляет ошибку, которая генерируется при выполнении глобальной функции <code>eval()</code></p></li>
  <li><p><span class="b">RangeError</span>: ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некотоого допустимого диапазона</p></li>
  <li><p><span class="b">ReferenceError</span>: ошибка генерируется при обращении к несуществующей ссылке</p></li>
  <li><p><span class="b">SyntaxError</span>: представляет ошибку синтаксиса</p></li>
  <li><p><span class="b">TypeError</span>: ошибка генерируется, если значение переменной или параметра представляют некорректный тип или пр попытке изменить значение, которое нельзя изменять</p></li>
  <li><p><span class="b">URIError</span>: ошибка генерируется при передаче функциям <code>encodeURI()</code> и <code>decodeURI()</code> некорректных значений</p></li>
  <li><p><span class="b">AggregateError</span>: предоставляет ошибку, которая объединяет несколько возникших ошибок</p></li>
  </ul>
  <p>Например, при попытке присвоить константе второй раз значение, генерируется ошибка <code>TypeError</code>:</p>
  <pre class="brush:js;">
  try{
    const num = 9;
    num = 7;
  }
  catch(error){
    console.log(error.name);		// TypeError
    console.log(error.message);		// Assignment to constant variable.
  }
  </pre>
  <h3>Применение типов ошибок</h3>
  <p>При генерации ошибок мы можем использовать встроенные типы ошибок. Например:</p>
  <pre class="brush:js;">
  class Person{
   
      constructor(name, age){
      if(age &lt; 0) throw new Error("Возраст должен быть положительным");
          this.name = name;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
    
  try{
    const tom = new Person("Tom", -45);
    tom.print();
  }
  catch(error){	
    console.log(error.message);	// Возраст должен быть положительным
  }
  </pre>
  <p>Здесь конструктор класса Person принимает значения для имени и возаста человека. Если передан отрицательный возраст, то генерируем ошибку в виде объекта Error. В качестве параметра в 
  конструктор Error передается сообщение об ошибке:</p>
  <pre class="brush:js;">if(age &lt; 0) throw new Error("Возраст должен быть положительным");</pre>
  <p>В итоге при обработке исключения в блоке catch мы сможем получить переданное сообщение об ошибке.</p>
  <p>Все остальные типы ошибок в качестве первого параметра в конструкторе также принимают сообщение об ошибке. Так, сгенерируем несколько типов ошибок:</p>
  <pre class="brush:js;">
  class Person{
   
      constructor(pName, pAge){
      
      const age = parseInt(pAge);
      if(isNaN(age))	throw new TypeError("Возраст должен представлять число");
      if(age &lt; 0 || age &gt; 120) throw new RangeError("Возраст должен быть больше 0 и меньше 120");
          this.name = pName;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
  </pre>
  <p>Поскольку для возраста можно ередатьне только число, но и вообще какое угодно значение, то вначале мы пытаемся преобразовать это значение в число с помощью 
  функции <code>parseInt()</code>:</p>
  <pre class="brush:js;">
  const age = parseInt(pAge);
  if(isNaN(age))	throw new TypeError("Возраст должен представлять число");
  </pre>
  <p>Далее с помощью функции <code>isNaN(age)</code> проверяем, является полученное число числом. Если age - НЕ число, то данная функция возвращает <code>true</code>. Поэтому 
  генерируется ошибка типа <code>TypeError</code>.</p>
  <p>Затем проверяем, что полученное число входит в допустимый диапазон. Если же не входит, генерируем ошибку типа <code>RangeError</code>:</p>
  <pre class="brush:js;">if(age &lt; 0 || age &gt; 120) throw new RangeError("Возраст должен быть больше 0 и меньше 120");</pre>
  <p>Проверим генерацию исключений:</p>
  <pre class="brush:js;">
  try{
    const tom = new Person("Tom", -45);
  }
  catch(error){	
    console.log(error.message);	// Возраст должен быть больше 0 и меньше 120
  }
  
  try{
    const bob = new Person("Bob", "bla bla");
  }
  catch(error){	
    console.log(error.message);	// Возраст должен представлять число
  }
  
  try{
    const sam = new Person("Sam", 23);
    sam.print();	// Name: Sam  Age: 23
  }
  catch(error){	
    console.log(error.message);
  }
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  Возраст должен быть больше 0 и меньше 120
  Возраст должен представлять число
  Name: Sam  Age: 23
  </pre>
  <h3>Обработка нескольких типов ошибок</h3>
  <p>При выполнении одного и то же кода могут генерироваться ошибки разных типов. И иногда бывает необходимо разграничить обработку разных типов. 
  В этом случае мы можем проверять тип возникшей ошибки. Например, пример выше с классом Person:</p>
  <pre class="brush:js;">
  class Person{
   
      constructor(pName, pAge){
      
      const age = parseInt(pAge);
      if(isNaN(age))	throw new TypeError("Возраст должен представлять число");
      if(age &lt; 0 || age &gt; 120) throw new RangeError("Возраст должен быть больше 0 и меньше 120");
          this.name = pName;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
    
  try{
    const tom = new Person("Tom", -45);
    const bob = new Person("Bob", "bla bla");
  }
  catch(error){	
    if (error instanceof TypeError) {
      console.log("Некорректный тип данных.");
    } else if (error instanceof RangeError) {
      console.log("Недопустимое значение");
    }
    console.log(error.message);
  }
  </pre>
  <h3>Создание своих типов ошибок</h3>
  <p>Мы не ограничены встроенными только встроенными типами ошибок и при необходимости можем создавать свои типы ошибок, предназначеные для каких-то конкретных ситуаций. 
  Например:</p>
  <pre class="brush:js;">
  class PersonError extends Error {
    constructor(value, ...params) {
      // остальные параметры передаем в конструктор базового класса
      super(...params)
      this.name = "PersonError"
      this.argument = value;
    }
  }
  
  class Person{
   
      constructor(pName, pAge){
      
      const age = parseInt(pAge);
      if(isNaN(age))	throw new PersonError(pAge, "Возраст должен представлять число");
      if(age &lt; 0 || age &gt; 120) throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120");
          this.name = pName;
          this.age = age;
      }
    print(){ console.log(\`Name: \${this.name}  Age: \${this.age}\`);}
  }
    
  try{
    //const tom = new Person("Tom", -45);
    const bob = new Person("Bob", "bla bla");
  }
  catch(error){	
    if (error instanceof PersonError) {
      console.log("Ошибка типа Person. Некорректное значение:", error.argument);
    }
    console.log(error.message);
  }
  </pre>
  <p>Консольный вывод</p>
  <pre class="browser">
  Ошибка типа Person. Некорректное значение: bla bla
  Возраст должен представлять число
  </pre>
  <p>Для представления ошибки класса Person здесь определен тип <code>PersonError</code>, который наследуется от класса Error:</p>
  <pre class="brush:js;">
  class PersonError extends Error {
    constructor(value, ...params) {
      // остальные параметры передаем в конструктор базового класса
      super(...params)
      this.name = "PersonError"
      this.argument = value;
    }
  }
  </pre>
  <p>В конструкторе мы определяем дополнительное свойство - <code>argument</code>. Оно будет хранить значение, которое вызвало ошибку. С помощью параметра <code>value</code> конструктора 
  получаем это значение. Кроме того, переопреляем имя типа с помощью свойства <code>this.name</code>.</p>
  <p>В классе Person используем этот тип, передавая в конструктор PersonError соответствующие значения:</p>
  <pre class="brush:js;">
  if(isNaN(age))	throw new PersonError(pAge, "Возраст должен представлять число");
  if(age &lt; 0 || age &gt; 120) throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120");
  </pre>
  <p>Затем при обработки исключения мы можем проверить тип, и если он представляет класс PersonError, то обратиться к его свойству <code>argument</code>:</p>
  <pre class="brush:js;">
  catch(error){	
    if (error instanceof PersonError) {
      console.log("Ошибка типа Person. Некорректное значение:", error.argument);
    }
    console.log(error.message);
  }
  </pre>`;
}

//=====================================================================================
function less90(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Работа с браузером и BOM</h1>
    <h2>Browser Object Model и объект window</h2><div class="date">Последнее обновление: 1.11.2015</div>
    
      <p>Большое значение в JavaScript имеет работа с веб-браузером и теми объектами, которые он предоставляет. Например, использование объектов браузера 
    позволяет манипулировать элементами html, которые имеются на странице, или взаимодействовать с пользователем.</p>
    <p>Все объекты, через которые JavaScript взаимодействует с браузером, описываются таким понятием как <span class="bb">Browser Object Model</span> (Объектная Модель Браузера).</p>
    <p>Browser Object Model можно представить в виде следующей схемы:</p>
    <img src="pics/bom.png" alt="Browser Object Model in JavaScript" />
    <p>В вершине находится главный объект - объект <span class="bb">window</span>, который представляет собой браузер. Этот объект в свою 
    очередь включает ряд других объектов, в частности, объект <span class="bb">document</span>, который представляет отдельную веб-страницу, отображаемую 
    в браузере.</p>
    <h3>Объект window</h3>
    <p>Объект <span class="bb">window</span> представляет собой окно веб-браузера, в котором размещаются веб-страницы. window является глобальным объектом, 
    поэтому при доступе к его свойствам и методам необязательно использовать его имя. Например, window имеет метод <span class="bb">alert()</span>, который отображает окно сообщения. 
    Но нам необязательно писать:</p>
    <pre class="brush:js;">window.alert("Привет мир!");</pre>
    <p>window можно не использовать:</p>
    <pre class="brush:js;">alert("Привет мир!");</pre>
    <p>Но так как данный объект глобальный, то это накладывает некоторые ограничения. Например:</p>
    <pre class="brush:js;">
    var alert = function(message){
    
      document.write("Сообщение: " + message);
    };
    window.alert("Привет мир!");
    </pre>
    <p>Все объявляемые в программе глобальные переменные или функции автоматически добавляются к объекту <code>window</code>. И поскольку название 
    новой функции будет совпадать с названием метода <code>alert()</code>, то произойдет переопределение этого метода в объекте window новой функцией.</p>
    <p>И если мы объявим в программе какую-нибудь глобальную переменную, то она нам доступна как свойство в объекте window:</p>
    <pre class="brush:js;">
    var message = "hello";
    document.write(window.message);
    </pre>`;
}

//=====================================================================================
function less91(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Управление окнами</h2><div class="date">Последнее обновление: 15.04.2022</div>
  
    <h3>Диалоговые окна</h3>
  <p>Для взаимодействия с пользователем в объекте window определен ряд методов, которые позволяют создавать диалоговые окна.</p>
  <p>Метод <span class="bb">alert()</span> выводит окно с сообщением:</p>
  <pre class="brush:js;">
  alert("hello world");
  </pre>
  <p>Метод <span class="bb">confirm()</span> отображает окно с сообщением, в котором пользователь должен подтвердить действие двух кнопок OK и Отмена. 
  В зависимости от выбора пользователя метод возвращает <code>true</code> (если пользователь нажал OK) или <code>false</code> 
   (если пользователь нажал кнопку Отмены):</p>
  <pre class="brush:js;">
  var result = confirm("Завершить выполнение программы?");
  if(result===true)
    document.write("Работа программы завершена");
  else
    document.write("Программа продолжает работать");
  </pre>
  <img src="pics/confirm.png" alt="Функция confirm в JavaScript" />
  <p>И метод <span class="bb">prompt()</span> позволяет с помощью диалогового окна запрашивать у пользователя какие-либо данные. Данный метод 
  возвращает введенное пользователем значение:</p>
  <pre class="brush:js;">
  var age = prompt("Введите свой возраст:");
  document.write("Вам " + age + " лет");
  </pre>
  <p>Если пользователь откажется вводить значение и нажмет на кнопку отмены, то метод возвратит значение null.</p>
  <img src="pics/prompt.png" alt="Функция prompt в JavaScript" />
  <h3>Открытие, закрытие и позиционирование окон</h3>
  <p>Объект window также предоставляет ряд методов для управления окнами браузера. Так, метод <span class="b">open()</span> открывает определенный ресурс 
  в новом окне или вкладке браузера. Стоит учитывать, что подобное действие лучше выполнять по действию пользователя, например, по нажатию на кнопку, потому что 
  в ином случае браузеры могут заблокировать подобные окна. Например, определим следующую страницу:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
      &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;button onclick="openWindow()"&gt;Click&lt;/button&gt;
  &lt;script&gt;
  function openWindow(){
    window.open("https://microsoft.com");
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Здесь на веб-странице определена кнопка - элемент button. У кнопки установлен атрибут <span class="b">onclick</span>, который указывает на функцию javascript, 
  которая будет выполняться по нажатию этой кнопки.</p>
  <p>В коде javascript определена функция <code>openWindow()</code>, которая выполняется по нажатию на кнопку. В этой функции выполняется функция <span class="b">window.open()</span>, 
  в которую в качестве первого параметра передается адрес - в данном случае "https://microsoft.com". И по нажатию на кнопку будет открываться в новой вкладке страницы "https://microsoft.com".</p>
  <img src="./pics/browser1.png" alt="window.open в javascript" />
  <p>Метод <code>open()</code> принимает ряд параметров:</p>
  <pre class="brush:js;">
  open();
  open(url);
  open(url, target);
  open(url, target, windowFeatures);
  </pre>
  <p>В качестве первого параметра - <span class="b">url</span> передается путь к ресурсу.</p>
  <p>Второй параметр - <span class="b">target</span> передается путь к ресурсу. Распространенные значения:</p>
  <ul>
  <li><p><span class="b">_self</span>: страница открывается в текущей вкладке</p></li>
  <li><p><span class="b">_blank</span>: страница открывается в новой вкладке или в отдельном окне</p></li>
  </ul>
  <p>Например, открытие адреса в той же вкладке:</p>
  <pre class="brush:js;">window.open("https://metanit.com", "_self");</pre>
  <p>Третий параметр позволяет установить набор стилевых характеристик окна. Каждая стилевая характеристика определяется в виде наборов <code>name=value</code>, где <code>name</code> - название стилевой характеристики, а 
  <code>value</code> - ее значение. Друг от друга стилевые характеристики отделены запятой.</p>
  <p>В частности, можно использовать следующие характеристики:</p>
  <ul>
  <li><p><code>popup</code>: указывает, будет ли открываться страница в отдельном всплывающем окне. Для этого может принимать такие 
  значения, как <code>yes</code>, <code>1</code> или <code>true</code>. Например:</p>
  <pre class="brush:js;">window.open("https://metanit.com", "_blank", "popup=yes");</pre>
  <img src="./pics/browser2.png" alt="всплывающие окна и window.open в javascript" /></li>
  <li><p><code>width</code> / <code>innerWidth</code>: ширина окна в пикселях. Например, <code>width=640</code></p></li>
  <li><p><code>height</code> / <code>innerHeight</code>: высота окна в пикселях. Например, <code>height=480</code></p></li>
  <li><p><code>left</code> / <code>screenX</code>: координата X относительно начала экрана в пикселях. Например, <code>left=0</code></p></li>
  <li><p><code>top</code> / <code>screenY</code>: координата Y относительно начала экрана в пикселях. Например, <code>top=0</code></p></li>
  </ul>
  <p>Пример применения нескольких параметров:</p>
  <pre class="brush:js;">window.open("https://metanit.com", "_blank", "width=600,height=400,left=500,top=200");</pre>
  <p>Стоит отметить, что функция возвращает ссылку на окно, и с помощью этой ссылки мы можем управлять окном.</p>
  <p>С помощью метода <span class="b">close()</span> можно закрыть окно. Например, откроем новое окно и через 5 секунд закроем его:</p>
  <pre class="brush:js;">
  function openWindow(){
    const popup = window.open("https://metanit.com", "_blank", "width=600,height=400");
    setTimeout(()=>popup.close(), 5000);
  }
  </pre>
  <p>Метод <span class="b">moveTo()</span> позволяет переместить окно на новую позицию:</p>
  <pre class="brush:js;">
  const popup = window.open("https://metanit.com", "_blank", "width=600,height=400");
  popup.moveTo(500,400);
  </pre>
  <p>В данном случае окно перемещается на позицию с координатами x=500, y=400 относительно левого верхнего угла экрана.</p>
  `;
}

//=====================================================================================
function less92(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>История браузера. Объект history</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Объект <span class="bb">history</span> предназначен для хранения истории посещений веб-страниц в браузере. Нам этот объект доступен через объект window.</p>
  <p>Все сведения о посещении пользователя хранятся в специальном стеке (history stack). С помощью свойства <span class="bb">length</span> 
  можно узнать, как много веб-станиц хранится в стеке:</p>
  <pre class="brush:js;">document.write("В истории " + history.length + " станиц");</pre>
  <p>Для перемещения по страницам в истории в объекте history определены методы <span class="bb">back()</span> (перемещение к прошлой посмотренной странице) 
  и <span class="bb">forward()</span> (перемещение к следующей просмотренной странице)</p>
  <pre class="brush:js;">history.back(); // перемещение назад</pre>
  <p>Также в объекте history определен специальный метод <span class="bb">go()</span>, который позволяет перемещаться вперед и назад по истории 
  на определенное число страниц. Например, переместимся на 2 страницы назад:</p>
  <pre class="brush:js;">history.go(-2);</pre>
  <p>Соответственно если надо переместиться на несколько страниц вперед, то в метод передается положительное значение. Например, переместимся вперед на три страницы:</p>
  <pre class="brush:js;">history.go(3);</pre>`;
}

//=====================================================================================
function less93(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект location</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Объект <span class="bb">location</span> содержит информацию о расположении текущей веб-страницы: URL, информацию о сервере, номер порта, протокол. С помощью 
  свойств объекта мы можем получить эту информацию:</p>
  <ul>
  <li><p><span class="bb">href</span>: полная строка запроса к ресурсу</p></li>
  <li><p><span class="bb">pathname</span>: путь к ресурсу</p></li>
  <li><p><span class="bb">origin</span>: общая схема запроса</p></li>
  <li><p><span class="bb">protocol</span>: протокол</p></li>
  <li><p><span class="bb">port</span>: порт, используемый ресурсом</p></li>
  <li><p><span class="bb">host</span>: хост</p></li>
  <li><p><span class="bb">hostname</span>: название хоста</p></li>
  <li><p><span class="bb">hash</span>: если строка запроса содержит символ решетки (#), то данное свойство возвращает ту часть строки, которая идет после этого символа</p></li>
  <li><p><span class="bb">search</span>: если строка запроса содержит знак вопроса (?), например,  то данное свойство возвращает ту часть строки, которая идет после знака вопроса</p></li>
  </ul>
  <p>Например, пусть есть следующая веб-страница <i>test.html</i>, которая лежит на локальном веб-сервере:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;script&gt;
  document.write("Строка запроса: " + location.href + "&lt;br /&gt;");
  document.write("Путь к ресурсу: " + location.pathname + "&lt;br /&gt;");
  document.write("Схема: " + location.origin + "&lt;br /&gt;");
  document.write("Протокол: " + location.protocol + "&lt;br /&gt;");
  document.write("Порт: " + location.port + "&lt;br /&gt;");
  document.write("Хост: " + location.host + "&lt;br /&gt;");
  document.write("Имя хоста: " + location.hostname + "&lt;br /&gt;");
  document.write("Хэш: " + location.hash + "&lt;br /&gt;");
  document.write("Поиск: " + location.search + "&lt;br /&gt;");
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <img src="pics/location.png" alt="Объект location в JavaScript" />
  <p>Также объект location предоставляет ряд методов, которые можно использовать для управления путем запроса:</p>
  <ul>
  <li><p><span class="bb">assign(url)</span>: загружает ресурс, который находится по пути url</p></li>
  <li><p><span class="bb">reload(forcedReload)</span>: перезагружает текущую веб-страницу. Параметр forcedReload указывает, надо ли использовать кэш 
  браузера. Если параметр равен true, то кэш не используется</p></li>
  <li><p><span class="bb">replace(url)</span>: заменяет текущую веб-станицу другим ресурсом, который находится по пути url. В отличие от метода 
  assign, который также загружает веб-станицу с другого ресурса, метод replace не сохраняет предыдущую веб-страницу в стеке истории переходов 
  history, поэтому мы не сможем вызвать метод history.back() для перехода к ней.</p></li>
  </ul>
  <p>Для перенаправления на другой ресурс мы можем использовать как свойства, так и методы location:</p>
  <pre class="brush:js;">
  location = "http://google.com";
  // аналогично
  // location.href = "http://google.com";
  // location.assign("http://google.com");
  </pre>
  <p>Переход на другой локальный ресурс:</p>
  <pre class="brush:js;">
  location.replace("index.html");
  </pre>`;
}

//=====================================================================================
function less94(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект navigator</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Объект navigator содержит информацию о браузере и операционной системе, в которой браузер запущен. Он определяет ряд свойств и методов, основным из которых 
  является свойство <span class="bb">userAgent</span>, представляющее браузер пользователя:</p>
  <pre class="brush:js;">document.write(navigator.userAgent);</pre>
  <p>Данное свойство хранит полную стоку юзер-агента, например, <code>Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36</code></p>
  <p>Чтобы вычленить из этой информации непосредственно браузер, можно попробовать найти в этой информации название браузера:</p>
  <pre class="brush:js;">
  var browser, uAgent = navigator.userAgent;
  
  if(uAgent.indexOf("Chrome") &gt; -1) {
      browser = "Google Chrome";
  } else if (uAgent.indexOf("Safari") &gt; -1) {
      browser = "Apple Safari";
  } else if (uAgent.indexOf("Opera") &gt; -1) {
      browser = "Opera";
  } else if (uAgent.indexOf("Firefox") &gt; -1) {
      browser = "Mozilla Firefox";
  } else if (uAgent.indexOf("MSIE") &gt; -1) {
      browser = "Microsoft Internet Explorer";
  }
  document.write(browser);
  </pre>
  <h3>Объект geolocation</h3>
  <p>Объект navigator хранит свойство geolocation, с помощью которого можно получить географическое положение пользователя. Для получения положения 
  используется метод <span class="bb">getCurrentPosition()</span>. Этот метод принимает два параметра: функцию, которая срабатывает при удачном запуске, и 
  функцию, которая срабатывает при ошибке запроса геоданных:</p>
  <pre class="brush:js;">
  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    
    document.write("Широта: " + latitude + "&lt;br/&gt;");
    document.write("Долгота: " + longitude + "&lt;br/&gt;");
    document.write("Высота: " + altitude + "&lt;br/&gt;");
    document.write("Скорость перемещения: " + speed + "&lt;br/&gt;");
  };
  
  function error(obj) {
    document.write("Ошибка при определении положения");
  };
  navigator.geolocation.getCurrentPosition(success, error);
  </pre>
  <p>В функцию, которая выполняется при удачном определении геоданных, передается позиция пользователя в виде параметра position. 
  Передаваемый объект имеет вложенный объект <span class="bb">coords</span>, с помощью свойство которого можно получить непосредственные координаты пользователя:</p>
  <ul>
  <li><p><code>latitude</code>: географическая широта</p></li>
  <li><p><code>longitude</code>: географическая долгота</p></li>
  <li><p><code>altitude</code>: высота</p></li>
  <li><p><code>speed</code>: скорость, с которой перемещается пользователь (например, если он идет или перемещается на транспорте)</p></li>
  </ul>
  <p>При этом надо учитывать, что в браузерах действует политика безопасности, которая при обращении к методу <code>geolocation.getCurrentPosition()</code> 
  отображает пользователю сообщение, в котором пользователь может подтвердить отправку географических координат. Если же пользователь откажется, то 
  будет срабатывать функция <code>error()</code>.</p>
  <img src="pics/geolocation.png" alt="Объект geolocation в JavaScript" />
  `;
}

//=====================================================================================
function less95(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Таймеры</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Для выполнения действий через определенные промежутки времени в объекте window предусмотрены функции таймеров. Есть два типа таймеров: 
  одни выполняются только один раз, а другие постоянно через промежуток времени.</p>
  <h3>Функция setTimeout</h3>
  <p>Для одноразового выполнения действий через промежуток времени предназначена функция <span class="bb">setTimeout()</span>. Она может принимать два параметра:</p>
  <pre class="brush:js;">var timerId = setTimeout(someFunction, period)</pre>
  <p>Параметр <code>period</code> указывает на промежуток, через который будет выполняться функция из параметра <code>someFunction</code>. А в качестве результата функция возвращает id таймера.</p>
  <pre class="brush:js;">
  function timerFunction() {
    document.write("выполнение функции setTimeout");
  }
  setTimeout(timerFunction, 3000);
  </pre>
  <p>В данном случае через 3 секунды после загрузки страницы произойдет срабатывание функции <code>timerFunction</code>.</p>
  <p>Для остановки таймера применяется функция <span class="bb">clearTimeout()</span>.</p>
  <pre class="brush:js;">
  function timerFunction() {
    document.write("выполнение функции setTimeout");
  }
  var timerId = setTimeout(timerFunction, 3000);
  clearTimeout(timerId);
  </pre>
  <h3>Функция setInterval</h3>
  <p>Функции <span class="bb">setInterval()</span> и <span class="bb">clearInterval()</span> работают аналогично функциям 
  <code>setTimeout()</code> и <code>clearTimeout()</code> с той лишь разницей, что <span class="bb">setInterval()</span> постоянно выполняет 
  определенную функцию через промежуток времени.</p>
  <p>Например, напишем небольшую программу для вывода текущего времени:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="time"&gt;&lt;/div&gt;
  &lt;script&gt;
  function updateTime() {
    document.getElementById("time").innerHTML = new Date().toTimeString();
  }
  setInterval(updateTime, 1000);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Здесь через каждую секунду (1000 миллисекунд) вызывается функция <code>updateTime()</code>, которая обновляет содержимое поля 
  <code>&lt;div id="time" &gt;</code>, устанавливая в качестве его кода html текущее вемя.</p>
  <h3>requestAnimationFrame()</h3>
  <p>Метод <span class="bb">requestAnimationFrame()</span> действует аналогично <code>setInterval()</code> за тем исключением, 
  что он больше заточен под анимации, работу с графикой и имеет ряд оптимизаций, которые улучшают его производительность.</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #rect {
      margin: 100px;
      width: 100px;
      height: 100px;
      background: #50c878;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="rect"&gt;&lt;/div&gt;
  &lt;script&gt;
  var square = document.getElementById("rect");
  var angle = 0;
  function rotate() {
    angle = (angle + 2)%360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
  }
  var id = window.requestAnimationFrame(rotate);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В метод <code>window.requestAnimationFrame()</code> передается функция, которая будет вызываться определенное количество раз (обычно 60) в секунду. 
  В данном случае в этот метод передается функция rotate, которая изменяет угол поворота блока на странице и затем обращается опять же к методу 
  <code>window.requestAnimationFrame(rotate)</code>.</p>
  <p>В качестве возвращаемого результата метод <code>window.requestAnimationFrame()</code> возвращает уникальный id, который может потом использоваться для 
  остановки анимации:</p>
  <pre class="brush:js;">window.cancelAnimationFrame(id);</pre>
  `;
}

//=====================================================================================
function less100(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Работа с DOM</h1>
    <h2>Введение в DOM</h2><div class="date">Последнее обновление: 1.11.2015</div>
    
      <p>Одой из ключевых задач JavaScript является взаимодействие с пользователем и манипуляция элементами веб-страницы. 
    Для JavaScript веб-страница доступна в виде объектной модели документа (document object model) или сокращенно DOM. DOM 
    описывает структуру веб-станицы в виде древовидного представления и предоставляет разработчикам способ получить доступ к отдельным элементам веб-станицы.</p>
    <p>Важно не путать понятия BOM (Browser Object Model - объектная модель браузера) и DOM (объектная модель документа). Если BOM 
    предоставляет доступ к браузеру и его свойствам в целом, то DOM предоставляет доступ к отдельной веб-странице или html-документу и его элементам.</p>
    <p>Например, рассмотрим простейшую страницу:</p>
    <pre class="brush:xml;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h2&gt;Page Header&lt;/h2&gt;
      &lt;div&gt;
        &lt;h3&gt;Block Header&lt;/h3&gt;
        &lt;p&gt;Text&lt;/p&gt;
      &lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <p>Дерево DOM для этой страницы будет выглядеть следующим образом:</p>
    <img src="pics/domtree.png" alt="DOM-tree in JavaScript" />
    <p>Таким образом, все компоненты упорядочены в DOM иерархическим образом, где каждый компонент представляет отдельный узел. То есть каждый элемент, например, 
    элемент <code>div</code>, представляет собой узел. Но также и текст внутри элемента представляет отдельный узел.</p>
    <p>Существует следующие виды узлов:</p>
    <ul>
    <li><p><span class="bb">Element</span>: html-элемент</p></li>
    <li><p><span class="bb">Attr</span>: атрибут html-элемента</p></li>
    <li><p><span class="bb">Document</span>: корневой узел html-документа</p></li>
    <li><p><span class="bb">DocumentType</span>: DTD или тип схемы XML-документа</p></li>
    <li><p><span class="bb">DocumentFragment</span>: место для временного хранения частей документа</p></li>
    <li><p><span class="bb">EntityReference</span>: ссылка на сущность XML-документа</p></li>
    <li><p><span class="bb">ProcessingInstruction</span>: инструкция обработки веб-страницы</p></li>
    <li><p><span class="bb">Comment</span>: элемент комментария</p></li>
    <li><p><span class="bb">Text</span>: текст элемента</p></li>
    <li><p><span class="bb">CDATASection</span>: секция CDATA в документе XML</p></li>
    <li><p><span class="bb">Entity</span>: необработанная сущность DTD</p></li>
    <li><p><span class="bb">Notation</span>: нотация, объявленная в DTD</p></li>
    </ul>
    <p>Несмотря на такое большое количество типов узлов, как правило, мы будем работать только с некоторыми из них.</p>
  `;
}

//=====================================================================================
function less101(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект document. Поиск элементов</h2><div class="date">Последнее обновление: 28.03.2018</div>
  
    <p>Для работы со структурой DOM в JavaScript предназначен объект <span class="b">document</span>, который определен в глобальном объекте 
  <span class="b">window</span>. Объект document предоставляет ряд свойств и методов для управления элементами страницы.</p>
  <h3>Поиск элементов</h3>
  <p>Для поиска элементов на странице применяются следующие методы:</p>
  <ul>
  <li><p><span class="b">getElementById(value)</span>: выбирает элемент, у которого атрибут <code>id</code> равен value</p>. Если элемента с таким идентификатором нет, то возвращается null</li>
  <li><p><span class="b">getElementsByTagName(value)</span>: выбирает все элементы, у которых тег равен value</p></li>
  <li><p><span class="b">getElementsByClassName(value)</span>: выбирает все элементы, которые имеют класс value</p></li>
  <li><p><span class="b">querySelector(value)</span>: выбирает первый элемент, который соответствует css-селектору value</p></li>
  <li><p><span class="b">querySelectorAll(value)</span>: выбирает все элементы, которые соответствуют css-селектору value</p></li>
  </ul>
  <p>Например, найдем элемент по id:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div&gt;
      &lt;h3 id="header"&gt;Block Header&lt;/h3&gt;
      &lt;p&gt;Text&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var headerElement = document.getElementById("header");
  document.write("Текст заголовка: " + headerElement.innerText);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>С помощью вызова <code>document.getElementById("header")</code> находим элемент, у которого id="header". А с помощью свойства 
  <span class="b">innerText</span> можно получить текст найденного элемента.</p>
  <p>Поиск по определенному тегу:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div&gt;
      &lt;h3&gt;Заголовок&lt;/h3&gt;
      &lt;p&gt;Первый абзац&lt;/p&gt;
      &lt;p&gt;Второй абзац&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var pElements = document.getElementsByTagName("p");
  
  for (var i = 0; i &lt; pElements.length; i++) {
    document.write("Текст параграфа: " + pElements[i].innerText + "&lt;br/&gt;");
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>С помощью вызова <code>document.getElementsByTagName("p")</code> находим все элементы параграфов. Этот вызов возвращает массив найденных 
  элементов. Поэтому, чтобы получить отдельные элементы массива, необходимо пробежаться по ним в цикле.</p>
  <p>Если нам надо получить только первый элемент, то можно к первому элементу найденной коллекции объектов:</p>
  <pre class="brush:js;">
  var pElement = document.getElementsByTagName("p")[0];
  document.write("Текст параграфа: " + pElement.innerText);
  </pre>
  <p>Получение элемента по классу:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="article"&gt;
      &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
      &lt;p class="text"&gt;Первый абзац&lt;/p&gt;
      &lt;p class="text"&gt;Второй абзац&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var articleDiv = document.getElementsByClassName("article")[0];
    console.log(articleDiv);
  var textElems = document.getElementsByClassName("text");
  for (var i = 0; i &lt; textElems.length; i++) {
    console.log(textElems[i]);
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Выбор по селектору css:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="annotation"&gt;
      &lt;p&gt;Аннотация статьи&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="text"&gt;
      &lt;p&gt;Первый абзац&lt;/p&gt;
      &lt;p&gt;Второй абзац&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var elem = document.querySelector(".annotation p");
  document.write("Текст селектора: " + elem.innerText);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Выражение <code>document.querySelector(".annotation p")</code> находит элемент, который соответствует селектору <code>.annotation p</code>. Если на странице 
  несколько элементов, соответствующих селектору, то метод выберет первый из них. В итоге браузер выведет:</p>
  <pre class="browser">
  Аннотация статьи
  
  Первый абзац
  
  Второй абзац
  
  Текст селектора: Аннотация статьи
  </pre>
  <p>Чтобы получить все элементы по селектору, можно подобным образом использовать метод <span class="b">document.querySelectorAll</span>, 
  который возвращает массив найденных элементов:</p>
  <pre class="brush:js;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="annotation"&gt;
      &lt;p&gt;Аннотация статьи&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="text"&gt;
      &lt;p&gt;Первый абзац&lt;/p&gt;
      &lt;p&gt;Второй абзац&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var elems = document.querySelectorAll(".text p");
  
  for (var i = 0; i &lt; elems.length; i++) {
    document.write("Текст селектора " + i + ": " + elems[i].innerText + "&lt;br/&gt;");
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Вывод браузера:</p>
  <pre class="browser">
  Аннотация статьи
  
  Первый абзац
  
  Второй абзац
  
  Текст селектора 0: Первый абзац
  Текст селектора 1: Второй абзац
  </pre>`;
}

//=====================================================================================
function less102(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Свойства объекта document</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Кроме ранее рассмотренных методов объект document позволяет обратиться к определенным элементам веб-страницы через свойства:</p>
  <ul>
  <li><p><span class="bb">documentElement</span>: предоставляет доступ к корневому элементу <code>&lt;html&gt;</code></p></li>
  <li><p><span class="bb">body</span>: предоставляет доступ к элементу <code>&lt;body&gt;</code> на веб-странице</p></li>
  <li><p><span class="bb">images</span>: содержит коллекцию всех объектов изображений (элементов img)</p></li>
  <li><p><span class="bb">links</span>: содержит коллекцию ссылок - элементов <code>&lt;a&gt;</code> и <code>&lt;area&gt;</code>, 
  у которых определен атрибут <code>href</code></p></li>
  <li><p><span class="bb">anchors</span>: предоставляет доступ к коллекции элементов <code>&lt;a&gt;</code>, у которых определен 
  атрибут <code>name</code></p></li>
  <li><p><span class="bb">forms</span>: содержит коллекцию всех форм на веб-странице</p></li>
  </ul>
  <p>Эти свойства не предоставляют доступ ко всем элементам, однако позволяют получить наиболее часто используемые элементы на веб-странице. 
  Например, получим корневой узел документа:</p>
  <pre class="brush:js;">
  var container = document.documentElement;
  </pre>
  <p>Получим все изображения на странице:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;img src="picure1.png" alt="Картинка 1" /&gt;
    &lt;img src="picure2.png" alt="Картинка 2" /&gt;
    &lt;img src="picure3.png" alt="Картинка 3" /&gt;
  &lt;script&gt;
  var images = document.images;
  // изменим первое изображение
  images[0].src="pics/picture_4.jpg";
  images[0].alt="Новая картинка";
  // перебирем все изображения
  for(var i=0; i&lt;images.length;i++){
  
    document.write("&lt;br/&gt;" + images[i].src);
    document.write("&lt;br/&gt;" + images[i].alt);
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Подобно тому, как в коде html мы можем установить атрибуты у элемента img, так и в коде javascript мы можем через свойства <code>src</code> и <code>alt</code> 
  получить и установить значения этих атрибутов.</p>
  <p>Рассмотрим получение всех ссылок на странице:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;a href="article1.html"&gt;Статья 1&lt;/a&gt;
    &lt;a href="article2.html"&gt;Статья 2&lt;/a&gt;
    &lt;a href="article3.html"&gt;Статья 3&lt;/a&gt;
  &lt;script&gt;
  var links = document.links;
  
  for(var i=0; i&lt;links.length;i++){
  
    document.write("&lt;br/&gt;" + links[i].innerText);
    document.write("&lt;br/&gt;" + links[i].href);
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Опять же, так как у ссылки определен атрибут <code>href</code>, то при переборе ссылок мы можем получить его значение.</p>
  `;
}

//=====================================================================================
function less103(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект Node. Навигация по DOM</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Каждый отдельный узел, будь то html-элемент, его атрибут или текст, в структуре DOM представлен объектом <span class="bb">Node</span>. 
  Этот объект предоставляет ряд свойств, с помощью которых мы можем получить информацию о данном узле:</p>
  <ul>
  <li><p><span class="bb">childNodes</span>: содержит коллекцию дочерних узлов</p></li>
  <li><p><span class="bb">firstChild</span>: возвращает первый дочерний узел текущего узла</p></li>
  <li><p><span class="bb">lastChild</span>: возвращает последний дочерний узел текущего узла</p></li>
  <li><p><span class="bb">previousSibling</span>: возвращает предыдущий элемент, который находится на одном уровне с текущим</p></li>
  <li><p><span class="bb">nextSibling</span>: возвращает следующий элемент, который находится на одном уровне с текущим</p></li>
  <li><p><span class="bb">ownerDocument</span>: возвращает корневой узел документа</p></li>
  <li><p><span class="bb">parentNode</span>: возвращает элемент, который содержит текущий узел</p></li>
  <li><p><span class="bb">nodeName</span>: возвращает имя узла</p></li>
  <li><p><span class="bb">nodeType</span>: возвращает тип узла в виде числа</p></li>
  <li><p><span class="bb">nodeValue</span>: возвращает или устанавливает значение узла в виде простого текста</p></li>
  </ul>
  <p>Перебирем все дочерние узлы элемента:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="article"&gt;
      &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
      &lt;p&gt;Первый абзац&lt;/p&gt;
      &lt;p&gt;Второй абзац&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var articleDiv = document.querySelector("div.article");
  var nodes = articleDiv.childNodes;
  for(var i=0; i&lt;nodes.length;i++){
  
    var type = "";
    if(nodes[i].nodeType===1)
      type="элемент";
    else if(nodes[i].nodeType===2)
      type="атрибут";
    else if(nodes[i].nodeType===3)
      type="текст";
      
    console.log(nodes[i].nodeName + ": " + type);
  }
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>С помощью метода <code>document.querySelector("div.article")</code> выбираем элемент div с классом article и пробегаемся по его дочерним 
  узлам. И в цикле выводим имя узла и его тип с помощью свойств nodeName и nodeType. Каждому типу соответствует определенное число:</p>
  <table class="tab">
  <tr class="tabhead"><td><p>nodeType</p></td><td><p>Тип узла</p></td></tr>
  <tr><td><p>1</p></td><td><p>элемент</p></td></tr>
  <tr><td><p>2</p></td><td><p>атрибут</p></td></tr>
  <tr><td><p>3</p></td><td><p>текст</p></td></tr>
  </table>
  <p>Но несмотря на то, что в блоке div на странице только три узла: h3 и 2 параграфа, но консоль отобразит нам семь узлов.</p>
  <img src="pics/childnodes.png" alt="Перебор дочерних узлов элемента в JavaScript" />
  <p>Дело в том, что пробелы между узлами также считаются за отдельные текстовые узлы. Если бы пробелов не было:</p>
  <pre class="brush:xml;">&lt;div class="article"&gt;&lt;h3&gt;Заголовок статьи&lt;/h3&gt;&lt;p&gt;Первый абзац&lt;/p&gt;&lt;p&gt;Второй абзац&lt;/p&gt;&lt;/div&gt;</pre>
  <p>То при переборе мы бы обнаружили только три дочерних узла, как и ожидалось.</p>
  <h3>Навигация по узлам</h3>
  <p>Используя свойства <code>nextSibling</code> и <code>previousSibling</code> можно также пройтись по узлам в прямом или обратном порядке. Например, 
  для прохода по элементам на той же станице мы могли бы использовать следующий код javascript:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  
  // получаем первый дочерний элемент
  var node = articleDiv.firstChild;
  console.log(node.nodeName);
  // обращаемся к следующему узлу, пока он определен
  while((node=node.nextSibling)!==null){
  
    console.log(node.nodeName);
  }
  </pre>
  <p>Тут все аналогично, только в цикле мы обращаемся к следующему узлу, который находится на одном уровне с текущим (или сестринскому узлу). И результат 
  будет такой же.</p>
  <p>Также можно перебрать узлы в обратном порядке: сначала получаем последний узел, а затем обращаемся к предыдущему сестринскому узлу:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  
  // получаем последний дочерний элемент
  var node = articleDiv.lastChild;
  console.log(node.nodeName);
  // обращаемся к предыдующему узлу, пока он определен
  while((node=node.previousSibling)!==null){
  
    console.log(node.nodeName);
  }
  </pre>`;
}

//=====================================================================================
function less104(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Создание, добавление и удаление элементов веб-станицы</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Для создания элементов объект document имеет следующие методы:</p>
  <ul>
  <li><p><span class="bb">createElement(elementName)</span>: создает элемент html, тег которого передается в качестве параметра. Возвращает созданный элемент</p></li>
  <li><p><span class="bb">createTextNode(text)</span>: создает и возвращает текстовый узел. В качестве параметра передается текст узла.</p></li>
  </ul>
  <pre class="brush:js;">
  var elem = document.createElement("div");
  var elemText = document.createTextNode("Привет мир");
  </pre>
  <p>Таким образом, переменная <code>elem</code> будет хранить ссылку на элемент <code>div</code>. Однако одного создания элементов недостаточно, 
  их еще надо добавить на веб-страницу.</p>
  <p>Для добавления элементов мы можем использовать один из методов объекта Node:</p>
  <ul>
  <li><p><span class="bb">appendChild(newNode)</span>: добавляет новый узел newNode в конец коллекции дочерних узлов</p></li>
  <li><p><span class="bb">insertBefore(newNode, referenceNode)</span>:  добавляет новый узел newNode перед узлом referenceNode</p></li>
  </ul>
  <p>Используем метод appendChild:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="article"&gt;
      &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
      &lt;p&gt;Первый абзац&lt;/p&gt;
      &lt;p&gt;Второй абзац&lt;/p&gt;
    &lt;/div&gt;
  &lt;script&gt;
  var articleDiv = document.querySelector("div.article");
  // создаем элемент
  var elem = document.createElement("h2");
  // создаем для него текст
  var elemText = document.createTextNode("Привет мир");
  // добавляем текст в элемент в качестве дочернего элемента
  elem.appendChild(elemText);
  // добавляем элемент в блок div
  articleDiv.appendChild(elem);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Сначала создаем обычный элемент заголовка h2 и текстовый узел. Затем текстовый узел добавляем в элемент заголовка. Затем заголовок добавляем в один из элементов веб-страницы:</p>
  <img src="pics/appendChild.png" alt="Добавление элемента в JavaScript" />
  <p>Однако нам необязательно для определения текста внутри элемента создавать дополнительный текстовый узел, так как мы можем 
  воспользоваться свойством <span class="bb">textContent</span> и напрямую ему присвоить текст:</p>
  <pre class="brush:js;">
  var elem = document.createElement("h2");
  elem.textContent = "Привет мир";
  </pre>
  <p>В этом случае текстовый узел будет создан неявно при установке текста.</p>
  <p>Теперь рассмотрим, как аналогичный элемент добавить в начало коллекции дочерних узлов блока div:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  // создаем элемент
  var elem = document.createElement("h2");
  // создаем для него текст
  var elemText = document.createTextNode("Привет мир");
  // добавляем текст в элемент в качестве дочернего элемента
  elem.appendChild(elemText);
  // получаем первый элемент, перед которым будет идти добавление
  var firstElem = articleDiv.firstChild.nextSibling;
  // добавляем элемент в блок div перед первым узлом
  articleDiv.insertBefore(elem, firstElem);
  </pre>
  <p>Если нам надо вставить новый узел на второе, третье или любое другое место, то нам надо найти узел, перед которым надо вставлять, 
  с помощью комбинаций свойств firstChild/lastChild и nextSibling/previousSibling.</p>
  <h3>Копирование элемента</h3>
  <p>Иногда элементы бывают довольно сложными по составу, и гораздо проще их скопировать, чем с помощью отдельных вызовов создавать из содержимое. 
  Для копирования уже имеющихся узлов у объекта Node можно использовать метод <span class="bb">cloneNode()</span>:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  // клонируем элемент articleDiv
  var newArticleDiv = articleDiv.cloneNode(true);
  // добавляем в конец элемента body
  document.body.appendChild(newArticleDiv);
  </pre>
  <p>В метод <code>cloneNode()</code> в качестве параметра передается логическое значение: если передается true, то элемент будет копироваться со 
  всеми дочерними узлами; если передается false - то копируется без дочерних узлов. То есть в данном случае мы копируем узел со всем его 
  содержимым и потом добавляем в конец элемента body.</p>
  <img src="pics/cloneNode.png" alt="Клонирование элементов в JavaScript" />
  <h3>Удаление элемента</h3>
  <p>Для удаления элемента вызывается метод <span class="bb">removeChild()</span> объекта Node. Этот метод удаляет один из дочерних узлов:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  // находим узел, который будем удалять - первый параграф
  var removableNode = document.querySelectorAll("div.article p")[0];
  // удаляем узел
  articleDiv.removeChild(removableNode);
  </pre>
  <p>В данном случае удаляется первый параграф из блока div</p>
  <h3>Замена элемента</h3>
  <p>Для замены элемента применяется метод <span class="bb">replaceChild(newNode, oldNode)</span> объекта Node. Этот метод 
  в качестве первого параметра принимает новый элемент, который заменяет старый элемент oldNode, передаваемый в качестве второго параметра.</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  // находим узел, который будем заменять - первый параграф
  var oldNode = document.querySelectorAll("div.article p")[0];
  // создаем элемент
  var newNode = document.createElement("h2");
  // создаем для него текст
  var elemText = document.createTextNode("Привет мир");
  // добавляем текст в элемент в качестве дочернего элемента
  newNode.appendChild(elemText);
  // заменяем старый узел новым
  articleDiv.replaceChild(newNode, oldNode);
  </pre>
  <p>В данном случае заменяем первый параграф заголовком h2:</p>
  <img src="pics/replaceChild.png" alt="Замена элемента в JavaScript" />
  `;
}

//=====================================================================================
function less105(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект Element. Управление элементами</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Кроме методов и свойств объекта Node в JavaScript мы можем использовать свойства и методы объектов Element. Важно не путать эти два объекта: 
  Node и Element. Node представляет все узлы веб-станицы, в то время как объект Element представляет непосредственно только html-элементы. То есть объекты 
  Element - это фактически те же самые узлы - объекты Node, у которых тип узла (свойство nodeType) равно 1.</p>
  <p>Одним из ключевых свойств объекта Element является свойство <span class="bb">tagName</span>, которое возвращает тег элемента. Например, 
  получим все элементы, которые есть на странице:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div class="article"&gt;
  &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
  &lt;p&gt;Первый абзац&lt;/p&gt;
  &lt;p&gt;Второй абзац&lt;/p&gt;
  &lt;/div&gt;
  &lt;script&gt;
  function getChildren(elem){
    
    for(var i in elem.childNodes){
    
      if(elem.childNodes[i].nodeType===1){
      
        console.log(elem.childNodes[i].tagName);
        getChildren(elem.childNodes[i]);
      }
    }
  }
  var root = document.documentElement;
  console.log(root.tagName);
  getChildren(root);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Здесь вначале получаем те корневого элемента <code>&lt;html&gt;</code> и затем с помощью рекурсивной функции <code>getChildren</code> 
  получаем все вложенные элементы:</p>
  <img src="pics/tagname.png" alt="Перебор элементов в JavaScript" />
  <h3>Свойства innerText и innerHTML</h3>
  <p>Для получения или установки текстового содержимого элемента мы можем использовать свойство <span class="bb">innerText</span>, а для получения или установки кода html 
   - свойство <span class="bb">innerHTML</span>:</p>
  <pre class="brush:js;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div class="article"&gt;
  &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
  &lt;p&gt;Первый абзац&lt;/p&gt;
  &lt;p&gt;Второй абзац&lt;/p&gt;
  &lt;/div&gt;
  &lt;script&gt;
  var articleDiv = document.querySelector("div.article");
  console.log(articleDiv.innerText);
  console.log("_______________________");
  console.log(articleDiv.innerHTML);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <img src="pics/innerhtml.png" alt="innerHTML и innerText в JavaScript" />
  <p>Надо отметить, что свойство innerText во многом аналогично свойству <span class="bb">textContent</span>. То есть следующие вызовы будут равноценны:</p>
  <pre class="brush:js;">
  var pElement = document.querySelectorAll("div.article p")[0];
  pElement.innerText = "hello";
  pElement.textContent = "hello";
  </pre>
  <p>Установка кода html у элемента:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  articleDiv.innerHTML ="&lt;h2&gt;Hello World!!!&lt;/h2&gt;&lt;p&gt;bla bla bla&lt;/p&gt;";
  </pre>
  <h3>Методы объекта Element</h3>
  <p>Среди методов объекта Element можно отметить методы управления атрибутами:</p>
  <ul>
  <li><p><span class="bb">getAttribute(attr)</span>: возвращает значение атрибута attr</p></li>
  <li><p><span class="bb">setAttribute(attr, value)</span>: устанавливает для атрибута attr значение value. Если атрибута нет, то он добавляется</p></li>
  <li><p><span class="bb">removeAttribute(attr)</span>: удаляет атрибут attr и его значение</p></li>
  </ul>
  <p>Работа с атрибутами:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div class="article" style="color:red;"&gt;
  &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
  &lt;p&gt;Первый абзац&lt;/p&gt;
  &lt;p&gt;Второй абзац&lt;/p&gt;
  &lt;/div&gt;
  &lt;script&gt;
  var articleDiv = document.querySelector("div.article");
  // получаем атрибут style
  var styleValue = articleDiv.getAttribute("style");
  console.log("До изменения атрибута: " + styleValue);
  // удаляем атрибут
  articleDiv.removeAttribute("style");
  // добавляем заново атрибут style
  articleDiv.setAttribute("style", "color:blue;");
  styleValue = articleDiv.getAttribute("style");
  console.log("После изменения атрибута: " + styleValue);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <img src="pics/htmlattributes.png" alt="Работы с атрибутами в JavaScript" />
  <h3>Размеры и позиция элементов</h3>
  <p>Элементы имеют ряд свойств, которые позволяют определить размер элемента. Но важно понимать разницу между всеми этими свойствами</p>
  <p>Свойства <span class="bb">offsetWidth</span> и <span class="bb">offsetHeight</span> определяют соответственно ширину и высоту элемента в пикселях. 
  В ширину и высоту включается граница элемента.</p>
  <p>Свойства <span class="bb">clientWidth</span> и <span class="bb">clientHeight</span> также определяют ширину и высоту элемента в пикселях, 
  но уже без учета границы:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #rect {
      width: 100px;
      height: 100px;
      background: #50c878;
      border: 3px solid silver;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="rect"&gt;&lt;/div&gt;
  &lt;script&gt;
  var rect = document.getElementById("rect");
  console.log("offsetHeight: " + rect.offsetHeight);
  console.log("offsetWidth: " + rect.offsetWidth);
  console.log("clientHeight: " + rect.clientHeight);
  console.log("clientWidth: " + rect.clientWidth);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <img src="pics/offsetWidth.png" alt="Размер элемента в javascript" />
  <p>Поскольку у блока div определена граница в 3 пикселя, то по сравнению с clientHeight/clientWidth к offsetHeight/offsetWidth добавляет по 6 пикселей.</p>
  <p>Для определения позиции элемента наиболее эффективным способом является метод <span class="bb">getBoundingClientRect()</span>.</p>
  <p>Этот метод возвращает объект со свойствами <code>top, bottom, left, right</code>, которые указывают на смещение элемента относительно верхнего левого угла браузера:</p>
  <pre class="brush:js;">
  var rect = document.getElementById("rect");
  var clientRect  = rect.getBoundingClientRect();
  console.log("top: " + clientRect.top);
  console.log("bottom: " + clientRect.bottom);
  console.log("left: " + clientRect.left);
  console.log("right: " + clientRect.right);
  </pre>`;
}

//=====================================================================================
function less106(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Изменение стиля элементов</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Для работы со стилевыми свойствами элементов в JavaScript применяются, главным образом, два подхода:</p>
  <ul>
  <li><p>Изменение свойства <span class="bb">style</span></p></li>
  <li><p>Изменение значения атрибута <span class="bb">class</span></p></li>
  </ul>
  <h3>Свойство style</h3>
  <p>Свойство <span class="bb">style</span> представляет сложный объект для управления стилем и напрямую сопоставляется с атрибутом style html-элемента. 
  Этот объект содержит набор свойств CSS: <code>element.style.свойствоCSS</code>. Например, установим цвет шрифта:</p>
  <pre class="brush:js;">
  var root = document.documentElement;
  // устанавливаем стиль
  root.style.color = "blue";
  // получаем значение стиля
  document.write(root.style.color); // blue
  </pre>
  <p>В данном случае название свойства color совпадает со свойством css. Аналогично мы могли бы установить цвет с помощью css:</p>
  <pre class="brush:css;">
  html{
    color:blue;
  }
  </pre>
  <p>Однако ряд свойств css в названиях имеют дефис, например, <code>font-family</code>. В JavaScript для этих свойств дефис не употребляется. 
  Только первая буква, которая идет после дефиса, переводится в верхний регистр:</p>
  <pre class="brush:js;">
  var root = document.documentElement;
  root.style.fontFamily = "Verdana";
  </pre>
  <h3>Свойство className</h3>
  <p>С помощью свойства <span class="bb">className</span> можно установить атрибут <code>class</code> элемента html. Например:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    .blueStyle{
      color:blue;
      font-family:Verdana;
    }
    .article{
      font-size:20px;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div class="article"&gt;
  &lt;h3&gt;Заголовок статьи&lt;/h3&gt;
  &lt;p&gt;Первый абзац&lt;/p&gt;
  &lt;p&gt;Второй абзац&lt;/p&gt;
  &lt;/div&gt;
  &lt;script&gt;
  var articleDiv = document.querySelector("div.article");
  // установка нового класса
  articleDiv.className = "blueStyle";
  // получаем название класса
  document.write(articleDiv.className);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Благодаря использованию классов не придется настраивать каждое отдельное свойство css с помощью свойства <code>style</code>.</p>
  <p>Но при этом надо учитывать, что прежнее значение атрибута <code>class</code> удаляется. Поэтому, если нам надо добавить класс, надо объединить его 
  название со старым классом:</p>
  <pre class="brush:js;">
  articleDiv.className = articleDiv.className + " blueStyle";
  </pre>
  <p>И если надо вовсе удалить все классы, то можно присвоить свойству пустую строку:</p>
  <pre class="brush:js;">
  articleDiv.className = "";
  </pre>
  <h3>Свойство classList</h3>
  <p>Выше было рассмотрено, как добавлять классы к элементу, однако для управления множеством классов гораздо удобнее использовать свойство 
  <span class="bb">classList</span>. Это свойство представляет объект, реализующий следующие методы:</p>
  <ul>
  <li><p><span class="bb">add(className)</span>: добавляет класс className</p></li>
  <li><p><span class="bb">remove(className)</span>: удаляет класс className</p></li>
  <li><p><span class="bb">toggle(className)</span>: переключает у элемента класс на className. Если класса нет, то он добавляется, если есть, то удаляется</p></li>
  </ul>
  <p>Например:</p>
  <pre class="brush:js;">
  var articleDiv = document.querySelector("div.article");
  // удаляем класс
  articleDiv.classList.remove("article");
  // добавляем класс
  articleDiv.classList.add("blueStyle");
  // переключаем класс
  articleDiv.classList.toggle("article");
  </pre>`;
}

//=====================================================================================
function less107(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Создание своего элемента HTML</h2><div class="date">Последнее обновление: 05.03.2021</div>
  
    <p>По умолчанию HTML предоставляет ряд встроенных элементов, из которых мы можем составить структуру веб-страницы. Однако мы не ограничены 
  встроенными html-элементами  и можем сами создать и использовать свои элементы html.</p>
  <p>В JavaScript HTML-элемент представлен интерфейсом <span class="b">HTMLElement</span>. Соответственно, реализуя данный интерфейс в JavaScript, мы можем 
  создать свои классы, которые будут представлять элементы html, и потом их использовать. Что-то наподобие следующего:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;hello-metanit&gt;&lt;/hello-metanit&gt;
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В данном случае в коде странице определен элемент <code>&lt;hello-metanit&gt;</code>, и в реальности такого элемента конечно же не существует. 
  Но сейчас мы его создадим.</p>
  <p>Итак, чтобы определить класс, который будет представлять html-элемент, нам достаточно создать класс, который реализует интерфейс <span class="b">HTMLElement</span>:</p>
  <pre class="brush:js;">
  class HelloMetanit extends HTMLElement {
  
  }
  </pre>
  <p>Второй важный момент - нам надо зарегистрировать наш кастомный html-элемент, что бы браузер знал, что есть такой элемент. 
  Для этого применяется встроенная функция</p>
  <pre class="brush:js;">
  customElements.define(name, constructor, options);
  </pre>
  <p>Она принимает три параметра:</p>
  <ul>
  <li><p><code>name</code>: имя кастомного элемента html, который будет представлять класс JavaScript. Важно: имя должно содержать дефис.</p></li>
  <li><p><code>constructor</code>: конструктор (по сути класс JavaScript), который представляет кастомный элемент html.</p></li>
  <li><p><code>options</code>: необязательный параметр - объект, который настраивает кастомный html-элемент. В настоящий момент он поддерживает 
  один параметр - <code>extends</code>. Он определяет название встроенного html-элемента, который применяется для создания кастомного элемента html.</p></li>
  </ul>
  <p>Например, в нашем случае мы могли бы вызвать эту функцию так:</p>
  <pre class="brush:js;">
  customElements.define("hello-metanit", HelloMetanit);
  </pre>
  <p>То есть в общем это будет выглядеть следующим образом:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  
  &lt;hello-metanit&gt;&lt;/hello-metanit&gt;
  
  &lt;script&gt;
  class HelloMetanit extends HTMLElement {
    
  }
  customElements.define("hello-metanit", HelloMetanit);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Но пока кастомный элемент "hello-metanit" ничего не делает. Добавим ему какую-нибудь примитивную задачу. Пусть он выводит некоторое приветствие.</p>
  <p>Как правило, классы кастомных элементов применяют конструктор. Причем в самом начале конструктора должен идти вызов функции 
  <span class="b">super()</span>, который гарантирует, что наш класс унаследовал все методы, атрибуты и свойства интерфейса 
  <code>HTMlElement</code>.</p>
  <pre class="brush:js;">
  class HelloMetanit extends HTMLElement {
    constructor() {
          super();
      }
  }
  </pre>
  <p>Но кроме того, в конструкторе мы можем определить некоторую базовую логику нашего элемента. Например:</p>
  <pre class="brush:js;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  
  &lt;hello-metanit&gt;&lt;/hello-metanit&gt;
  
  &lt;script&gt;
  class HelloMetanit extends HTMLElement {
    constructor() {
          super();
      
      let welcome = "Доброе утро";
      const hour = new Date().getHours();
      if (hour &gt; 17) {
        welcome = "Добрый вечер";
      } else if (hour &gt; 12) {
        welcome = "Добрый день";
      }
      
      this.innerText= welcome;
      // либо так
      // this.textContent = welcome;
      }
  }
  
  customElements.define("hello-metanit", HelloMetanit);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В конструкторе мы получаем текущее время и в зависимости от текущего часа определяем текст приветствия. Поскольку наш класс применяет интерфейс 
  HTMLElement, то соответственно мы можем в нем использовать стандартные для html-элементов свойства. В частности, в данном случае 
  для установки текста элемента применяется свойство <code>innerText</code> (также можно было бы использовать свойство <code>textContent</code>).</p>
  <img src="./pics/5.1.png" alt="Создание html-элемента и HTMLElement" />
  <h3>Добавление методов</h3>
  <p>Как и в обычных классах, мы можем определять в классах элементов методы и затем вызывать их. Например, определим простейший метод, который возвращает текущее время:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  
  &lt;hello-metanit id="hello"&gt;&lt;/hello-metanit&gt;
  &lt;script&gt;
  class HelloMetanit extends HTMLElement {
    
    constructor() {
          super();
      
      let welcome = "Доброе утро";
      const hour = new Date().getHours();
      if (hour &gt; 17) {
        welcome = "Добрый вечер";
      } else if (hour &gt; 12) {
        welcome = "Добрый день";
      }
      this.style="cursor:pointer;"
      this.innerText= welcome;
      }
    
    showTime(){
      console.log(new Date().toTimeString());
    }
  }
  
  customElements.define("hello-metanit", HelloMetanit);
  
  // получаем элемент
  const hello = document.getElementById("hello");
  // по нажатию вызываем его метод showTime
  hello.addEventListener("click", ()=&gt; hello.showTime());
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Для примера в классе элемента определен метод showTime, который просто выводит на консоль текущее время. В коде javascript мы получаем по 
  id данный элемент, прикрепляем к нему обработчик нажатия, в котором вызываем вышеопределенный метод <code>showTime()</code>. 
  В итоге по нажатию в консоли мы увидим текущее время:</p>
  <img src="./pics/5.2.png" alt="Создание html-элемента и HTMLElement и customElements.define" />
  <h3>События жизненного цикла</h3>
  <p>Кастомный элемент html имеет свой жизненный цикл, который описывается следующими методами:</p>
  <ul>
  <li><p><span class="b">connectedCallback</span>: вызывается каждый раз, когда кастомный элемент html добавляется в DOM.</p></li>
  <li><p><span class="b">disconnectedCallback</span>: вызывается каждый раз, когда кастомный элемент html удаляется из DOM.</p></li>
  <li><p><span class="b">adoptedCallback</span>: вызывается каждый раз, когда кастомный элемент html перемещается в новый элемент.</p></li>
  <li><p><span class="b">attributeChangedCallback</span>: вызывается при каждом изменении (добавлении, изменении значения или удаления) 
  атрибута кастомного элемента html.</p></li>
  </ul>
  <p>Например, применим метод <code>connectedCallback()</code>:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  
  &lt;hello-metanit id="hello"&gt;&lt;/hello-metanit&gt;
  &lt;script&gt;
  class HelloMetanit extends HTMLElement {
    
    constructor() {
          super();
      
      let welcome = "Доброе утро";
      const hour = new Date().getHours();
      if (hour &gt; 17) {
        welcome = "Добрый вечер";
      } else if (hour &gt; 12) {
        welcome = "Добрый день";
      }
      this.style.cursor="pointer"
      this.innerText= welcome;
      }
    connectedCallback() {
      this.style.color = "red";
    }
    showTime(){
      console.log(new Date().toTimeString());
    }
  }
  
  customElements.define("hello-metanit", HelloMetanit);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В данном случае в методе <code>connectedCallback()</code> просто устанавливаем цвет шрифта - в данном случае красный цвет:</p>
  <pre class="brush:js;">this.style.color = "red";</pre>
  <h3>Добавление атрибутов</h3>
  <p>Также мы можем определить у элемента свои атрибуты и затем использовать их. Например, выше при добавлении элемента на страницу у него устанавливается 
  красный цвет текста. Зададим установку цвета с помощью атрибута:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  
  &lt;hello-metanit hellocolor="#2980b9"&gt;&lt;/hello-metanit&gt;
  &lt;br/&gt;
  &lt;hello-metanit&gt;&lt;/hello-metanit&gt;
  &lt;script&gt;
  class HelloMetanit extends HTMLElement {
    
    constructor() {
          super();
      
      let welcome = "Доброе утро";
      const hour = new Date().getHours();
      if (hour &gt; 17) {
        welcome = "Добрый вечер";
      } else if (hour &gt; 12) {
        welcome = "Добрый день";
      }
      this.style.cursor="pointer"
      this.innerText= welcome;
      }
    connectedCallback() {
      this.style.color = "red";
      if (this.hasAttribute("hellocolor")) {
              this.style.color = this.getAttribute("hellocolor");
      }
    }
    showTime(){
      console.log(new Date().toTimeString());
    }
  }
  
  customElements.define("hello-metanit", HelloMetanit);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В данном случае элемент принимает атрибут <code>hellocolor</code>, который задает цвет текста элемента. Если этот атрибут определен, то по нему устанавливаем 
  цвет текста. Если не определен, то применяется цвет по умолчанию - красный:</p>
  <pre class="brush:js;">
  this.style.color = "red";
  if (this.hasAttribute("hellocolor")) {
    this.style.color = this.getAttribute("hellocolor");
  }
  </pre>
  <img src="./pics/5.3.png" alt="атрибуты html-элемента и HTMLElement и customElements.define и connectedCallback" />
  <h3>Стилизация CSS</h3>
  <p>Стилизация элемента через CSS производится также, как и стилизация любого другого элемента:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;style&gt;
  hello-metanit{
    font-family: Verdana;
    font-size:22px;
  }
  &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;hello-metanit hellocolor="#2980b9"&gt;&lt;/hello-metanit&gt;
  &lt;script&gt;
  class HelloMetanit extends HTMLElement {
    
    constructor() {
          super();
      
      let welcome = "Доброе утро";
      const hour = new Date().getHours();
      if (hour &gt; 17) {
        welcome = "Добрый вечер";
      } else if (hour &gt; 12) {
        welcome = "Добрый день";
      }
      this.style.cursor="pointer"
      this.innerText= welcome;
      }
    connectedCallback() {
      this.style.color = "red";
      if (this.hasAttribute("hellocolor")) {
              this.style.color = this.getAttribute("hellocolor");
      }
    }
    showTime(){
      console.log(new Date().toTimeString());
    }
  }
  
  customElements.define("hello-metanit", HelloMetanit);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <img src="./pics/5.4.png" alt="Стилизация CSS для html-элемента и HTMLElement и customElements.define и connectedCallback" />
  `;
}

//=====================================================================================
function less110(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>События</h1>
    <h2>Введение в обработку событий</h2><div class="date">Последнее обновление: 1.11.2015</div>
    
      <p>Для взаимодействия с пользователем в JavaScript определен механизм событий. Например, когда пользователь нажимает кнопку, то возникает 
    событие нажатия кнопки. В коде JavaScript мы можем определить возникновение события и как-то его обработать.</p>
    <p>В JavaScript есть следующие типы событий:</p>
    <ul>
    <li><p>События мыши (перемещение курсора, нажатие мыши и т.д.)<p></li>
    <li><p>События клавиатуры (нажатие или отпускание клавиши клавиатуры)<p></li>
    <li><p>События жизненного цикла элементов (например, событие загрузки веб-станицы)<p></li>
    <li><p>События элементов форм (нажатие кнопки на форме, выбор элемента в выпадающем списке и т.д.)<p></li>
    <li><p>События, возникающие при изменении элементов DOM<p></li>
    <li><p>События, возникающие при касании на сенсорных экранах<p></li>
    <li><p>События, возникающие при возникновении ошибок<p></li>
    </ul>
    <p>Рассмотрим простейшую обработку событий. Например, на веб-странице у нас есть следующий элемент div:</p>
    <pre class="brush:xml;">&lt;div id="rect" onclick="alert('Нажато')" style="width:50px;height:50px;background-color:blue;"&gt;&lt;/div&gt;</pre>
    <p>Здесь определен обычный блок div, который имеет атрибут <span class="bb">onclick</span>, который задает <span class="bb">обработчик события</span> нажатия на блок div. 
    То есть, чтобы обработать какое-либо событие, нам надо определить для него обработчик. Обработчик представляет собой код на языке JavaScript. В данном случае обработчик выглядит довольно просто:</p>
    <pre class="brush:js;">alert('Нажато')</pre>
    <p>И при нажатии на кнопку будет выскакивать сообщение:</p>
    <img src="pics/events.png" alt="Обработка событий в JavaScript" />
    <p>Также можно было бы вынести все действия по обработке события в отдельную функцию:</p>
    <pre class="brush:xml;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;div id="rect" onclick="displayMessage()" style="width:50px;height:50px;background-color:blue;"&gt;&lt;/div&gt;
    &lt;script&gt;
    function displayMessage(){
      
      alert('Нажато');
    }
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <p>Теперь обработчиком события будет выступать функция <code>displayMessage</code>.</p>
    <h3>Передача параметров в обработчик события</h3>
    <p>В обработчик можно передавать параметры. Например, мы можем передать текущий объект, на котором возникает событие:</p>
    <pre class="brush:xml;">
    &lt;a href="page1.html" onclick="return handler(this)"&gt;Станица 1&lt;/a&gt;
    &lt;script&gt;
    function handler(obj){
      
      alert(obj.href);
      return false;
    }
    &lt;/script&gt;
    </pre>
    <p>Ключевое слово <code>this</code> указывает на текущий объект ссылки, на которую производится нажатие. И в коде обработчика мы можем 
    получить этот объект и обратиться к его свойствам, например, к свойству href.</p>
    <p>Кроме того, надо отметить, что здесь обработчик возвращает результат. Хотя в первом примере с блоком div от обработчика не требовалось возвращения результата. 
    Дело в том, что для некоторых обработчиков можно подтвердить или остановить обработку события. Например, нажатие на ссылку должно привести к переадресации. 
    Но возвращая из обработчика <code>false</code>, мы можем остановить стандартный путь обработки события, и переадресации не будет. 
    Если же возвращать значение <code>true</code>, то событие обрабатывается в стандартном порядке.</p>
    <p>Если же мы вовсе уберем возвращении результата, то событие будет обрабатываться, как будто возвращается значение true:</p>
    <pre class="brush:xml;">
    &lt;a href="page1.html" onclick="handler(this)"&gt;Станица 1&lt;/a&gt;
    &lt;script&gt;
    function handler(obj){
      
      alert(obj.href);
    }
    &lt;/script&gt;
    </pre>
    <p>Кроме непосредственно элемента-источника события в обработчик мы можем передавать объект <code>event</code>. 
    Этот объект не определяется разработчиком, это просто аргумент функции обработчика, который хранит всю информацию о событии. Например:</p>
    <pre class="brush:xml;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
      &lt;style&gt;
      #rect{
        width:50px;
        height:50px;
        background-color:blue;
      }
      &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;div id="rect" onclick="handler(event)"&gt;&lt;/div&gt;
    &lt;script&gt;
    function handler(e){
      
      alert(e.type); // получаем тип события
    }
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <p>В данном случае с помощью свойства <code>type</code> объекта event получаем тип события (в данном случае тип <code>click</code>).</p>
    `;
}

//=====================================================================================
function less111(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Обработчики событий</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <h3>Встроенные обработчики</h3>
  <p>В прошлой теме были рассмотрены встроенные обработчики (inline event handler), которые определяются в коде элемента с 
  помощью атрибутов:</p>
  <pre class="brush:js;">&lt;div id="rect" onclick="handler(event)"&gt;&lt;/div&gt;</pre>
  <p>Хотя этот подход прекрасно работает, но он имеет кучу недостатков:</p>
  <ul>
  <li><p>Код html смешивается с кодом JavaScript, в связи с чем становится труднее разрабатывать, отлаживать и поддерживать приложение</p></li>
  <li><p>Обработчики событий можно задать только для уже созданных на веб-странице элементов. Динамически создаваемые элементы в этом случае 
  лишаются возможности обработки событий</p></li>
  <li><p>К элементу для одного события может быть прикреплен только один обработчик</p></li>
  <li><p>Нельзя удалить обработчик без изменения кода</p></li>
  </ul>
  <h3>Свойства обработчиков событий</h3>
  <p>Проблемы, которые возникают при использовании встроенных обработчиков, были призваны решить свойства обработчиков. Подобно тому, как у html-элементов 
  есть атрибуты для обработчиков, так и в коде javascript у элементов DOM мы можем получить свойства обработчиков, которые соответствуют атрибутам:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #rect{
      width:50px;
      height:50px;
      background-color:blue;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="rect"&gt;&lt;/div&gt;
  &lt;script&gt;
  function handler(e){
    
    alert(e.type);
  }
  document.getElementById("rect").onclick = handler;
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В итоге нам достаточно взять свойство <code>onclick</code> и присвоить ему функцию, используемую в качестве обработчика. За счет 
  этого код html отделяется от кода javascript.</p>
  <p>Стоит также отметить, что в обработчик события браузер автоматически передает объект Event, хранящий всю информацию о событии. Поэтому 
  также мы можем получить этот объект в функции обработчика в качестве параметра.</p>
  <h3>Слушатели событий</h3>
  <p>Несмотря на то, что свойства обработчиков решают ряд проблем, которые связаны с использованием атрибутов, в то же время это также 
  не оптимальный подход. Еще один способ установки обработчиков событий представляет использование слушателей.</p>
  <p>Для работы со слушателями событий в JavaScript есть объект <span class="bb">EventTarget</span>, который определяет методы 
  <span class="bb">addEventListener()</span> (для добавления слушателя) и <span class="bb">removeEventListener()</span> 
  для удаления слушателя. И поскольку html-элементы DOM тоже являются объектами EventTarget, то они также имеют эти методы. Фактически слушатели представляют те же функции обработчиков.</p>
  <p>Метод <code>addEventListener()</code> принимает два параметра: название события без префикса on и функцию обработчика этого события. Например:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #rect{
      width:50px;
      height:50px;
      background-color:blue;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="rect"&gt;&lt;/div&gt;
  &lt;script&gt;
  var rect = document.getElementById("rect");
  
  rect.addEventListener("click", function (e) {
    alert(e.type);
  });
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>То есть в данном случае опять же обрабатывается событие click. И также можно было бы в качестве второго параметра название функции:</p>
  <pre class="brush:js;">
  function handler(e){
    
    alert(e.type);
  }
  var rect = document.getElementById("rect");
  
  rect.addEventListener("click", handler);
  </pre>
  <p>Удаление слушателя аналогично добавлению:</p>
  <pre class="brush:js;">rect.removeEventListener("click", handler);</pre>
  <p>Преимуществом использования слушателей является и то, что мы можем установить для одного события несколько функций:</p>
  <pre class="brush:js;">
  var clicks = 0;
  function handlerOne(e){
    
    alert(e.type);
  }
  function handlerTwo(e){
    
    clicks++;
    var newNode = document.createElement("p");
    newNode.textContent = "произошло нажатие " + clicks;
    document.body.appendChild(newNode);
  }
  var rect = document.getElementById("rect");
  // прикрепляем первый обработчик
  rect.addEventListener("click", handlerOne);
  // прикрепляем второй обработчик
  rect.addEventListener("click", handlerTwo);
  </pre>`;
}

//=====================================================================================
function less112(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Объект Event</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>При обработке события браузер автоматически передает в функцию обработчика в качестве параметра объект <span class="bb">Event</span>, который инкапсулирует всю информацию о событии. И с помощью его свойств 
  мы можем получить эту информацию:</p>
  <ul>
  <li><p><span class="bb">bubbles</span>: возвращает <code>true</code>, если событие является восходящим. Например, если событие возникло на вложенном элементе, то 
  оно может быть обработано на родительском элементе.</p></li>
  <li><p><span class="bb">cancelable</span>: возвращает <code>true</code>, если можно отменить стандартную обработку события</p></li>
  <li><p><span class="bb">currentTarget</span>: определяет элемент, к которому прикреплен обработчик события</p></li>
  <li><p><span class="bb">defaultPrevented</span>: возвращает <code>true</code>, если был вызван у объекта Event метод <code>preventDefault()</code></p></li>
  <li><p><span class="bb">eventPhase</span>: определяет стадию обработки события</p></li>
  <li><p><span class="bb">target</span>: указывает на элемент, на котором было вызвано событие</p></li>
  <li><p><span class="bb">timeStamp</span>: хранит время возникновения события</p></li>
  <li><p><span class="bb">type</span>: указывает на имя события</p></li>
  </ul>
  <p>Например:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #rect{
      width:50px;
      height:50px;
      background-color:blue;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="rect"&gt;&lt;/div&gt;
  &lt;script&gt;
  function handler(event){
    
    console.log("Тип события: " + event.type);
    
    console.log(event.target);
  }
  var rect = document.getElementById("rect");
  rect.addEventListener("click", handler);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Причем в данном случае свойство <code>target</code> представляет собой элемент, поэтому мы можем манипулировать им как и любыми другими узлами и элементами DOM. 
  Например, изменим фоновый цвет:</p>
  <pre class="brush:js;">
  function handler(e){
    
    e.target.style.backgroundColor = "red";
  }
  </pre>
  <h3>Остановка выполнения события</h3>
  <p>С помощью метода <span class="bb">preventDefault()</span> объекта Event мы можем остановить дальнейшее выполнение события. В ряде случаев этот метод 
  не играет большой роли. Однако в некоторых ситуаций он может быть полезен. Например, при нажатии на ссылку мы можем с помощью дополнительной обработки 
  определить, надо ли переходить по ссылке или надо запретить переход. Или другой пример: пользователь отправляет данные формы, но в ходе обработки 
  в обработчике события мы определили, что поля формы заполнены неправильно, и в этом случае мы также можем запретить отправку.</p>
  <p>Например, запретим переход по ссылке после 12 часов:</p>
  <pre class="brush:xml;">
  &lt;a href="http://google.com" id="link"&gt;Поиск&lt;/a&gt;
  &lt;script&gt;
  function linkHandler(e){
    
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    if(hour&gt;12){
      
      e.preventDefault();
      document.write("После 12 переход запрещен");
    }
  }
  var link = document.getElementById("link");
  link.addEventListener("click", linkHandler);
  &lt;/script&gt;
  </pre>`;
}

//=====================================================================================
function less113(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Распространение событий</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Когда мы нажимаем на какой-либо элемент на станице и генерируется событие нажатия, то это событие может распространяться от элемента к элементу. 
  Например, если мы нажимаем на блок div, то также мы нажимаем и на элемент body, в котором блок div находится. То есть происходит распространение события.</p>
  <p>Есть несколько форм распространения событий:</p>
  <ul>
  <li><p>Восходящие: событие распространяется вверх по дереву DOM от дочерних узлов к родительским</p></li>
  <li><p>Нисходящие: событие распространяется вниз по дереву DOM от родительских узлов к дочерним, пока не достигнет того элемента, на котором это событие и возникло</p></li>
  </ul>
  <h3>Восходящие события</h3>
  <p>Рассмотрим восходящие (bubbling) события, которые распространяются в верх по дереву DOM. Допустим, у нас есть следующая веб-страница:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #blueRect{
      width:100px;
      height:100px;
      background-color:blue;
    }
    #redRect{
      width:50px;
      height:50px;
      background-color:red;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="blueRect"&gt;
    &lt;div id="redRect"&gt;&lt;/div&gt;
  &lt;/div&gt;
  
  &lt;script&gt;
  var redRect = document.getElementById("redRect");
  redRect.addEventListener("click", function(){
    console.log("Событие на redRect");
  });
  
  var blueRect = document.getElementById("blueRect");
  blueRect.addEventListener("click", function(){
    console.log("Событие на blueRect");
  });
  
  document.body.addEventListener("click", function(){
    console.log("Событие на body");
  });
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Если мы нажмем на вложенный div, то событие пойдет к родительскому элементу div и далее к элементу body:</p>
  <img src="pics/bubbling.png" alt="Восходящие события в JavaScript" />
  <p>Надо сказать, что подобное поведение не всегда является желательным. И в этом случае мы можем остановить распространение событие с помощью 
  метода <span class="b">stopPropagation()</span> объекта Event:</p>
  <pre class="brush:js;">
  var redRect = document.getElementById("redRect");
  redRect.addEventListener("click", function(e){
    console.log("Событие на redRect");
    e.stopPropagation();
  });
  </pre>
  <p>И в результате нажатия событие будет обработано только обработчиком для redRect.</p>
  <h3>Нисходящие события</h3>
  <p>События также могут быть нисходящими (capturing). Для их использования в метод <span class="bb">addEventListener()</span> в качестве третьего 
  необязательного параметра передается логическое значение true или false, которое указывает, будет ли событие нисходящим. 
  По умолчанию все события восходящие.</p>
  <p>Возьмем ту же веб-станицу, только изменим ее код javascript:</p>
  <pre class="brush:js;">
  var redRect = document.getElementById("redRect");
  redRect.addEventListener("click", function(){
    console.log("Событие на redRect");
  }, true);
  
  var blueRect = document.getElementById("blueRect");
  blueRect.addEventListener("click", function(){
    console.log("Событие на blueRect");
  }, true);
  
  document.body.addEventListener("click", function(){
    console.log("Событие на body");
  }, true);
  </pre>
  <p>Теперь события будут распространяться в обратном порядке:</p>
  <img src="pics/capturing.png" alt="Нисходящие события в JavaScript" />
  `;
}

//=====================================================================================
function less114(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>События мыши</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Одну из наиболее часто используемых событий составляют события мыши:</p>
  <ul>
  <li><p><code>click</code>: возникает при нажатии указателем мыши на элемент</p></li>
  <li><p><code>mousedown</code>: возникает при нахождении указателя мыши на элементе, когда кнопка мыши находится в нажатом состоянии</p></li>
  <li><p><code>mouseup</code>: возникает при нахождении указателя мыши на элементе во время отпускания кнопки мыши</p></li>
  <li><p><code>mouseover</code>: возникает при вхождении указателя мыши в границы элемента</p></li>
  <li><p><code>mousemove</code>: возникает при прохождении указателя мыши над элементом</p></li>
  <li><p><code>mouseout</code>: возникает, когда указатель мыши выходит за пределы элемента</p></li>
  </ul>
  <p>Например, обработаем события mouseover и mouseout:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #blueRect{
      width:100px;
      height:100px;
      background-color:blue;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="blueRect"&gt;&lt;/div&gt;
  
  &lt;script&gt;
  function setColor(e){
    
    if(e.type==="mouseover")
      e.target.style.backgroundColor = "red";
    else if(e.type==="mouseout")
      e.target.style.backgroundColor = "blue";
  }
  var blueRect = document.getElementById("blueRect");
  blueRect.addEventListener("mouseover", setColor);
  blueRect.addEventListener("mouseout", setColor);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Теперь при наведении указателя мыши на блок blueRect он будет окрашиваться в красный цвет, а при уходе указателя мыши - блок будет обратно окрашиваться в синий цвет.</p>
  <p>Объект Event является общим для всех событий. Однако для разных типов событий существуют также свои объекты событий, которые добавляют ряд своих свойств. 
  Так, для работы с событиями указателя мыши определен объект <span class="bb">MouseEvent</span>, который добавляет следующие свойства:</p>
  <ul>
  <li><p><span class="bb">altKey</span>: возвращает <code>true</code>, если была нажата клавиша Alt во время генерации события</p></li>
  <li><p><span class="bb">button</span>: указывает, какая кнопка мыши была нажата</p></li>
  <li><p><span class="bb">clientX</span>: определяет координату Х окна браузера, на которой находился указатель мыши во время генерации события</p></li>
  <li><p><span class="bb">clientY</span>: определяет координату Y окна браузера, на которой находился указатель мыши во время генерации события</p></li>
  <li><p><span class="bb">ctrlKey</span>: возвращает <code>true</code>, если была нажата клавиша Ctrl во время генерации события</p></li>
  <li><p><span class="bb">metaKey</span>: возвращает <code>true</code>, если была нажата во время генерации события метаклавиша клавиатуры</p></li>
  <li><p><span class="bb">relatedTarget</span>: определяет вторичный источник возникновения события</p></li>
  <li><p><span class="bb">screenX</span>: определяет координату Х относительно верхнего левого угла экрана монитора, на которой находился указатель мыши во время генерации события</p></li>
  <li><p><span class="bb">screenY</span>: определяет координату Y относительно верхнего левого угла экрана монитора, на которой находился указатель мыши во время генерации события</p></li>
  <li><p><span class="bb">shiftKey</span>: возвращает <code>true</code>, если была нажата клавиша Shift во время генерации события</p></li>
  </ul>
  <p>Определим координаты клика:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    #blueRect{
      width:100px;
      height:100px;
      background-color:blue;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="blueRect"&gt;&lt;/div&gt;
  
  &lt;script&gt;
  function handleClick(e){
    
    console.log("screenX: " + e.screenX);
    console.log("screenY: " + e.screenY);
    console.log("clientX: " + e.clientX);
    console.log("clientY: " + e.clientY);
  }
  var blueRect = document.getElementById("blueRect");
  blueRect.addEventListener("click", handleClick);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>`;
}

//=====================================================================================
function less115(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>События клавиатуры</h2><div class="date">Последнее обновление: 20.01.2021</div>
  
    <p>Другим распространенным типом событий являются события клавиатуры.</p>
  <ul>
  <li><p><code>keydown</code>: возникает при нажатии клавиши клавиатуры и длится, пока нажата клавиша</p></li>
  <li><p><code>keyup</code>: возникает при отпускании клавиши клавиатуры</p></li>
  <li><p><code>keypress</code>: возникает при нажатии клавиши клавиатуры, но после события keydown и до события keyup. Надо учитывать, 
  что данное событие генерируется только для тех клавиш, которые формируют вывод в виде символов, например, при печати символов. Нажатия на остальные клавиши, 
  например, на Alt, не учитываются.</p></li>
  </ul>
  <p>Для работы с событиями клавиатуры определен объект <span class="bb">KeyboardEvent</span>, который добавляет к свойствам объекта Event ряд специфичных 
  для клавиатуры свойств:</p>
  <ul>
  <li><p><span class="bb">altKey</span>: возвращает <code>true</code>, если была нажата клавиша Alt во время генерации события</p></li>
  <li><p><span class="bb">key</span>: возвращает символ нажатой клавиши, например, при нажатии на клавишу "T" это свойство будет содержать "T". А 
  если нажата клавиша "Я", то это свойство будет содержать "Я"</p></li>
  <li><p><span class="bb">code</span>: возвращает строковое представление нажатой клавиши физической клавиатуры QWERTY, например, при нажатии на клавишу "T" это свойство будет содержать "KeyT", 
  а при нажатии на клавишу ";" (точка запятой), то свойство возвратит "Semicolon".</p>
  <p>При использовании этого свойства следует учитывать ряд момент. Прежде всего используется клавиатура QWERTY. То есть мы переключим раскладку, к примеру, на русскоязычную и нажмем на клавишу "Я", то 
  значением будет "KeyZ" - на клавиатуре QWERTY клавиша Z представляет ту же клавишу, что и на русскоязычной раскладке "Я"</p>
  <p>Другой момент - учитывается именно физическая клавитура. Если нажата клавиша на виртуальной клавиатуре, 
  то возвращаемое значение будет устанавливаться браузером исходя из того, какой клавише на физической клавиатуре соответствовало нажатие.</p></li>
  <li><p><span class="bb">ctrlKey</span>: возвращает <code>true</code>, если была нажата клавиша Ctrl во время генерации события</p></li>
  <li><p><span class="bb">metaKey</span>: возвращает <code>true</code>, если была нажата во время генерации события метаклавиша клавиатуры</p></li>
  <li><p><span class="bb">shiftKey</span>: возвращает <code>true</code>, если была нажата клавиша Shift во время генерации события</p></li>
  </ul>
  <p>Например, мы можем с помощью клавиш клавиатуры перемещать элемент на веб-странице:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;style&gt;
    html, body{
      margin:0;
      overflow:hidden;
    }
    #blueRect{
      width:100px;
      height:100px;
      background-color:blue;
    }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div id="blueRect"&gt;&lt;/div&gt;
  
  &lt;script&gt;
  function moveRect(e){
    
    var blueRect = document.getElementById("blueRect");
    // получаем стиль для blueRect
    var cs = window.getComputedStyle(blueRect);
    
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
    
    switch(e.key){
      
      case "ArrowLeft":  // если нажата клавиша влево
        if(left&gt;0)
          blueRect.style.marginLeft = left - 10 + "px";
        break;
      case "ArrowTop":   // если нажата клавиша вверх
        if(top&gt;0)
          blueRect.style.marginTop = top - 10 + "px";
        break;
      case "ArrowRight":   // если нажата клавиша вправо
        if(left &lt; document.documentElement.clientWidth - 100)
          blueRect.style.marginLeft = left + 10 + "px";
        break;
      case "ArrowDown":   // если нажата клавиша вниз
        if(top &lt; document.documentElement.clientHeight - 100)
          blueRect.style.marginTop = top + 10 + "px";
        break;
    }
  }
  
  addEventListener("keydown", moveRect);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>В данном случае обрабатывается событие <code>keydown</code>. В обработчике moveRect с помощью метода <code>window.getComputedStyle()</code> 
  получаем стиль элемента blueRect. А затем из этого стиля выбираем значения свойств marginLeft и marginTop.</p>
  <p>С помощью свойства <code>e.key</code> получаем нажатую клавишу. Список кодов клавиш клавиатуры можно посмотреть на странице <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values">https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values</a>.</p>
  <p>Здесь нам интересуют четыре клавиши: вверх, вниз, влево, вправо. Им соответственно будут соотвтствовать названия "ArrowTop", "ArrowDown", "ArrowLeft" и "ArrowRight". Если одна из них 
  нажата, производим действия: увеличение или уменьшение отступа элемента от верхней или левой границы. Ну и чтобы элемент не выходил за границы окна, проверяем 
  предельные значения с помощью document.documentElement.clientWidth (ширина корневого элемента) и document.documentElement.clientHeight (высота корневого элемента).</p>
  `;
}

//=====================================================================================
function less120(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Работа с формами</h1>
    <h2>Формы и их элементы</h2><div class="date">Последнее обновление: 1.11.2015</div>
    
      <p>Один из способов взаимодействия с пользователями представляют html-формы. Например, если нам надо получить от пользователя некоторую информацию, 
    мы можем определить на веб-странице формы, которая будет содержать текстовые поля для ввода информации и кнопку для отправки. И после ввода данных мы можем 
    обработать введенную информацию.</p>
    <p>Для создания формы используется элемент <code>&lt;form&gt;</code>:</p>
    <pre class="brush:xml;">
    &lt;form name="search"&gt;
    &lt;/form&gt;
    </pre>
    <p>В JavaScript форма представлена объектом <span class="bb">HtmlFormElement</span>. И после создания формы мы можем к ней обратиться различными способами.</p>
    <p>Первый способ заключается в прямом обращении по имени формы:</p>
    <pre class="brush:js;">
    var searchForm = document.search;
    </pre>
    <p>Второй способ состоит в обращении к коллекции форм документа и поиске в ней нужной формы:</p>
    <pre class="brush:js;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;form name="search"&gt;&lt;/form&gt;
    &lt;form name="settings"&gt;&lt;/form&gt;
    &lt;script&gt;
    var searchForm;
    for (var i = 0; i &lt; document.forms.length; i++) {
    
      if(document.forms[i].name==="search")
        searchForm = document.forms[i];
    }
    document.write(searchForm.name);
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <p>С помощью свойства <code>name</code> объекта формы мы можем получить значение атрибута <code>name</code> у соответствующего элемента формы в коде html.</p>
    <p>Еще один способ сочетает оба подхода:</p>
    <pre class="brush:js;">var searchForm = document.forms["search"];</pre>
    <p>И также можно применять стандартные способы для поиска элемента формы, например, по id, по тегу или по селектору. Например:</p>
    <pre class="brush:js;">var searchForm = document.getElementsByTagname("form")[0]</pre>
    <p>Форма имеет ряд свойств, из которых наиболее важными являются вышерассмотренное свойство <code>name</code>, а также свойство <span class="bb">elements</span>, 
    которое содержит коллекцию элементов формы:</p>
    <pre class="brush:xml;">
    &lt;form name="search"&gt;
      &lt;input type="text" name="key"&gt;&lt;/input&gt;
      &lt;input type="submit" name="send"&gt;&lt;/input&gt;
    &lt;/form&gt;
    &lt;script&gt;
    var searchForm = document.forms["search"];
    for(var i=0; i&lt;searchForm.elements.length;i++)
      document.write(searchForm.elements[i].name + "&lt;br/&gt;");
    &lt;/script&gt;
    </pre>
    <img src="pics/formelements.png" alt="Получение элементов формы в JavaScript" />
    <p>Среди методов формы надо отметить метод <span class="bb">submit()</span>, который отправляет данные формы на сервер, и метод <span class="bb">reset()</span>, который 
    очищает поля формы:</p>
    <pre class="brush:js;">
    var searchForm = document.forms["search"];
    searchForm.submit();
    searchForm.reset();
    </pre>
    <h3>Элементы форм</h3>
    <p>Форма может содержать различные элементы ввода html: input, textarea, button, select и т.д. Но все они имеют ряд общих свойств и методов.</p>
    <p>Также, как и форма, элементы форм имеют свойство <span class="bb">name</span>, с помощью которого можно получить значение атрибута <code>name</code>:</p>
    <pre class="brush:xml;">
    &lt;form name="search"&gt;
      &lt;input type="text" name="key" value="hello world"&gt;&lt;/input&gt;
      &lt;input type="submit" name="send"&gt;&lt;/input&gt;
    &lt;/form&gt;
    &lt;script&gt;
    var searchForm = document.forms["search"];
    // выведем имя всех элементов
    for(var i=0; i&lt;searchForm.elements.length;i++)
      document.write(searchForm.elements[i].name + "&lt;br/&gt;");
      
    // получим по имени текстовое поле
    var keyBox = searchForm.elements["key"];
    document.write(keyBox.name); // key
    &lt;/script&gt;
    </pre>
    <p>Другим важным свойством является свойство <span class="bb">value</span>, которое позволяет получить или изменить значение поля:</p>
    <pre class="brush:js;">
    var searchForm = document.forms["search"];
    var keyBox = searchForm.elements["key"];
    document.write(keyBox.value); // hello world
    // установка значения
    keyBox.value = "Привет мир";
    </pre>
    <p>С помощью свойства <span class="bb">form</span> можно получить родительский объект формы:</p>
    <pre class="brush:js;">
    var searchForm = document.forms["search"];
    var keyBox = searchForm.elements["key"];
    document.write(keyBox.form.name); // search
    </pre>
    <p>Данное свойство может быть полезно, например, при отправке формы, когда перед непосредственной отправкой формы необходимо провести валидацию 
    всех полей формы.</p>
    <p>Свойство <span class="bb">type</span> позволяет получить тип поля ввода. Это либо название тега элемента (например, textarea), либо 
    значение атрибута <code>type</code> у элементов <code>input</code>.</p>
    <p>Из методов можно выделить методы <span class="bb">focus()</span> (устанавливает фокус на элемент) и <span class="bb">blur()</span> (убирает фокус с элемента):</p>
    <pre class="brush:js;">
    var searchForm = document.forms["search"];
    var keyBox = searchForm.elements["key"];
    keyBox.focus();
    </pre>`;
}

//=====================================================================================
function less121(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Кнопки</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Для отправки введенных данных на форме используются кнопки. Для создания кнопки используется либо элемент <code>button</code>:</p>
  <pre class="brush:xml;">&lt;button name="send"&gt;Отправить&lt;/button&gt;</pre>
  <p>Либо элемент <code>input</code>:</p>
  <pre class="brush:xml;">&lt;input type="submit" name="send" value="Отправить" /&gt;</pre>
  <p>С точки зрения функциональности в html эти элементы не совсем равноценны, но в данном случае они нас интересуют с точки зрения взаимодействия с кодом javascript.</p>
  <p>При нажатии на любой из этих двух вариантов кнопки происходит отправка формы по адресу, который указан у формы в атрибуте <code>action</code>, либо по адресу веб-страницы, если атрибут action не указан. 
  Однако в коде javascript мы можем перехватить отправку, обрабатывая событие <span class="bb">click</span></p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form name="search"&gt;
    &lt;input type="text" name="key"&gt;&lt;/input&gt;
    &lt;input type="submit" name="send" value="Отправить" /&gt;
  &lt;/form&gt;
  &lt;script&gt;
  function sendForm(e){
    
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length&gt;5){
      alert("Недопустимая длина строки");
      e.preventDefault();
    }	
    else
      alert("Отправка разрешена");
  }
  
  var sendButton = document.search.send;
  sendButton.addEventListener("click", sendForm);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>При нажатии на кнопку происходит событие <code>click</code>, и для его обработки к кнопке прикрепляем обработчик <code>sendForm</code>. В этом 
  обработчике проверяем введенный в текстовое поле текст. Если его длина больше 5 символов, то выводим сообщение о недостимой длине и прерываем обычный 
  ход события с помощью вызова <span class="bb">e.preventDefault()</span>. В итоге форма не отправляется.</p>
  <p>Если же длина текста меньше шести символов, то также выводится сообщение, и затем форма отправляется.</p>
  <img src="pics/formsubmit.png" alt="Отправка формы через JavaScript" />
  <p>Также мы можем при необходимости при отправке изменить адрес, на который отправляются данные:</p>
  <pre class="brush:js;">
  function sendForm(e){
    
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length>5){
      alert("Недопустимая длина строки");
      document.search.action="PostForm";
    }	
    else
      alert("Отправка разрешена");
  }
  </pre>
  <p>В данном случае, если длина текста больше пяти символов, то текст отправляется, только теперь он отправляется по адресу <code>PostForm</code>, 
  поскольку задано свойство action:</p>
  <pre class="brush:js;">document.search.action="PostForm";</pre>
  <p>Для очистки формы предназначены следующие равноценные по функциональности кнопки:</p>
  <pre class="brush:xml;">
  &lt;button type="reset"&gt;Очистить&lt;/button&gt;
  &lt;input type="reset" value="Очистить" /&gt;
  </pre>
  <p>При нажатию на кнопки произойдет очистка форм. Но также функциональность по очистке полей формы можно реализовать с помощью метода 
  <code>reset()</code>:</p>
  <pre class="brush:js;">
  function sendForm(e){
    
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length>5){
      alert("Недопустимая длина строки");
      document.search.reset();
      e.preventDefault();
    }	
    else
      alert("Отправка разрешена");
  }
  </pre>
  <p>Кроме специальных кнопок отправки и очистки на форме также может использоваться обычная кнопка:</p>
  <pre class="brush:xml;">&lt;input type="button" name="send" value="Отправить" /&gt;</pre>
  <p>При нажатии на подобную кнопку отправки данных не происходит, хотя также генерируется событие click:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form name="search"&gt;
    &lt;input type="text" name="key" placeholder="Введите ключ"&gt;&lt;/input&gt;
    &lt;input type="button" name="print" value="Печать" /&gt;
  &lt;/form&gt;
  &lt;div id="printBlock"&gt;&lt;/div&gt;
  &lt;script&gt;
  function printForm(e){
    
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // создаем новый параграф
    var pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = val;
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);
  }
  
  var printButton = document.search.print;
  printButton.addEventListener("click", printForm);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>При нажатии на кнопку получаем введенный в текстовое поле текст, создаем новый элемент параграфа для этого текста и добавляем параграф в элемент printBlock.</p>
  <img src="pics/buttonclick.png" alt="Обработка нажатия кнопки в JavaScript" />
  `;
}

//=====================================================================================
function less122(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Текстовые поля</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Для ввода простейшей текстовой информации предназначены элементы <code>&lt;input type="text"</code>:</p>
  <pre class="brush:xml;">&lt;input type="text" name="kye" size="10" maxlength="15" value="hello world" /&gt;</pre>
  <p>Данный элемент поддерживает ряд событий, в частности:</p>
  <ul>
  <li><p><code>focus</code>: происходит при получении фокуса</p></li>
  <li><p><code>blur</code>: происходит при потере фокуса</p></li>
  <li><p><code>change</code>: происходит при изменении значения поля</p></li>
  <li><p><code>select</code>: происходит при выделении текста в текстовом поле</p></li>
  <li><p><code>keydown</code>: происходит при нажатии клавиши клавиатуры</p></li>
  <li><p><code>keypress</code>: происходит при нажатии клавиши клавиатуры для печатаемых символов</p></li>
  <li><p><code>keyup</code>: происходит при отпускании ранее нажатой клавиши клавиатуры</p></li>
  </ul>
  <p>Применим ряд событий:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form name="search"&gt;
    &lt;input type="text" name="key" placeholder="Введите ключ"&gt;&lt;/input&gt;
    &lt;input type="button" name="print" value="Печать" /&gt;
  &lt;/form&gt;
  &lt;div id="printBlock"&gt;&lt;/div&gt;
  &lt;script&gt;
  var keyBox = document.search.key;
  
  // обработчик изменения текста
  function onchange(e){
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // получаем новое значение
    var val = e.target.value;
    // установка значения
    printBlock.textContent = val;
  }
  // обработка потери фокуса
  function onblur(e){
    
    // получаем его значение и обрезаем все пробелы
    var text = keyBox.value.trim();
    if(text==="")
      keyBox.style.borderColor = "red";
    else
      keyBox.style.borderColor = "green";
  }
  // получение фокуса
  function onfocus(e){
    
    // установка цвета границ поля
    keyBox.style.borderColor = "blue";
  }
  keyBox.addEventListener("change", onchange);
  keyBox.addEventListener("blur", onblur);
  keyBox.addEventListener("focus", onfocus);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Здесь к текстовому полю прикрепляется три обработчика для событий blur, focus и change. Обработка события change позволяет 
  сформировать что-то вроде привязки: при изменении текста весь текст отображается в блоке printBlock. Но надо учитывать, что событие change 
  возникает не сразу после изменения текста, а после потери им фокуса.</p>
  <p>Обработка события потери фокуса blur позволяет провести валидацию введенного значения. Например, в данном случае если текст состоит из пробелов или 
  не был введен, то окрашиваем границу поля в красный цвет.</p>
  <img src="pics/textchange.png" alt="Изменение текста в JavaScript" />
  <p>Кроме данного текстового поля есть еще специальные поля ввода. Так, поле <code>&lt;input type="password"</code> предназначено для ввода пароля. 
  По функциональности оно во многом аналогично обычному текстовому полю за тем исключением, что для вводимых символов используется маска:</p>
  <pre class="brush:xml;">&lt;input type="password" name="password" /&gt;</pre>
  <p>Если нам надо, чтобы на форме было некоторое значение, но чтобы оно было скрыто от пользователя, то для этого могут использоваться скрытые поля:</p>
  <pre class="brush:xml;">&lt;input type="hidden" name="id" value="345" /&gt;</pre>
  <p>Для скрытого поля обычно не используется обработка событий, но также, как и для других элементов, мы можем в javascript получить его значение или изменить его.</p>
  <h3>Элемент textarea</h3>
  <p>Для создания многострочных текстовых полей используется элемент <code>textarea</code>:</p>
  <pre class="brush:xml;">&lt;textarea rows="15" cols="40" name="textArea"&gt;&lt;/textarea&gt;</pre>
  <p>Данные элемент генерирует все те же самые события, что и обычное текстовое поле:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form name="search"&gt;
    &lt;textarea rows="7" cols="40" name="message"&gt;&lt;/textarea&gt;
  &lt;/form&gt;
  &lt;div id="printBlock"&gt;&lt;/div&gt;
  &lt;script&gt;
  var messageBox = document.search.message;
  
  // обработчик ввода символа
  function onkeypress(e){
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // получаем введенный символ
    var val = String.fromCharCode(e.keyCode);
    // добавление символа
    printBlock.textContent += val;
  }
  
  function onkeydown(e){
    if(e.keyCode===8){ // если нажат Backspace
    
      // получаем элемент printBlock
      var printBlock = document.getElementById("printBlock"), 
        length = printBlock.textContent.length;
      // обрезаем строку по последнему символу
      printBlock.textContent = printBlock.textContent.substring(0, length-1);
    }
  }
  
  messageBox.addEventListener("keypress", onkeypress);
  messageBox.addEventListener("keydown", onkeydown);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Здесь к текстовому полю прикрепляются обработчики для событий keypress и keydown. В обработчике keypress получаем введенный символ с помощью конвертации 
  числового кода клавиши в строку:</p>
  <pre class="brush:js;">var val = String.fromCharCode(e.keyCode);</pre>
  <p>Затем символ добавляется к содержимому блока printBlock.</p>
  <p>Событие keypress возникает при нажатии на клавиши для печатаемых символов, то такие символы отображаются в текстовом поле. Однако есть и другие 
  клавиши, которые оказывают влияние на текстовое поле, но они не дают отображаемого символа, поэтому не отслеживаются событием keypress. К таким клавишам относится клавиша 
  Backspace, которая удаляет последний символ. И для ее отслеживания также обрабатываем событие keydown. В обработчике keydown удаляем из строки в блоке printBlock последний символ.</p>
  <img src="pics/keypress.png" alt="Обработка keypress в JavaScript" />
  `;
}

//=====================================================================================
function less123(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Флажки и переключатели</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Особую группу элементов ввода составляют флажки и переключатели.</p>
  <p>Флажки представляют поле, в которое можно поставить отметки и которое создается с помощью элемента <code>&lt;input type="checkbox"</code>. 
  Отличительную особенность флажка составляет свойство <span class="bb">checked</span>, которое в отмеченном состоянии принимает значение true:</p>
  <pre class="brush:xml;">
  &lt;form name="myForm"&gt;
    &lt;input type="checkbox" name="enabled" checked&gt;&lt;span&gt;Включить&lt;/span&gt;
  &lt;/form&gt;
  &lt;div id="printBlock"&gt;&lt;/div&gt;
  &lt;script&gt;
  var enabledBox = document.myForm.enabled;
  
  function onclick(e){
    var printBlock = document.getElementById("printBlock");
    var enabled = e.target.checked;
    printBlock.textContent = enabled;
  }
  
  enabledBox.addEventListener("click", onclick);
  &lt;/script&gt;
  </pre>
  <p>Нажатие на флажок генерирует событие <code>click</code>. В данном случае при обработке данного события мы просто выводим информацию, отмечен 
  ли данный флажок, в блок div.</p>
  <img src="pics/checkbox.png" alt="Checkbox в JavaScript" />
  <p>Переключатели представляют группы кнопок, из которых мы можем выбрать только одну. Переключатели создаются элементом <code>&lt;input type="radio"</code>.</p>
  <p>Выбор или нажатие на одну из них также представляет событие click:</p>
  <pre class="brush:xml;">
  &lt;form name="myForm"&gt;
    &lt;input type="radio" name="languages" checked="checked" value="Java" /&gt;&lt;span&gt;Java&lt;/span&gt;
    &lt;input type="radio" name="languages" value="C#" /&gt;&lt;span&gt;C#&lt;/span&gt;
    &lt;input type="radio" name="languages" value="C++" /&gt;&lt;span&gt;C++&lt;/span&gt;
  &lt;/form&gt;
  &lt;div id="printBlock"&gt;&lt;/div&gt;
  &lt;script&gt;
  function onclick(e){
  
    var printBlock = document.getElementById("printBlock");
    var language = e.target.value;
    printBlock.textContent = "Вы выбрали: " + language;
  }
  for (var i = 0; i &lt; myForm.languages.length; i++) {
    myForm.languages[i].addEventListener("click", onclick);
  }
  &lt;/script&gt;
  </pre>
  <p>При создании группы переключателей их атрибут name должен иметь одно и то же значение. В данном случае это - languages. То есть переключатели 
  образуют группу languages.</p>
  <p>Поскольку переключателей может быть много, то при прикреплении к ним обработчика события нам надо пробежаться по всему массиву переключателей, 
  который можно получить по имени группы:</p>
  <pre class="brush:js;">
  for (var i = 0; i &lt; myForm.languages.length; i++) {
    myForm.languages[i].addEventListener("click", onclick);
  }
  </pre>
  <p>Значение выбранного переключателя также можно получить через объект Event: <code>e.target.value</code></p>
  <img src="pics/radiobutton.png" alt="RadioButton в JavaScript" />
  <p>Каждый переключатель также, как и флажок, имеет свойство <code>checked</code>, которое возвращает значение true, если переключатель выбран. 
  Например, отметим последний переключатель:</p>
  <pre class="brush:js;">myForm.languages[myForm.languages.length-1].checked = true;</pre>
  `;
}

//=====================================================================================
function less124(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Список select</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Для создания списка используется html-элемент select. Причем с его помощью можно создавать как выпадающие списки, так и обычные с ординарным или 
  множественным выбором. Например, стандартный список:</p>
  <pre class="brush:xml;">
  &lt;select name="language" size="4"&gt;
    &lt;option value="JS" selected="selected"&gt;JavaScript&lt;/option&gt;
    &lt;option value="Java"&gt;Java&lt;/option&gt;
    &lt;option value="C#"&gt;C#&lt;/option&gt;
    &lt;option value="C++"&gt;C++&lt;/option&gt;
  &lt;/select&gt;
  </pre>
  <p>Атрибут <code>size</code> позволяет установить, сколько элементов будут отображаться одномоментно в списке. Значение <code>size="1"</code> 
  отображает только один элемент списка, а сам список становится выпадающим. Если установить у элемента select атрибут <span class="bb">multiple</span>, 
  то в списке можно выбрать сразу несколько значений.</p>
  <p>Каждый элемент списка представлен html-элементом option, у которого есть отображаемая метка и есть значения в виде атрибута <code>value</code>.</p>
  <p>В JavaScript элементу select соответствует объект <span class="bb">HTMLSelectElement</span>, а элементу option - объект <span class="bb">HtmlOptionElement</span> или 
  просто <span class="bb">Option</span>.</p>
  <p>Все элементы списка в javascript доступны через коллекцию <code>options</code>. А каждый объект HtmlOptionElement имеет свойства: 
  <code>index</code> (индекс в коллекции options), <code>text</code> (отображаемый текст) и <code>value</code> (значение элемента). 
  Например, получим первый элемент списка и выведем о нем через его свойства всю информацию:</p>
  <pre class="brush:xml;">
  &lt;form name="myForm"&gt;
    &lt;select name="language" size="4"&gt;
      &lt;option value="JS" selected="selected"&gt;JavaScript&lt;/option&gt;
      &lt;option value="Java"&gt;Java&lt;/option&gt;
      &lt;option value="CS"&gt;C#&lt;/option&gt;
      &lt;option value="CPP"&gt;C++&lt;/option&gt;
    &lt;/select&gt;
  &lt;/form&gt;
  &lt;script&gt;
  var firstLanguage = myForm.language.options[0];
  document.write("Index: " + firstLanguage.index + "&lt;br/&gt;");
  document.write("Text: " + firstLanguage.text + "&lt;br/&gt;");
  document.write("Value: " + firstLanguage.value + "&lt;br/&gt;");
  &lt;/script&gt;
  </pre>
  <img src="pics/selectoptions.png" alt="Элемент select в JavaScript" />
  <p>В javascript мы можем не только получать элементы, но и динамически управлять списком. Например, применим добавление и удаление объектов списка:</p>
  <pre class="brush:xml;">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;form name="myForm"&gt;
    &lt;select name="language" size="5"&gt;
      &lt;option value="JS" selected="selected"&gt;JavaScript&lt;/option&gt;
      &lt;option value="Java"&gt;Java&lt;/option&gt;
      &lt;option value="CS"&gt;C#&lt;/option&gt;
      &lt;option value="CPP"&gt;C++&lt;/option&gt;
    &lt;/select&gt;
    &lt;p&gt;&lt;input type="text" name="textInput" placeholder="Введите текст" /&gt;&lt;/p&gt;
    &lt;p&gt;&lt;input type="text" name="valueInput" placeholder="Введите значение" /&gt;&lt;/p&gt;
    &lt;p&gt;&lt;input type="button" name="addButton" value="Добавить" /&gt;&lt;input type="button" name="removeButton" value="Удалить" /&gt;&lt;/p&gt;
  &lt;/form&gt;
  
  &lt;script&gt;
  var addButton = myForm.addButton, 
    removeButton = myForm.removeButton, 
    languagesSelect = myForm.language;
  // обработчик добавления элемента
  function addOption(){
    // получаем текст для элемента
    var text = myForm.textInput.value;
    // получаем значение для элемента
    var value = myForm.valueInput.value;
    // создаем новый элемента
    var newOption = new Option(text, value);
    languagesSelect.options[languagesSelect.options.length]=newOption;
  }
  // обработчик удаления элемент
  function removeOption(){
    
    var selectedIndex = languagesSelect.options.selectedIndex;
    // удаляем элемент 
    languagesSelect.options[selectedIndex] = null;
  }
  
  addButton.addEventListener("click", addOption);
  removeButton.addEventListener("click", removeOption);
  &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </pre>
  <p>Для добавления на форме предназначены два текстовых поля (для текстовой метки и значения элемента option) и кнопка. Для удаления выделенного элемента 
  предназначена еще одна кнопка.</p>
  <p>За добавление в коде javascript отвечает функция <code>addOption</code>, в которой получаем введенные в текстовые поля значения, создаем новый объект Option и 
  добавляем его в массив options объекта списка.</p>
  <p>За удаление отвечает функция <code>removeOption</code>, в которой просто получаем индекс выделенного элемента с помощью свойства <span class="bb">selectedIndex</span> 
  и в коллекции options приравниваем по этому индексу значение null.</p>
  <img src="pics/addoption.png" alt="Добавление и удаление элементов списка в JavaScript" />
  <p>Для добавления/удаления также в качестве альтернативы можно использовать методы элемента select:</p>
  <pre class="brush:js;">
  // вместо вызова
  // languagesSelect.options[languagesSelect.options.length]=newOption;
  // использовать для добавления вызов метода add
  languagesSelect.add(newOption);
  // вместо вызова
  // languagesSelect.options[selectedIndex] = null;
  // использовать для удаления метод remove
  languagesSelect.remove(selectedIndex);
  </pre>
  <h3>События элемента select</h3>
  <p>Элемент select поддерживает три события: blur (потеря фокуса), focus (получение фокуса) и change (изменение выделенного элемента в списке). 
  Рассмотрим применение события select:</p>
  <pre class="brush:xml;">
  &lt;form name="myForm"&gt;
    &lt;select name="language" size="5"&gt;
      &lt;option value="JS" selected="selected"&gt;JavaScript&lt;/option&gt;
      &lt;option value="Java"&gt;Java&lt;/option&gt;
      &lt;option value="CS"&gt;C#&lt;/option&gt;
      &lt;option value="CPP"&gt;C++&lt;/option&gt;
    &lt;/select&gt;
  &lt;/form&gt;
  &lt;div id="selection"&gt;&lt;/div&gt;
  &lt;script&gt;
  var languagesSelect = myForm.language;
  
  function changeOption(){
    
    var selection = document.getElementById("selection");
    var selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
    selection.textContent = "Вы выбрали: " + selectedOption.text;
  }
  
  languagesSelect.addEventListener("change", changeOption);
  &lt;/script&gt;
  </pre>`;
}

//=====================================================================================
function less130(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>JSON</h1>
    <h2>Введение в JSON</h2><div class="date">Последнее обновление: 1.11.2015</div>
    
      <p>JSON (JavaScript Object Notation) представляет легковесный формат хранения данных. JSON описывает структуру и организацию 
    данных JavaScript. Простота JSON привела к тому, что в настоящий момент он является наиболее популярным форматом передачи данных в среде web, вытеснив 
    другой некогда популярный формат xml.</p>
    <p>Объекты JSON очень похожи на объекты JavaScript, тем более что JSON является подмножеством JavaScript. В то же время важно их различать: 
    JavaScript является языком программирования, а JSON является форматом данных.</p>
    <p>JSON поддерживает три типа данных: примитивные значения, объекты и массивы. Примитивные значения представляют стандартные строки, числа, значение 
    null, логические значения true и false.</p>
    <p>Объекты представляют набор простейших данных, других объектов и массивов. Например, типичный объект JSON:</p>
    <pre class="brush:js;">
    {
      "name": "Tom",
      "married": true,
      "age": 30
    }
    </pre>
    <p>В javascript этому объекту соответствовал бы следующий:</p>
    <pre class="brush:js;">
    var user = {
      name: "Tom",
      married: true,
      age: 30
    }
    </pre>
    <p>Несмотря на общее сходство, в то же время есть и различия: в JSON названия свойств заключаются в кавычки, как обычные строки. Кроме того, 
    объекты JSON не могут хранить функции, переменные, как объекты javascript.</p>
    <p>Объекты могут быть сложными:</p>
    <pre class="brush:js;">
    {
      "name": "Tom",
      "married": true,
      "age": 30,
      "company": {
        "name": "Microsoft",
        "address": "USA, Redmond"
      }
    }
    </pre>
    <p>Массивы в JSON похожи на массивы javascript и также могут хранить простейшие данные или объекты:</p>
    <pre class="brush:js;">
    ["Tom", true, 30]
    </pre>
    <p>Массив объектов:</p>
    <pre class="brush:js;">
    [{
      "name": "Tom",
      "married": true,
      "age": 30
    },{
      "name": "Alice",
      "married": false,
      "age": 23
    }]
    </pre>
    <h3>Сериализация в JSON и десериализация</h3>
    <p>Для сериализации объекта javascript в json применяется функция <span class="bb">JSON.stringify()</span>:</p>
    <pre class="brush:js;">
    var user = {
      name: "Tom",
      married: true,
      age: 30
    };
    var serializedUser = JSON.stringify(user);
    document.write(serializedUser); // {"name":"Tom","married":true,"age":30}
    </pre>
    <p>Для обратной операции - десериализации или парсинга json-объекта в javascript применяется метод <span class="bb">JSON.parse()</span>:</p>
    <pre class="brush:js;">
    var user = {
      name: "Tom",
      married: true,
      age: 30
    };
    // сериализация
    var serializedUser = JSON.stringify(user);
    // десериализация
    var tomUser = JSON.parse(serializedUser);
    document.write(tomUser.name); // Tom
    </pre>`;
}
//=====================================================================================
function less140(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Хранение данных</h1>
    <h2>Куки</h2><div class="date">Последнее обновление: 1.11.2015</div>
    
      <p>Одну из возможностей сохранения данных в javascript представляет использование куки. Для работы с куками в объекте <span class="bb">document</span> 
    предназначено свойство <span class="bb">cookie</span>.</p>
    <p>Для установки куков достаточно свойству <code>document.cookie</code> присвоить строку с куками:</p>
    <pre class="brush:xml;">
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8" /&gt;
    &lt;/head&gt;
    &lt;body&gt;
    
    &lt;script&gt;
    document.cookie = "login=tom32;";
    &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </pre>
    <p>В данном случае устанавливается кука, которая называется "login" и которая имеет значение "tom32". И в большинстве браузеров мы можем посмотреть 
    ее, узнать всю информацию о ней и в дальнейшем ее можно использовать в приложении:</p>
    <img src="pics/cookie.png" alt="Установка куки в JavaScript" />
    <p>Строка куки принимает до шести различных параметров: имя куки, значение, срок окончания действия (expires), путь (path), домен (domain) и secure. 
    Выше использовались только два параметра: имя куки и значение. То есть в случае со строкой "login=tom32;" куки имеет имя login и значение tom32.</p>
    <p>Но подобная куки имеет очень ограниченный срок жизни: если явным образом не установить срок действия, то кука будет удалена с закрытием браузера.
    Подобная ситуация, возможно, идеальна для тех случаев, когда необходимо удалять всю информацию после завершения работы с веб-приложением и закрытия браузера. 
    Однако данное поведение не всегда подходит.</p>
    <p>И в этом случае нам надо установить параметр <span class="bb">expires</span>, то есть срок действия куков:</p>
    <pre class="brush:js;">
    document.cookie = "login=tom32;expires=Mon, 31 Aug 2015 00:00:00 GMT;";
    </pre>
    <p>То есть срок действия куки login истекает в понедельник 31 августа 2015 года в 00:00. Формат параметра expires очень важен. Однако его можно сгенерировать программно. 
    Для этого мы можем использовать метод <span class="bb">toUTCString()</span> объекта Date:</p>
    <pre class="brush:js;">
    var expire = new Date();
    expire.setHours(expire.getHours() + 4);
    document.cookie = "login=tom32;expires=" + expire.toUTCString() + ";";
    </pre>
    <p>В данном случае срок действия куки будет составлять 4 часа.</p>
    <p>Если в друг нам надо установить куки для какого-то определенного пути на сайте, то мы можем использовать параметр <span class="bb">path</span>. Например, 
    мы хотим установить куки только для пути <i>www.mysite.com/home</i>:</p>
    <pre class="brush:js;">
    document.cookie = "login=tom32;expires=Mon, 31 Aug 2015 00:00:00 GMT;path=/home;";
    </pre>
    <p>В этом случае для других путей на сайте, например, <i>www.mysite.com/shop</i>, эти куки будут недоступны.</p>
    <p>Если на нашем сайте есть несколько доменов, и мы хотим установить куки непосредственно для определенного домена, тогда можно использовать параметр 
    <span class="bb">domain</span>. Например, у нас на сайте есть поддомен <i>blog.mysite.com</i>:</p>
    <pre class="brush:js;">
    document.cookie = "login=tom32;expires=Mon, 31 Aug 2015 00:00:00 GMT;path=/;domain=blog.mysite.com;";
    </pre>
    <p>Параметр <code>path=/</code> указывает, что куки будут доступны для всех директорий и путей поддомена blog.mysite.com.</p>
    <p>Последний параметр - <span class="bb">secure</span> задает использование SSL (SecureSockets Layer) и подходит для сайтов, использующих протокол https. 
    Если значение этого параметра равно <code>true</code>, то куки будут использоваться только при установке защищенного соединения ssl. По умолчанию 
    данный параметр равен false.</p>
    <pre class="brush:js;">
    document.cookie = "login=tom32;expires=Mon, 31 Aug 2015 00:00:00 GMT;path=/;domain=blog.mysite.com;secure=true;";
    </pre>
    <h3>Получение куки</h3>
    <p>Для простейшего извлечения куки из браузера достаточно обратиться к свойству <span class="bb">document.cookie</span>:</p>
    <pre class="brush:js;">
    var expire = new Date();
    expire.setHours(expire.getHours() + 4);
    
    document.cookie = "city=Berlin;expires="+expire.toUTCString()+";";
    document.cookie = "country=Germany;expires="+expire.toUTCString()+";";
    document.cookie = "login=tom32;";
    
    document.write(document.cookie);
    </pre>
    <p>Здесь были установлены три куки, и браузер выведет нам все эти куки:</p>
    <img src="pics/getcookie.png" alt="Получить куки в JavaScript" />
    <p>Извлеченные куки не включают параметры <code>expires, path, domain</code> и <code>secure</code>. 
    Кроме того, сами куки разделяются точкой с запятой, поэтому нужно еще провести некоторые преобразования, чтобы получить их имя и значение:</p>
    <pre class="brush:js;">
    var cookies = document.cookie.split(";");
    for(var i=0; i&lt;cookies.length; i++){
    
      var parts = cookies[i].split("="),
        name = parts[0], 
        value = parts[1];
      document.write("Имя куки: " + name + "&lt;br/&gt;");
      document.write("Значение: " + value + "&lt;br/&gt;&lt;br/&gt;");
    }
    </pre>`;
}//=====================================================================================
function less141(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Web Storage</h2><div class="date">Последнее обновление: 1.11.2015</div>
  
    <p>Хотя куки позволяют сохранять информацию, они имеют ряд ограничений. Например, браузер имеет ограничения на размер куков - 
  каждая кука не может превышать 4 кб. Куки имеют срок действия, после которого удаляются. Куки являются неотъемлемой чертой протокола HTTP и при каждом 
  запросе к серверу передаются вместе с запросом на сервер. Однако для работы с куками на стороне клиента в коде javascript не имеет значения передача куков на сервер. 
  Кроме того, для извлечения сохраненных куков надо написать некоторую порцию кода.</p>
  <p>Поэтому в HTML5 была внедрена новая концепция для хранения данных - <span class="bb">web storage</span>. Web storage состоит из двух компонентов: 
  <span class="bb">session storage</span> и <span class="bb">local storage</span>.</p>
  <p><span class="bb">Session storage</span> представляет временное хранилище информации, которая удаляется после закрытия браузера.</p>
  <p><span class="bb">Local storage</span> представляет хранилище для данных на постоянной основе. Данные из local storage автоматически не удаляются и 
  не имеют срока действия. Эти данные не передаются на сервер в запросе HTTP. Кроме того, объем local storage составляет в Chrome и Firefox 5 Mб для домена, 
  а в IE - 10 Mб.</p>
  <p>Все данные в web storage представляют набор пар ключ-значение. То есть каждый объект имеет уникальное имя-ключ и определенное значение.</p>
  <p>Для работы с local storage в javascript используется объект <span class="bb">localStorage</span>, а для работы с session storage - объект 
  <span class="bb">sessionStorage</span>.</p>
  <p>Для сохранения данных надо передать в метод <span class="bb">setItem()</span> объекта localStorage:</p>
  <pre class="brush:js;">localStorage.setItem("login", "tom32@gmail.com");</pre>
  <p>В этот метод передаются два значения: ключ и значение сохраняемого объекта.</p>
  <p>Если в localStorage уже есть объект с ключом "login", то его значение заменяется новым.</p>
  <p>Для получения сохраненных данных надо вызвать метод <span class="bb">getItem()</span>:</p>
  <pre class="brush:js;">var login = localStorage.getItem("login"); //tom32@gmail.com</pre>
  <p>В этот метод передается ключ объекта.</p>
  <p>Чтобы удалить объект, применяется метод <span class="bb">removeItem()</span>, который принимает ключ удаляемого объекта:</p>
  <pre class="brush:js;">localStorage.removeItem("login");</pre>
  <p>И для полного удаления всех объектов из localStorage можно использовать метод <span class="bb">clear()</span>:</p>
  <pre class="brush:js;">localStorage.clear();</pre>
  <p>С сохранением простых объектов все просто, однако при этом надо учитывать, что данные в localStorage сохраняются в виде строки:</p>
  <pre class="brush:js;">
  localStorage.setItem("age", 23);
  var age = localStorage.getItem("age");
  age=parseInt(age)+10;
  document.write(age); //33
  </pre>
  <p>Если в данном случае не преобразовать значение к числу с помощью <code>parseInt()</code>, то age будет действовать как строка.</p>
  <p>Трудности могут возникнуть с сохранением сложных объектов:</p>
  <pre class="brush:js;">
  var user ={
    name: "Tom",
    age: 23,
    married: false
  };
  
  localStorage.setItem("user", user);
  var savedUser = localStorage.getItem("user");
  document.write(savedUser); //[object Object]
  document.write(savedUser.name); // undefined - savedUser - строка, а не объект
  </pre>
  <p>В этом случае нам надо использовать сериализацию в формат JSON:</p>
  <pre class="brush:js;">
  var user ={
    name: "Tom",
    age: 23,
    married: false
  };
  
  localStorage.setItem("user", JSON.stringify(user));
  var savedUser = JSON.parse(localStorage.getItem("user"));
  document.write(savedUser.name + " " + savedUser.age +" " + savedUser.married); // Tom 23 false
  </pre>
  <p>И в завершении надо сказать, что в некоторых браузерах с помощью специальных инструментов мы можем увидеть сохраненные объекты в local storage. 
  Например, в Google Chrome:</p>
  <img src="pics/localstorage.png" alt="Local Storage в JavaScript" />
  `;
}

//=====================================================================================
function less150(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Коллекции и итераторы</h1><h2>Итераторы</h2><div class="date">Последнее обновление: 08.09.2021</div>
  
    <p>Итераторы применяются для организации последовательного доступа к элементам наборов данных - массивам, объектам Set, Map, строкам и т.д..Так, благодаря итераторам мы можем 
  перебрать набор данных с помощью цикла <span class="b">for-of</span>:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Bob", "Sam"];
  for(const person of people){
    console.log(person);
  }
  </pre>
  <p>В цикле <span class="b">for-of</span> справа от оператора <span class="b">of</span> указывается набор данных или перебираемый объект, из которого в цикле мы можем 
  получить отдельные элементы. Но эта возможность перебора некоторого объекта, как, например, массива в примере выше, реализуются благодаря тому, что эти объекты 
  применяют итераторы. Рассмотрим подробнее, что представляют итераторы и как можно создать свой итератор.</p>
  <p>Итераторы предоставляют метод <span class="b">next()</span>, который возвращает объект с двумя свойствами: <span class="b">value</span> и <span class="b">done</span></p>
  <pre class="brush:js;">{value, done}</pre>
  <p>Свойство <span class="b">value</span> хранит собственно значение текущего перебираемого элемента. А свойство <span class="b">done</span> 
  указывает, есть ли еще в коллекции объекты, доступные для перебора.  Если в наборе еще есть элементы, то свойство <code>done</code> равно <code>false</code> 
  Если же доступных элементов для перебора больше нет, то это свойство равно <span class="b">true</span>, а метод <code>next()</code> возвращает объект</p>
  <pre class="brush:js;">{done: true}</pre>
  <p>Некоторые типы в JavaScript имеют методы, которые возвращают итераторы. Например, метод <span class="b">entries()</span> типа Array (то есть массивов):</p>
  <pre class="brush:js;">
  const people = ["Tom", "Bob", "Sam"];
  const items = people.entries();
  console.log(items.next());
  </pre>
  <p>Здесь метод <span class="b">next()</span> возвратит следующий объект на консоль:</p>
  <pre class="browser">
  {value: Array(2), done: false}
    done:	false
    value:	Array(2)
      0:	0
      1:	"Tom"
      length:	2
    __proto__:	Array(0)
  __proto__:	Object
  </pre>
  <p>Здесь мы видим, что свойство done имеет значение <code>false</code>, так как мы перебрали только один элемент в множестве, и там еще есть два элемента.</p>
  <p>Свойство <code>value</code> представляет массив из двух значений. Первое значение представляет ключ или индекс элемента массива, а второй элемент - значение по 
  этому индексу. имеет ключ и значение.</p>
  <p>Соответственно мы можем организовать и перебор всей коллекции:</p>
  <pre class="brush:js;">
  const people = ["Tom", "Bob", "Sam"];
  const items = people.entries();		// получаем итератор
  
  while(!(item = items.next()).done){
    console.log(item.value);
  }
  </pre>
  <p>Здесь в цикле <code>while</code> из метода <code>next()</code> итератора получаем текущий объект в переменную <code>item</code>: <code>item = items.next()</code></p>
  <p>И смотрим на ее свойство <code>done</code> - если оно равно <code>false</code> (то есть в наборе еще есть элементы), то продолжаем цикл</p>
  <pre class="brush:js;">while(!(item = items.next()).done){</pre>
  <p>В цикле обращаемся к свойству <code>value</code> полученного объекта</p>
  <pre class="brush:js;">console.log(item.value);</pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  [0, "Tom"]
  [1, "Bob"]
  [2, "Sam"]
  </pre>
  <p>Поскольку каждый возвращаемый элемент представляет массив, где первый элемент - индекс в массиве, а второй - само значение, то, обратившись ко второму элементу, мы можем получить, значение:</p>
  <pre class="brush:js;">
  while(!(item = items.next()).done){
    console.log(item.value[1]);
  }
  </pre>
  <p>Но в этом нет смысла, поскольку все коллекции, которые возвращают итераторы, поддерживают перебор с помощью цикла <span class="b">for...of</span>, 
  который как раз и использует итератор для получения элементов.</p>
  <p>Разные объекты могут иметь свою собственную реализацию итератора. И при необходимости мы можем определить объект со своим итератором. Применение итераторов предоставляет нам способ создать объект, который будет вести 
  себя как коллекция элементов</p>
  <p>Для создания перебираемого объекта нам надо определить в объекта метод <span class="b">[Symbol.iterator]()</span>. Этот метод собственно и будет 
  представлять итератор:</p>
  <pre class="brush:;js;">
  const iterable = {
    [Symbol.iterator]() {
      return {
        next() {
        // если еще есть элементы
        return { value: ..., done: false };
        // если больше нет элементов
        return { value: undefined, done: true };
        }
      };
    }
  };
  </pre>
  <p>Метод <span class="b">[Symbol.iterator]()</span> возвращает объект, который имеет метод <span class="b">next()</span>. Этот метод возвращает объект с двумя 
  свойствами <code>value</code> и <code>done</code>.</p>
  <p>Если в нашем объекте есть элементы, то свойство <code>value</code> содержит собственно значение элемента, а свойство <code>done</code> равно <code>false</code>.</p>
  <p>Если доступных элементов больше нет, то свойство <code>done</code> равно <code>true</code>.</p>
  <p>Например, реализуем простейший объект с итератором, который возвращает некоторый набор чисел:</p>
  <pre class="brush:js;">
  const iterable = {
    [Symbol.iterator]() {
      return {
        current: 1,
      end: 3,
        next() {
          if (this.current &lt;= this.end) {
            return { value: this.current++, done: false };
          }
          return { done: true };
        }
      };
    }
  };
  </pre>
  <p>Здесь итератор фактически возвращает числе от 1 до 3. Для отслеживания текущего элемента в объекте, который возвращается методом <code></code>, 
  определены два свойства:</p>
  <pre class="brush:js;">
  current: 1,
  end: 3,
  </pre>
  <p>Свойство <code>current</code> собственно хранит значение текущего элемента. А свойство <code>end</code> задает предел. То есть в данном случае итератор возвращает числа от 1 до 3.</p>
  <p>В методе <code>next()</code>, если текущее значение меньше или равно редельному значению, возвращаем объект</p>
  <pre class="brush:js;">return { value: this.current++, done: false };</pre>
  <p>Инкремент <code>this.current++</code> приведет к тому, что при следующем вызове метода next значение current будет на единицу больше.</p>
  <p>Если достигнут предел, то возвращаем объект</p>
  <pre class="brush:js;">return { done: true };</pre>
  <p>Это будет указывать, что объектов больше нет.</p>
  <p>Получим из итератора возвращаемые им элементы:</p>
  <pre class="brush:js;">
  const myIterator = iterable[Symbol.iterator]();	// получаем итератор
  console.log(myIterator.next());	// {value: 1, done: false}
  console.log(myIterator.next());	// {value: 2, done: false}
  console.log(myIterator.next());	// {value: 3, done: false}
  console.log(myIterator.next());	// {done: true}
  </pre>
  <p>Здесь сначала получаем итератор в константу <code>myIterator</code>. Затем при обращении к ее методу <code>next()</code> последовательно получаем 
  все элементы. При четвертом вызове метода next условный перебор элементов в итераторе закончен, и метод возвращает объект <code>{done: true}</code>.</p>
  <p>Однако если мы хотим перебрать наш объект и получить из него его элементы, то нам не надо обращаться к методу <code>next()</code>. Поскольку объект iterable реализует 
  итератор, то его можно перебрать с помощью цикла <span class="b">for-of</span>:</p>
  <pre class="brush:js;">
  const iterable = {
    [Symbol.iterator]() {
      return {
        current: 1,
      end: 3,
        next() {
          if (this.current &lt;= this.end) {
            return { value: this.current++, done: false };
          }
          return { done: true };
        }
      };
    }
  };
  for (const value of iterable) {
    console.log(value);
  }
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  1
  2
  3
  </pre>
  <p>Цикл <code>for-of</code> автоматически обращается к методу <code>next()</code> и извлекает значение.</p>
  <p>Рассмотрим еще один пример:</p>
  <pre class="brush:js;">
  const team = {
    [Symbol.iterator]() {
      return {
        index: 0,
      members: ["Tom", "Alice", "Kate"],
        next() {
          if (this.index < this.members.length) {
            return { value: this.members[this.index++], done: false };
          }
          return { done: true };
        }
      };
    }
  };
  for (const member of team) {
    console.log(member);
  }
  </pre>
  <p>Здесь объект <code>team</code> представляет условную команду и применяет итератор, который возвращает элементы из массива members - участники команды. Для 
  отслеживания индекса текущего возвращаемого элемента из массива members определено свойство <code>index</code>, которое инкрементируется 
  при каждом вызове метода next.</p>
  <p>Реализация итератора позволяет рассматривать объект team как условную коллекцию, которую можно перебрать в цикле <code>for-of</code>. Консольный 
  вывод программы:</p>
  <pre class="browser">
  Tom
  Alice
  Kate
  </pre>`;
}

//=====================================================================================
function less151(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Генераторы</h2><div class="date">Последнее обновление: 04.09.2021</div>
  
    <p>Генераторы представляют особый тип функции, которые используются для генерации значений. Для определения генераторов применяется символ звездочки *, который ставится после ключевого слова 
  <code>function</code>. Например, определим простейший генератор:</p>
  <pre class="brush:js;">
  function* getNumber(){
    yield 5;
  }
  const numberGenerator = getNumber();
  const next = numberGenerator.next();
  console.log(next);	// {value: 5, done: false}
  </pre>
  <p>Здесь функция <code>getNumber()</code> представляет <span class="b">генератор</span>. Основные моменты создания и применения генератора:</p>
  <ul>
  <li><p>Генератор определяется как функция с помощью оператора <span class="b">function*</span> (символ звездочки после слова <code>function</code>)</p>
  <pre class="brush:js;">function* getNumber(){ .... }</pre>
  <p>Функция генератора возвращает итератор.</p>
  </li>
  <li><p>Для возвращения значения из генератора, как и вообще в итераторах, применяется оператор <span class="b">yield</span>, после которого указывается возвращаемое значение</p>
  <pre class="brush:js;">yield 5;</pre>
  <p>То есть фактически в данном случае генератор <code>getNumber()</code> генерирует число 5.</p>
  </li>
  <li><p>Для получения значения из генератора применяется оператор применяется метод <span class="b">next()</span></p>
  <pre class="brush:js;">const next = numberGenerator.next();</pre>
  <p>Так, в примере с помощью вызова функции <code>getNumber()</code> создается объект итератора в виде константа <code>numberGenerator</code>. 
  Используя этот объект, мы можем получать из генератора значения.</p>
  </li>
  </ul>
  <p>И если мы посмотрим на консольный вывод, то мы увидим, что данный метод возвращает следующие 
  данные:</p>
  <pre class="browser">
  {value: 5, done: false}
  </pre>
  <p>То есть по сути возвращается объект, свойство <span class="b">value</span> которого содержит собственно сгенерированное значение. А свойство <span class="b">done</span> 
  указывает, достигли ли мы конца генератора.</p>
  <p>Теперь изменим код:</p>
  <pre class="brush:js;">
  function* getNumber(){
    yield 5;
  }
  const numberGenerator = getNumber();
  let next = numberGenerator.next();
  console.log(next);
  next = numberGenerator.next();
  console.log(next);
  </pre>
  <p>Здесь обращение к методу next() происходит два раза:</p>
  <pre class="browser">
  {value: 5, done: false}
  {value: undefined, done: true}
  </pre>
  <p>Но функция генератора getNumber генерирует только одно значение - число 5. Поэтому при повторном вызове свойство value будет иметь значение undefined, 
  а свойство done - true, то есть работа генератора завершена.</p>
  <p>Генератор может создавать/генерировать множество значений:</p>
  <pre class="brush:js;">
  function* getNumber(){
    yield 5;
    yield 25;
    yield 125;
  }
  const numberGenerator = getNumber();
  console.log(numberGenerator.next());
  console.log(numberGenerator.next());
  console.log(numberGenerator.next());
  console.log(numberGenerator.next());
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  {value: 5, done: false}
  {value: 25, done: false}
  {value: 125, done: false}
  {value: undefined, done: true}
  </pre>
  <p>То есть при первом вызове метода <code>next()</code> из итератора извлекается значение, которое идет после первого оператора yield, при втором вызове 
  метода next() - значение после второго оператора yield и так далее.</p>
  <p>Для упрощения мы можем возвращать в генераторе элементы из массива:</p>
  <pre class="brush:js;">
  const numbers = [5, 25, 125, 625];
  function* getNumber(){
    for(const n of numbers){
      yield n;
    }
  }
  const numberGenerator = getNumber();
  console.log(numberGenerator.next().value);	// 5
  console.log(numberGenerator.next().value);	// 25
  </pre>
  <p>При этом важно понимать, что между двумя последовательными вызовами <code>next()</code> может пройти некоторое неопределенное время, между ними могут располагаться какие-то другие действия, 
  и все равно генератор будет возвращать свое следующее значение.</p>
  <pre class="brush:js;">
  const numberGenerator = getNumber();
  console.log(numberGenerator.next().value);		// 5
  // ряд других действий
  
  console.log(numberGenerator.next().value);		// 25
  </pre>
  <p>Генератор необязательно содержит только определение операторов yield. Он также может содержать более сложную логику.</p>
  <p>С помощью генераторов удобно создавать бесконечные последовательности:</p>
  <pre class="brush:js;">
  function* points(){
  
    let x = 0;
    let y = 0;
    while(true){
      yield {x:x, y:y};
      x += 2;
      y += 1;
    }
  }
  let pointGenerator = points();
  
  console.log(pointGenerator.next().value);
  console.log(pointGenerator.next().value);
  console.log(pointGenerator.next().value);
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  {x: 0, y: 0}
  {x: 2, y: 1}
  {x: 4, y: 2}
  </pre>
  <h3>Возвращение из генератора и функция return</h3>
  <p>Как выше мы увидели, каждый последующий вызов <code>next()</code> возвращает следующее значение генератора, однако мы можем завершить работу генератора с помощью 
  метода <span class="b">return()</span>:</p>
  <pre class="brush:js;">
  function* getNumber(){
    yield 5;
    yield 25;
    yield 125;
  }
  const numberGenerator = getNumber();
  console.log(numberGenerator.next());	// {value: 5, done: false}
  numberGenerator.return();	// завершаем работу генератора
  console.log(numberGenerator.next());	// {value: undefined, done: true}
  </pre>
  <h3>Получение значений генератора в цикле</h3>
  <p>Поскольку для получения значений применяется итератор, то мы можем использовать цикл <span class="b">for...of</span>:</p>
  <pre class="brush:js;">
  function* getNumber(){
    yield 5;
    yield 25;
    yield 125;
  }
  const numberGenerator = getNumber();
  
  for(const num of numberGenerator){
    console.log(num);
  }
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  5
  25
  125
  </pre>
  <p>Также мы можем применять и другие типы циклов, например, цикл <span class="b">while</span>:</p>
  <pre class="brush:js;">
  function* getNumber(){
    yield 5;
    yield 25;
    yield 125;
  }
  const numberGenerator = getNumber();
  
  while(!(item = numberGenerator.next()).done){
    console.log(item.value);
  }
  </pre>
  
  <h3>Передача данных в генератор</h3>
  <h4>Инициализация генератора</h4>
  <p>Функция генератора, как и любая другая функция, может принимать параметры. Соответственно через параметры мы можем передать в генератор некоторые 
  данные. Например:</p>
  <pre class="brush:js;">
  function* getNumber(start, end, step){
    for(let n = start; n &lt;= end; n +=step){
      yield n;
    }
  }
  const numberGenerator = getNumber(0, 8, 2);
  
  for(num of numberGenerator){
    console.log(num);
  }
  </pre>
  <p>Здесь в функцию генератора передается начальное конечное значения и шаг приращенния чисел. Консольный вывод:</p>
  <pre class="browser">
  0
  2
  4
  6
  8
  </pre>
  <p>Другой пример - определим генератор, который возвращет данные из массива:</p>
  <pre class="brush:js;">
  function* generateFromArray(items){
    for(item of items) 
      yield item;
  }
  const people = ["Tom", "Bob", "Sam"];
  const personGenerator = generateFromArray(people);
  for(person of personGenerator)
    console.log(person);
  </pre>
  <p>В данном случае в генератор передается массив, который используется для генерации значений. Консольный вывод:</p>
  <pre class="browser">
  Tom
  Bob
  Sam
  </pre>
  <h4>Передача данных в метод next</h4>
  <p>С помощью next() можно передать в генератор данные. Переданные в этот метод данные можно получить в функции генератора через предыдущий вызов оператора <span class="b">yield</span>:</p>
  <pre class="brush:js;">
  function* getNumber(){
    const n = yield 5;		// получаем значение numberGenerator.next(2).value
    console.log("n:", n);
    const m = yield 5 * n;	// получаем значение numberGenerator.next(3).value
    console.log("m:", m);
    yield 5 * m;
  }
  const numberGenerator = getNumber();
  
  console.log(numberGenerator.next().value);		// 5
  console.log(numberGenerator.next(2).value);		// 10
  console.log(numberGenerator.next(3).value);		// 15
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  5
  n: 2
  10
  m: 3
  15
  </pre>
  <p>При втором вызове метода next():</p>
  <pre class="brush:js;">numberGenerator.next(2).value</pre>
  <p>Мы можем получить переданные через него данные, присвоив результат <span class="b">первого</span> вызова оператора yield:</p>
  <pre class="brush:js;">const n = yield 5;</pre>
  <p>То есть здесь константа n будет равна 2, так как в метод next() передается число 2.</p>
  <p>Далее мы можем использовать это значение, например, для генерации нового значения:</p>
  <pre class="brush:js;">const m = yield 5 * n;</pre>
  <p>Соответственно, константа m получит значение, переданное через третий вызов метода next(), то есть число 3.</p>
  <h3>Обработка ошибок генератора</h3>
  <p>С помощью функции <span class="b">throw()</span> мы можем сгенерировать в генераторе исключение. В качестве параметра в эту функцию передается произвольное 
  значение, которое представляет информацию об ошибке:</p>
  <pre class="brush:js;">
  function* generateData(){
    try {
      yield "Tom";
      yield "Bob";
      yield "Hello Work";
    }
    catch(error) {
      console.log("Error:", error);
    }
  } 
  const personGenerator = generateData();
  console.log(personGenerator.next());		// {value: "Tom", done: false}
  personGenerator.throw("Something wrong");	// Error: Something wrong
  console.log(personGenerator.next());		// {value: undefined, done: true}
  </pre>
  <p>Прежде всего в функции генератора для обработки возможного исключения используем конструкцию <span class="b">try..catch</span>. В блоке <span class="b">catch</span> с помощью 
  параметра <code>error</code> мы можем получить информацию об ошибке, которая передается в функцию <span class="b">throw()</span>.</p>
  <p>Далее при использовании генератора мы можем вызвать эту функцию, передавая в нее произвольную информацию об ошибке (в данном случае это просто некоторое строковое сообщения)</p>
  <pre class="brush:js;">
  personGenerator.throw("Something wrong");
  </pre>
  <p>В итоге этот вызов приведет к генерации исключения в функции генератора, и управление перейдет к блоку <span class="b">catch</span>, который выводит информацию об ошибке на консоль:</p>
  <pre class="brush:js;">
  catch(error) {
    console.log("Error:", error);
  }
  </pre>
  <p>Консольный вывод программы:</p>
  <pre class="browser">
  {value: "Tom", done: false}
  Error: Something wrong
  {value: undefined, done: true}
  </pre>
  <p>Стоит отметить, что после вызова функции <code>throw()</code> генератор завершает работу, а далее при вызове метода <code>next()</code> мы получим результат <code>{value: undefined, done: true}</code></p>
  `;
}

//=====================================================================================
function less152(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Множества Set</h2><div class="date">Последнее обновление: 25.08.2021</div>
  
    <p>Множества (sets) представляют структуру данных, которая может хранить только уникальные значения. В JavaScript функционал множества опредляет 
  объект <span class="b">Set</span>. Для создания множества применяется конструктор этого объекта:</p>
  <pre class="brush:js;">const mySet = new Set();</pre>
  <p>Также можно передать в конструктор массив значений, которыми будет инициализировано множество:</p>
  <pre class="brush:js;">
  const arr = [1, 1, 2, 3, 4, 5, 2, 4];
  const numbers = new Set(arr);
  console.log(numbers);			// Set(5) {1, 2, 3, 4, 5}
  </pre>
  <p>В данном случае в множество передаются данные из массива. Однако поскольку множество может хранить только уникальные значения, то при его создании повторяющиеся значения, 
  которые есть в массиве, удаляются.</p>
  <p>Для проверки количества элементов можно использовать свойство <span class="b">size</span>.</p>
  <pre class="brush:js;">
  const arr = [1, 1, 2, 3, 4, 5, 2, 4];
  const numbers = new Set(arr);
  console.log(numbers.size);		// 5
  </pre>
  <h3>Добавление</h3>
  <p>Для добавления применяется метод <span class="b">add()</span>. Его результатом является измененное множество:</p>
  <pre class="brush:js;">
  const numbers = new Set();
  numbers.add(1);
  numbers.add(3);
  numbers.add(5);
  numbers.add(3);		// не добавляется
  numbers.add(1);		// не добавляется
  console.log(numbers);		// Set(3) {1, 3, 5}
  </pre>
  <p>При этом, поскольку множество хранит только уникальные значения, то добавление элементов, которые уже в нем есть, не имеет смысла.</p>
  <p>Так как метод add возвращает ссылку на это же множество, то мы можем вызывать методы по цепочке:</p>
  <pre class="brush:js;">
  let numbers = new Set();
  numbers.add(1).add(3).add(5);
  console.log(numbers);		// Set(3) {1, 3, 5}
  </pre>
  <h3>Удаление</h3>
  <p>Для удаления элементов применяется метод <span class="b">delete()</span>:</p>
  <pre class="brush:js;">
  let numbers = new Set();
  numbers.add(1).add(3).add(5);
  numbers.delete(3);
  console.log(numbers);		// Set(2) {1, 5}
  </pre>
  <p>Причем данный метод возвращает булевое значение: true - если элемент удален и false - если удаление не произошло (например, когда удаляемого элемента нет в множестве):</p>
  <pre class="brush:js;">
  let numbers = new Set();
  numbers.add(1).add(3).add(5);
  
  let isDeleted = numbers.delete(3);
  console.log(isDeleted);			// true
  isDeleted = numbers.delete(54);
  console.log(isDeleted);			// false
  </pre>
  <p>Если необходимо удалить вообще все элементы из множества, то применяется метод <span class="b">clear()</span>:</p>
  <pre class="brush:js;">
  let numbers = new Set();
  numbers.add(1).add(3).add(5);
  numbers.clear();
  console.log(numbers);			// Set(0) {}
  </pre>
  <h3>Проверка наличия элемента</h3>
  <p>Если нужно проверить, если ли элемент в множестве, то используется метод <span class="b">has()</span>. Если элемент есть, то метод возвращает <code>true</code>, 
  иначе возвращает <code>false</code>:</p>
  <pre class="brush:js;">
  let numbers = new Set();
  numbers.add(1).add(3).add(5);
  console.log(numbers.has(3));	// true
  console.log(numbers.has(32));	// false
  </pre>
  <h3>Перебор множества</h3>
  <p>Для перебора элементов множества применяется метод <span class="b">forEach()</span>:</p>
  <pre class="brush:js;">
  const arr = [1, 2, 3, 5];
  const numbers = new Set(arr);
  
  numbers.forEach(function(value1, value2, set){
    console.log(value1);
  })
  </pre>
  <p>Для совместимости с массивами, которые тоже имеют метод forEach, в данный метод передается функция обратного вызова, которая принимает три параметра. 
  Непосредственно для множества первый и второй параметры представляют текущий перебираемый элемент, а третий параметр - перебираемое множество.</p>
  <p>Также для перебора множества можно использовать цикл <code>for...of</code>:</p>
  <pre class="brush:js;">
  const numbers = new Set([1, 2, 3, 5]);
  
  for(n of numbers){
    console.log(n);
  }
  </pre>
  <h3>Получение итератора</h3>
  <p>Также у объекта <span class="b">Set</span> есть ряд методов, которые возвращают итератор, а точнее объект <span class="b">SetIterator</span>. Это методы 
  <code>values()</code>, <code>keys()</code>, <code>entries()</code>:</p>
  <pre class="brush:js;">
  const numbers = new Set([1, 2, 3, 5]);
  
  console.log(numbers.values());	// SetIterator {1, 2, 3, 5}
  console.log(numbers.keys());	// SetIterator {1, 2, 3, 5}
  console.log(numbers.entries());	// SetIterator {1 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3, 5 =&gt; 5}
  </pre>
  <p>Соответственно возвращаемый итератор мы можем использовать для получения объектов множества:</p>
  <pre class="brush:js;">
  const people = new Set(["Tom", "Bob", "Sam"]);
  
  const iterator = people.values();	
  
  console.log(iterator.next());	// {value: "Tom", done: false}
  console.log(iterator.next());	// {value: "Bob", done: false}
  console.log(iterator.next());	// {value: "Sam", done: false}
  console.log(iterator.next());	// {value: undefined, done: true}
  </pre>
  <h3>Удаление из массива повторяющихся элементов</h3>
  <p>Ограничения объекта Set - хранения уникальных значений позволяет эффективно его применять в ряде операций. Например, удаление из массива повторяющихся элементов:</p>
  <pre class="brush:js;">
  const peopleArray = ["Tom", "Bob", "Sam", "Alice", "Sam", "Kate", "Tom"];
  const peopleSet = new Set(peopleArray);
  const newPeopleArray = Array.from(peopleSet);
  
  console.log(newPeopleArray);	// ["Tom", "Bob", "Sam", "Alice", "Kate"]
  </pre>
  <p>Здесь для создания нового массива с неповторяющимися элементами применяется функция <span class="b">Array.from()</span>, которая в качестве аргумента получает 
  объект Set.</p>
  `;
}

//=====================================================================================
function less153(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Map</h2><div class="date">Последнее обновление: 26.08.2021</div>
  
    <p><span class="b">Map</span> или карта (отображение, словарь) представляет структуру данных, где каждый элемент имеет ключ и значение. Ключи в рамках карты являются уникальными, то есть 
  с одним ключом может быть сопоставлен только один элемент. Для создания карты применяется конструктор объекта <span class="b">Map</span>:</p>
  <pre class="brush:js;">
  const myMap = new Map();
  </pre>
  <p>Также можно инициализировать карту начальными значениями. Для этого в конструктор передается массив, элементы которого представляют массивы из двух элементов - первый элемент 
  будет выступать в качестве ключа, а второй - в качестве значения:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);
  console.log(myMap);		// Map(3) {1 =&gt; "a", 2 =&gt; "b", 3 =&gt; "c"}
  </pre>
  <p>В данном случае числа 1, 2, 3 являются ключами, а строки "a", "b", "c" - значениями.</p>
  <p>При этом ключи и значения необзательно должны быть одного типа:</p>
  <pre class="brush:js;">
  const myMap = new Map([["a", 1], [2, "b"], ["c", true]]);
  console.log(myMap);		// Map(3) {"a" =&gt; 1, 2 =&gt; "b", "c" =&gt; true}
  </pre>
  <p>С помощью свойства <span class="b">size</span> можно проверить количество элементов в Map:</p>
  <pre class="brush:js;">
  const myMap = new Map([["a", 1], [2, "b"], ["c", true]]);
  console.log(myMap.size);     // 3
  </pre>
  <h3>Добавление и изменение элементов</h3>
  <p>Для установки значения применяется метод <span class="b">set()</span>:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "a"], [2, "b"], [3, "c"]]);
  myMap.set(4, "d");		// добавление элемента
  myMap.set(2, "v");		// изменение элемента
  console.log(myMap);		// Map(4) {1 =&gt; "a", 2 =&gt; "v", 3 =&gt; "c", 4 =&gt; "d"}
  </pre>
  <p>Первый параметр метода <code>set()</code> представляет ключ, а второй параметр - значение элемента. Если по такому ключу нет элементов, то добавляется 
  новый элемент. Если ключ уже есть, то уже имеющийся элемент изменяет свое значение.</p>
  <h3>Получение элементов</h3>
  <p>Для получения элемента по ключу применяется метод <span class="b">get()</span>, в который передается ключ элемента:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  console.log(myMap.get(2));	// Bob
  console.log(myMap.get(7));	// undefined
  </pre>
  <p>Если map не содержит элемента по заданному ключу, то метод возвращает undefined.</p>
  <p>Чтобы избежать возвращения undefined мы можем проверить наличие элемента по ключу с помощью метода <span class="b">has()</span>. 
  Если элемент по ключу имеется, то метод возвращает <code>true</code>, иначе возвращается <code>false</code>:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  console.log(myMap.has(2));	// true
  console.log(myMap.has(7));	// false
  
  if(myMap.has(1)) console.log(myMap.get(1));	// Tom
  </pre>
  <h3>Удаление элементов</h3>
  <p>Для удаления одного элемента по ключу применяется метод <span class="b">delete()</span>:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  myMap.delete(2);
  console.log(myMap);		// Map(2) {1 =&gt; "Tom", 3 =&gt; "Sam"}
  </pre>
  <p>Для удаления всех элементов используется метод <span class="b">clear()</span>:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  myMap.clear();
  console.log(myMap);		// Map(0) {}
  </pre>
  <h3>Перебор элементов</h3>
  <p>Для перебора элементов используется метод <span class="b">forEach</span>:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  
  myMap.forEach(function(value1, value2, map){
    console.log(value2, value1);
  })
  </pre>
  <p>Метод forEach в качестве параметра получает функцию обратного вызова, которая имеет три параметра. Первый и второй параметры - это соответственно значение и ключ текущего перебираемого элемента, 
  а третий параметр - перебираемый объект Map.</p>
  <p>Консольный вывод данного примера:</p>
  <pre class="browser">
  1 Tom
  2 Bob
  3 Sam
  </pre>
  <p>Также для перебора объекта Map можно использовать циклы, например, цикл <code>for...of</code>:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  
  for(item of myMap){
    console.log(item[0], item[1]);
  }
  </pre>
  <p>Каждый элемент из Map помещается в переменную item, которая в свою очередь представляет массив. Первый элемент этого массива - ключ, а второй элемент - 
  значение элемента.</p>
  <p>Также объект Map имеет два дополнительных метода: <span class="b">keys()</span> позволяет перебрать только ключи и <span class="b">values()</span> 
  позволяет перебирать значения элементов. Оба метода возвращают итераторы, поэтому для перебора ключей и значений по отдельности также можно использовать 
  цикл for...of:</p>
  <pre class="brush:js;">
  const myMap = new Map([[1, "Tom"], [2, "Bob"], [3, "Sam"]]);
  
  for(item of myMap.keys()){
    console.log(item);
  }
  for(item of myMap.values()){
    console.log(item);
  }
  </pre>`;
}

//=====================================================================================
function less154(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>WeakSet</h2><div class="date">Последнее обновление: 26.08.2021</div>
  
    <p>Объект <span class="b">WeakSet</span> во многом похож на обычное множество. Он также может хранить только уникальные значения, но каждый его элемент должен представлять объект.</p>
  <p>Для создания объекта WeakSet используется его конструктор, в который можно передать начальные значения:</p>
  <pre class="brush:js;">
  // пустой WeakSet
  const weakSet1 = new WeakSet();
  // инициализация начальными значениями
  const weakSet2 = new WeakSet([{name:"Tom", age: 37}, {name:"Alice", age: 34}]);
  </pre>
  <p>Для инициализации как в случае с объектом Set в конструктор передается массив, но данный массив содержит именно объекты, а не скалярные значения, типа чисел или строк.</p>
  <p>Для добавления данных в WeakSet применяется метод <span class="b">add()</span>:</p>
  <pre class="brush:js;">
  const weakSet = new WeakSet();
  weakSet.add({lang: "JavaScript"});
  weakSet.add({lang: "TypeScript"});
  // weakSet.add(34);	// так нельзя - 34 - число, а не объект
  console.log(weakSet);	// {{lang: "JavaScript"}, {lang: "TypeScript"}}
  </pre>
  <p>Причем опять же добавить мы можем только объект, а не скалярные значения типа чисел или строк.</p>
  <p>Для удаления применяется метод <span	class="b">delete()</span>, в который передается ссылка на удаляемый объект:</p>
  <pre class="brush:js;">
  const weakSet = new WeakSet();
  const js = {lang: "JavaScript"};
  const ts = {lang: "TypeScript"};
  weakSet.add(js);
  weakSet.add(ts);
  
  weakSet.delete(js);
  
  console.log(weakSet);	// {{lang: "TypeScript"}}
  </pre>
  <p>Если надо проверить, имеется ли объект в WeakSet, то можно использовать метод <span class="b">has()</span>, который возвращает true при наличии объекта:</p>
  <pre class="brush:js;">
  const js = {lang: "JavaScript"};
  const ts = {lang: "TypeScript"};
  const java = {lang: "Java"};
  const weakSet = new WeakSet([js, ts]);
  console.log(weakSet.has(ts));		// true
  console.log(weakSet.has(java));		//  false
  </pre>
  <h4>Перебор WeakSet</h4>
  <p>Стоит отметить, что WeakSet не поддерживает перебор ни с помощью метода ForEach, которого у WeakSet нет, ни с помощью цикла for. Например. если мы 
  попробуем перебрать WeakSet через цикл <code>for..of</code>:</p>
  <pre class="brush:js;">
  const weakSet = new WeakSet([
    {lang: "JavaScript"}, 
    {lang: "TypeScript"}, 
    {lang: "Java"}
  ]);
  
  
  for(item of weakSet){
    console.log(item);
  }
  </pre>
  <p>То мы получим ошибку</p>
  <pre class="browser">
  Uncaught TypeError: weakSet is not iterable
  </pre>
  <h4>Слабые ссылки</h4>
  <p>Объекты передаются в  WeakSet по ссылке. И когда объект перестае существовать в силу различных причин, он удаляется из WeakSet. 
  Так, рассмотрим следующий пример:</p>
  <pre class="brush:js;">
  let js = {lang: "JavaScript"};
  let ts = {lang: "TypeScript"};
  const weakSet = new WeakSet([js, ts]);
  
  js = null;
  
  console.log(weakSet);	// {{lang: "JavaScript"}, {lang: "TypeScript"}}
  console.log("Некоторая работа");
  const timerId = setTimeout(function(){
    console.log(weakSet);	// {{lang: "TypeScript"}}
    clearTimeout(timerId);
  }, 9000);
  </pre>
  <p>В данном случае сначала объект <code>WeakSet</code> хранит ссылки на два объекта: js и ts. Далее мы устанавливаем значение для переменной js в <code>null</code>.</p>
  <p>Это приведет к тому, что спустя некоторое время начальное значение этой переменной будет удалено сборщиком мусора JavaScript.</p>
  <pre class="brush:js;">js = null;</pre>
  <p>Причем если сразу после этого мы посмотрим на содержимое weakSet, то увидим, что объект js в нем еще присутствует. Однако спустя некоторое время ссылка будет удалена из weakSet. Для эмуляции прошествия времени 
  здесь используется функция <code>setTimeout</code>, которая выводит на консоль содержимое weakSet через 9000 секунд (конкретный период времени, через который сборщик мусора удалит значение, может отличаться)</p>
  <p>Теперь сравним с тем, что произойдет, если вместо WeakSet использовать <span class="b">Set</span>:</p>
  <pre class="brush:js;">
  let js = {lang: "JavaScript"};
  let ts = {lang: "TypeScript"};
  const set = new Set([js, ts]);
  
  js = null;
  
  console.log(set);	// Set(2) {{lang: "JavaScript"}, {lang: "TypeScript"}}
  console.log("Некоторая работа");
  const timerId = setTimeout(function(){
    console.log(set);	// Set(2){{lang: "JavaScript"}, {lang: "TypeScript"}}
    clearTimeout(timerId);
  }, 10000);
  </pre>
  <p>В случае с Set даже спустя некоторое время мы увидим, что в объекте Set до сих пор присутствует объект, для которого было установлено значение <code>null</code></p>
  `;
}

//=====================================================================================
function less155(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>WeakMap</h2><div class="date">Последнее обновление: 26.08.2021</div>
  
    <p>WeakMap представляет развитие коллекции Map. Особенностью WeakMap является то, что все ее элементы должны представлять объекты. 
  При этом ключи должны представлять объекты.</p>
  <p>Создание WeakMap:</p>
  <pre class="brush:js;">
  // пустой WeakMap
  const weakMap1 = new WeakMap();
  
  // WeakMap с инициализацией данными
  let key1 = {key:1};
  let key2 = {key:2};
  let value1 = {name: "Tom"};
  let value2 = {name: "Sam"};
  
  const weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
  // или так
  // const weakMap2 = new WeakMap([[{key:1}, {name: "Tom"}], [{key:2}, {name: "Sam"}]]);
  </pre>
  <p>Стоит отметить, что объект WeakMap не поддерживает перебор.</p>
  <p>Для добавления новых объектов или изменения старых применяется метод <span class="b">set()</span>:</p>
  <pre class="brush:js;">
  let key1 = {key:1};
  let key2 = {key:2};
  let value1 = {name: "Tom"};
  let value2 = {name: "Sam"};
  
  const weakMap2 = new WeakMap([[key1, value1]]);
  weakMap2.set(key2, value2);
  weakMap2.set(key1, {name: "Kate"});
  console.log(weakMap2.get(key1));	//{name: "Kate"}
  console.log(weakMap2.get(key2));	//{name: "Sam"}
  </pre>
  <p>Для получения объектов по ключу из WeakMap применяется метод <span class="b">get()</span>:</p>
  <pre class="brush:js;">
  let key1 = {key:1};
  let key2 = {key:2};
  let value1 = {name: "Tom"};
  let value2 = {name: "Sam"};
  
  const weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
  console.log(weakMap2.get(key1));	// {name: "Tom"}
  </pre>
  <p>Чтобы проверить наличие элемента по определенному ключу, применяется метод <span class="b">has()</span>, который возвращает true при наличии элемента:</p>
  <pre class="brush:js;">
  let key1 = {key:1},
    key2 = {key:2};
  let value1 = {name: "Tom"},
    value2 = {name: "Sam"};
  
  const weakMap2 = new WeakMap([[key1, value1]]);
  console.log(weakMap2.has(key1));	// true
  console.log(weakMap2.has(key2));	// false
  </pre>
  <p>Для удаления элемента по ключу применяется метод <span class="b">delete()</span>:</p>
  <pre class="brush:js;">
  let key1 = {key:1},
    key2 = {key:2};
  let value1 = {name: "Tom"},
    value2 = {name: "Sam"};
  
  const weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
  console.log(weakMap2.has(key1));	// true
  weakMap2.delete(key1);
  console.log(weakMap2.has(key1));	// false
  </pre>
  
  <h4>Слабые ссылки</h4>
  <p>Объекты передаются в WeakMap по ссылке. И когда объект перестает существовать в силу различных причин, он удаляется из WeakMap. 
  Рассмотрим следующий пример:</p>
  <pre class="brush:js;">
  let jsCode = {code: "js"},
    tsCode = {code: "ts"};
  let js = {lang: "JavaScript"},
    ts = {lang: "TypeScript"};
  const weakMap = new WeakMap([[jsCode, js], [tsCode, ts]]);
  
  jsCode = null;
  
  console.log(weakMap);	// WeakMap {{code: "js"} =&gt; {lang: "JavaScript"}, {code: "ts"} =&gt; {lang: "TypeScript"}}
  console.log("Некоторая работа");
  const timerId = setTimeout(function(){
    console.log(weakMap);	// WeakMap {{code: "ts"} =&gt; {lang: "TypeScript"}}
    clearTimeout(timerId);
  }, 10000);
  </pre>
  <p>В данном случае сначала объект <code>WeakMap</code> хранит ссылки на два элемента с ключами jsCode и tsCode. Далее для переменной jsCode устанавливается 
  значение <code>null</code>.</p>
  <pre class="brush:js;">jsCode = null;</pre>
  <p>Это приведет к тому, что спустя некоторое время начальное значение этой переменной будет удалено сборщиком мусора JavaScript.</p>
  
  <p>Причем если сразу после этого мы посмотрим на содержимое weakMap, то увидим, что объект с ключом jsCode в нем еще присутствует. Однако спустя некоторое время ссылка будет удалена из weakSet. Для эмуляции прошествия времени 
  здесь используется функция <code>setTimeout</code>, которая выводит на консоль содержимое weakSet через 10000 секунд (конкретный период времени, через который сборщик мусора удалит значение, может отличаться)</p>
  <p>Теперь сравним с тем, что произойдет, если вместо WeakMap использовать <span class="b">Map</span>:</p>
  <pre class="brush:js;">
  let jsCode = {code: "js"},
    tsCode = {code: "ts"};
  let js = {lang: "JavaScript"},
    ts = {lang: "TypeScript"};
  const map = new Map([[jsCode, js], [tsCode, ts]]);
  
  jsCode = null;
  
  console.log(map);	// Map(2) {{code: "js"} =&gt; {lang: "JavaScript"}, {code: "ts"} =&gt; {lang: "TypeScript"}}
  console.log("Некоторая работа");
  const timerId = setTimeout(function(){
    console.log(map);	// Map(2) {{code: "js"} =&gt; {lang: "JavaScript"}, {code: "ts"} =&gt; {lang: "TypeScript"}}
    clearTimeout(timerId);
  }, 10000);
  </pre>
  <p>В случае с Map даже спустя некоторое время мы увидим, что в объекте Map до сих пор присутствует объект, для которого было установлено значение <code>null</code></p>
  `;
}
//=====================================================================================
function less160(){  
    document.querySelector(".frameCenter0").innerHTML=`<h1>Promise</h1><h2>Введение в промисы</h2><div class="date">Последнее обновление: 30.08.2021</div>
  
    <p>При стандартном выполнении JavaScript инструкции выполняются последовательно, одна за другой. То есть сначала выполняется первая инструкция, потом вторая и так далее. 
  Однако что, если одна из этих операций выполняется продолжительное время. Например, она выполняет какую-то высоконагруженную работу, как обращение по сети или обращение к базе данных, что может занять 
  неопределенное и иногда продолжительное время. В итоге при последовательном выполнении все последующие операции будут ожидать выполнения этой операции. Чтобы избежать подобной ситуации JavaScript предоставляет 
  ряд инструментов, которые позволяют избежать подобного сценария, чтобы последующие операции могли выполняться, пока выполняется продолжительная операция. Одним из таким инструментов являются 
  промисы (promise).</p>
  <p><span class="b">Промис (promise)</span> - это объект, представляющий результат успешного или неудачного завершения асинхронной операции. Асинхронная операция, упрощенно говоря, 
  это некоторое действие, выполняется независимо от окружающего ее кода, в котором она вызывается, не блокирует выполнение вызываемого кода.</p>
  <p>Промис может находиться в одном из следующих состояний:</p>
  <ul>
  <li><p><span class="b">pending</span> (состояние ожидания): начальное состояние, промис создан, но выполнение еще не завершено</p></li>
  <li><p><span class="b">fulfilled</span> (успешно завершено): действие, которое представляет промис, успешно завершено</p></li>
  <li><p><span class="b">rejected</span> (завершено с ошибкой): при выполнении действия, которое представляет промис, произошла ошибка</p></li>
  </ul>
  <p>Для создания промиса применяется конструктор типа <span class="b">Promise</span>:</p>
  <pre class="brush:js;">new Promise(executor)</pre>
  <p>В качестве параметра конструктор принимает функцию, которая выполняется при создании промиса. Обычно эта функция представляет асинхронные операции, которые занимают продолжительное время. 
  Например, определим простейший промис:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(){
    console.log("Выполнение асинхронной операции");
  });
  </pre>
  <p>Здесь функция просто выводит на консоль сообщение. Соответственно при выполнении этого кода мы увидим на консоли сообщение <code>"Выполнение асинхронной операции"</code>.</p>
  <p>При создании промиса, когда его функция еще не начала выполняться, промис переходит в состояние "pending", то есть ожидает выполнения.</p>
  <p>Как правило, функция, которая передается в конструктор Promise, принимает два параметра:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
  });
  </pre>
  <p>Оба этих параметра - <code>resolve</code> и <code>reject</code> также представляют функции. И каждая из этих функций принимает параметр любого типа.</p>
  <p>Первый параметр - функция <code>resolve</code> вызывается в случае успешного выполнения. Мы можем в нее передать значение, которое мы можем получить в результате 
  успешного выполнения.</p><p>Второй параметр - функция <code>reject</code> вызывается, если выполнение операции завершилось с ошибкой. Мы можем в нее передать значение, 
  которое представит некоторую информацию об ошибке.</p>
  <h3>Успешное выполнение промиса</h3>
  <p>Итак, первый параметр функции в конструкторе Promise - функция <code>resolve</code> выполняется при успешном выполненим. В эту функцию обычно передается значение, которое 
  представляет результат операции при успешном выполнении. Это значение может представлять любой объект. Например, передадим в эту функцию строку:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    
    resolve("Привет мир!");
  });
  </pre>
  <p>Функция <code>resolve()</code> вызывается в конце выполняемой операции после всех действий. При вызове этой функции промис переходит в состояние 
  <code>fulfilled</code> (успешно выполнено).</p>
  <p>При этом стоит отметить, что теоретически мы можем возвратить из функции результат, но практического смысла в этом не будет:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    
    return "Привет мир!";
  });
  </pre>
  <p>Данное возвращаемое значение мы не сможем передать во вне. И если действительно надо возвратить какой-то результат, то он передается в функцию <code>resolve()</code>.</p>
  <h3>Передача информации об ошибке</h3>
  <p>Второй параметр функции в конструкторе Promise - функция <code>reject</code> вызывается при возникновении ошибки. В эту функцию обычно 
  передается некоторая информация об ошибке, которое может представлять любой объект. Например:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    reject("Переданы некорректные данные");
  });
  </pre>
  <p>При вызове функции <code>reject()</code> промис переходит в состояние 
  <code>rejected</code> (завершилось с ошибкой).</p>
  <h3>Объединение resolve и reject</h3>
  <p>Естественно мы можем определить логику, при которой в зависимости от условий будут выполняться обе функции:</p>
  <pre class="brush:js;">
  const x = 4;
  const y = 0;
  const myPromise = new Promise(function(resolve, reject){
  
    if(y === 0)	{
      reject("Переданы некорректные данные");
    }
    else{
      const z = x / y;
      resolve(z);
    }
  });
  </pre>
  <p>В данном случае, если значени константы <code>y</code> равно 0, то сообщаем об ошибке, вызывая функцию <code>reject()</code>. Если не равно 0, то выполняем операцию деления 
  и передаем результат в функцию <code>resolve()</code>.</p>
  `;
}
//=====================================================================================
function less161(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Получение результата операции в Promise</h2><div class="date">Последнее обновление: 04.09.2021</div>
  
    <p>Ранее мы рассмотрели, как из функции промиса мы можем передать во вне результат асинхронной операции:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    resolve("Привет мир!");
  });
  </pre>
  <p>Теперь получим это значение. Для получения результата операции промиса применяется функция <span class="b">then()</span> объекта <code>Promise</code>:</p>
  <pre class="brush:js;">then(onFulfilled, onRejected);</pre>
  <p>Первый параметр функции - <code>onFulfilled</code> представляет функцию, которая выполняется при успешном завершении промиса и в качестве параметра получает переданные в <code>resolve()</code> данные.</p>
  <p>Второй параметр функции - <code>onRejected</code> представляет функцию, которая выполняется при возникновении ошибки и в качестве параметра 
  получает переданные в <code>reject()</code> данные.</p>
  <p>Функция <span class="b">then()</span> возвращает также объект <code>Promise</code>.</p>
  <p>Так, получим переданные данные:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    resolve("Привет мир!");
  });
  myPromise.then(function(value){
    console.log(\`Из промиса получены данные: \${value}\`);
  })
  </pre>
  <p>То есть параметр <code>value</code> здесь будет представлять строку <code>"Привет мир!"</code>, которая передается в <code>resolve("Привет мир!")</code>. 
  В итоге консольный вывод будет выглядеть следующим образом:</p>
  <div class="console"><pre class="consoletext">
  Выполнение асинхронной операции
  Из промиса получены данные: Привет мир!
  </pre></div>
  <p>При этом нам необязательно вообще передавать в <code>resolve()</code> какое-либо значение. Возможно, асинхронная операция просто выполняется и передает во вне никакого результата.</p>
  <pre class="brush:js;">
  const x = 4;
  const y = 8;
  const myPromise = new Promise(function(){
    console.log("Выполнение асинхронной операции");
    const z = x + y;
    console.log(\`Результат операции: \${z}\`)
  });
  myPromise.then();
  </pre>
  <p>В данном случае функция в промисе вычисляет сумму чисел x и y и выводит результат на консоль.</p>
  <h3>Метод Promise.resolve</h3>
  <p>Иногда требуется просто вернуть из промиса некоторое значение. Для этого можно использовать метод <span class="b">Promise.resolve()</span>. В этот метод передается 
  возвращаемое из промиса значение. Метод <span class="b">Promise.resolve()</span> возвращает объект Promise:</p>
  <pre class="brush:js;">
  const myPromise = Promise.resolve("Привет мир!");
  
  myPromise.then(value =&gt; console.log(value)); 	// Привет мир!
  </pre>
  <h3>Определение промиса через функцию</h3>
  <p>Нередко промис определяется через функцию, которая возвращет объект Promise. Например:</p>
  <pre class="brush:js;">
  function sum(x, y){ 
    return new Promise(function(resolve){
      const result = x + y;
      resolve(result);
    })
  }
  sum(3, 5).then(function(value){ console.log("Результат операции:", value);});
  sum(25, 4).then(function(value){ console.log("Сумма чисел:", value);});
  </pre>
  <p>Здесь функция <code>sum()</code> принимает два числа и возвращает промис, который инкапсулирует операцию сумму этих чисел. После вычисления сумма чисел передается в 
  <code>resolve()</code>, соответственно мы ее затем можем получить через метод <code>then()</code>. Определение промиса через функцию позволяет нам, с одной стороны, при вызове функции 
  передавать разные значения. А с другой стороны, работать с результатом этой функции как с промисом и настроить при каждом конкретном вызове обработку полученного 
  значения.</p>
  <p>Результат работы программы:</p>
  <div class="console">
  <pre class="consoletext">
  Результат операции: 8
  Сумма чисел: 29
  </pre>
  </div>
  <p>Однако, что если у нас совпадает принцип обработки полученного из асинхронной функции значения?</p>
  <pre class="brush:js;">
  sum(3, 5).then(function(value){ console.log("Результат операции:", value);});
  sum(25, 4).then(function(value){ console.log("Результат операции:", value);});
  </pre>
  <p>В этом случае логика обработки будет повторяться. Но поскольку метод <code>then()</code> также возвращает объект Promise, то мы можем сделать следующим образом:</p>
  <pre class="brush:js;">
  function sum(x, y){ 
    return new Promise(function(resolve){
      const result = x + y;
      resolve(result);
    }).then(function(value){ console.log("Результат операции:", value);});
  }
  sum(3, 5);
  sum(25, 4);
  </pre>
  <h4>Гибкая настройка функции</h4>
  <p>А что, если мы хотим, чтобы у программиста был выбор: если он хочет, то может определить свой обработчик, а если нет, то применяется некоторый обработчик по умолчанию. 
  В этом случае мы можем определить функцию обработчика в качестве параметра функции, а если он не передан, то устанавливать обработчик по умолчанию:</p>
  <pre class="brush:js;">
  function sum(x, y, func){ 
    // если обработчик не установлен, то устанавливаем обработчик по умолчанию
    if(func===undefined) func = function(value){ console.log("Результат операции:", value);};
    
    return new Promise(function(resolve){
      const result = x + y;
      resolve(result);
    }).then(func);
  }
  sum(3, 5);
  sum(25, 4, function(value){ console.log("Сумма:", value);});
  </pre>
  <p>Здесь при первом вызове функции <code>sum()</code> (<code>sum(3, 5)</code>) будет срабатывать обработчик по умолчанию. Во втором случае обработчик явным 
  образом передается через третий параметр, соответственно он будет задействован <code>sum(25, 4, function(value){ console.log("Сумма:", value);})</code></p>
  `;
}
//=====================================================================================
function less162(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Обработка ошибок в Promise</h2><div class="date">Последнее обновление: 30.08.2021</div>
  
    <p>Одним из преимуществ промисов является более простая обработка ошибок. Для получения и обработки ошибки мы можем использовать 
  функцию <span class="b">catch()</span> объекта <code>Promise</code>, которая в качестве параметра принимает функцию обработчика ошибки:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    reject("Переданы некорректные данные");
  });
  myPromise.catch( function(error){
    console.log(error);
  });
  </pre>
  <p>Функция <span class="b">catch()</span> в качестве параметра принимает обработчик ошибки. Параметром этой функции-обработчика является то значение, 
  которое передается в <code>reject()</code>.</p>
  <p>Консольный вывод:</p>
  <div class="console"><pre class="consoletext">
  Выполнение асинхронной операции
  Переданы некорректные данные
  </pre></div>
  <h3>Генерация ошибки</h3>
  <p>Выше для извещения о возникшей ошибке вызывалась функция <code>reject()</code>. Но стоит отметить, что ошибка может возникнуть и без вызова функции 
  <code>reject()</code>. И если в выполняемой в промисе операции генерируется ошибка в силу тех или иных причин, то вся операция также завершается ошибкой. 
  Например, в следующем коде вызывается нигде не определенная функция <code>getSomeWork()</code>:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    getSomeWork();		// вызов не существующей функции
    resolve("Hello world!");
  });
  myPromise.catch( function(error){
    console.log(error);
  });
  </pre>
  <p>Поскольку функция <code>getSomeWork()</code> нигде не объявлена, то выполнение асинхронной задачи завершится ошибкой и не дойдет до вызова <code>resolve("Hello world!")</code>. 
  Поэтому сработает функция обработки ошибок из <code>catch()</code>, которая через параметр error получит информацию о возникшей ошибке, и 
  в консоли браузера мы увидим сообщение об ошибке:</p>
  <div class="console"><pre class="consoletext">
  Выполнение асинхронной операции
  ReferenceError: getSomeWork is not defined
      at index.html:39
      at new Promise (&lt;anonymous&gt;)
      at index.html:37
  </pre></div>
  <h4>throw</h4>
  <p>Также ошибка может быть результатом вызова оператора <span class="b">throw</span>, который генерирует ошибку:</p>
  <pre class="brush:js;">
  cconst myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    const parsed = parseInt("Hello");
    if (isNaN(parsed)) { 
      throw "Not a number";			// Генерируем ошибку
    }
    resolve(parsed);
  });
  myPromise.catch( function(error){
    console.log(error);
  });
  </pre>
  <p>Здесь парсится в число случайная строка. И если результат парсинга не представляет число, то с помощью оператора <code>throw</code> генерируем ошибку. 
  Это придет к завершению всей функции с ошибкой. И в итоге результат будет обработан функцией <code>catch</code>:</p>
  <div class="console"><pre class="consoletext">
  Выполнение асинхронной операции
  Not a number
  </pre></div>
  <p>В этом случае функция обработчика получает сообщение об оошибке, который указывается после оператора <code>throw</code>.</p>
  <p>Данная ситуация может показаться искуственной, так как нам нет смысла генерировать в коде выше ошибку с помощью throw, поскольку в этом случае мы также 
  можем передать сообщение об ошибке в функцию reject:</p>
  <pre class="brush:js;">
  if (isNaN(parsed)) { 
    reject("Not a number");
  }
  </pre>
  <p>Однако данный оператор может применяться во внешней функции, которую мы вызываем в коде:</p>
  <pre class="brush:js;">
  function getNumber(str){
    const parsed = parseInt(str);
    if (isNaN(parsed)) throw "Not a number";			// Генерируем ошибку
    else return parsed;
  }
  const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    const result = getNumber("hello");
    resolve(result);
  });
  myPromise.catch( function(error){
    console.log(error);
  });
  </pre>
  <p>Здесь парсинг строки в число вынесен во внешнюю функцию - <code>getNumber</code>, однако при вызове этой функции в промисе, также из оператора throw возникнет ошибка. 
  И соответственно будет выполняться функция <code>catch()</code>, где роизойдет обработка ошибки.</p>
  <h4>try..catch</h4>
  <p>Как и в общем случае, операции, которые могут генерировать ошибку, можно помещать в конструкцию <code>try..catch</code>, а при возникновении исключения в блоке catch вызывать функцию <code>reject()</code>:</p>
  <pre class="brush:js;">
  const myPromise = new Promise(function(resolve, reject){
    try{
      console.log("Выполнение асинхронной операции");
      getSomeWork();		// вызов не существующей функции
      resolve("Hello world!");
    }
    catch(err){
      reject(\`Произошла ошибка: \${err.message}\`);
    }
  });
  myPromise.catch( function(error){
    console.log(error);
  });
  </pre>
  <p>Консольный вывод:</p>
  <div class="console"><pre class="consoletext">
  Выполнение асинхронной операции
  Произошла ошибка: getSomeWork is not defined
  </pre></div>
  <h3>Обработка ошибки с помощью функции then</h3>
  <p>Кроме функции <code>catch</code> для получения информации об ошибке и ее обработки также можно использовать функцию 
  <span class="b">then()</span> - ее второй параметр представляет обработчик ошибки, который в качестве параметра получает переданное из функции 
  <code>reject</code> значение:</p>
  <pre class="brush:js;">
  promise
    .then(function(value){
      // получение значения
    },
    function(error){
      // обработка ошибки
    });
   </pre>
  <p>Второй параметр функции <code>then()</code> представляет функцию обработчика ошибок. С помощью параметра <code>error</code> в функции-обработчика мы можем получить переданное в <code>reject()</code> значение, либо информацию о возникшей ошибке.</p>
   <p>Рассмотрим следуюший пример:</p>
  <pre class="brush:js;">
  function generateNumber(str){ 
    return new Promise(function(resolve, reject){
      const parsed = parseInt(str);
      if (isNaN(parsed))	reject("значение не является числом")
      else resolve(parsed);
    })
    .then(function(value){ console.log("Результат операции:", value);}, 
      function(error){ console.log("Возникла ошибка:", error);});
  }
  
  generateNumber("23");
  generateNumber("hello");
  </pre>
  <p>В данном случае для того, чтобы в промис можно было передать разные данные, он определен как возващаемый результат функции <code>generateNumber()</code>. То есть в данном случае консольный вывод будет следующим:</p>
  <div class="console"><pre class="consoletext">
  Результат операции: 23
  Возникла ошибка: значение не является числом
  </pre></div>`;
}

//=====================================================================================
function less163(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Создание цепочек промисов</h2><div class="date">Последнее обновление: 04.09.2021</div>
  
    <p>Одним из примуществом промисов является то, что они позволяют создавать цепочки промисов. Так, ранее мы рассмотрели применение методов <span class="b">then()</span> и 
  <span class="b">catch()</span> для получения и обработки результатов и ошибок асинхронной операции. При выполнении эти методы генерируют новый объект 
  <span class="b">Promise</span>, для которого мы также можем вызвать методы <code>then()</code> и <code>catch()</code>, и, таким образом, построить цепочку промисов. 
  Благодаря этому мы можем обрабатывать подряд несколько асинхронных операций - одна за другой.</p>
  <pre class="brush:js;">promise.then(..).then(..).then(..)</pre>
  <p>Возвращаемое значение из функции-обработчика в методе <span class="b">then()</span> передается в последующий вызов метода <code>then()</code> в цепочке:</p>
  <pre class="brush:js;">
  const helloPromise = new Promise(function(resolve){
      resolve("Hello");
  })
  
  const worldPromise = helloPromise.then(function(value){
      // возвращаем новое значение
      return value + " World";
  });
  const metanitPromise = worldPromise.then(function(value){
      // возвращаем новое значение
      return value + " from METANIT.COM";
  });
  metanitPromise.then(function(finalValue){
      // получаем финальное значение
      console.log(finalValue);	// Hello World from METANIT.COM
  });
  </pre>
  <p>Здесь для большей ясности весь процесс раздел на раздельные промисы: helloPromise, worldPromise и metanitPromise.</p>
  <img src="./pics/promise1.png" alt="Цепочка промисов Promise в JavaScript" />
  <p>Рассмотрим поэтапно.</p>
  <ol><li><p>Сначала создается промис <code>helloPromise</code>:</p>
  <pre class="brush:js;">
  const helloPromise = new Promise(function(resolve){
    resolve("Hello");
  });
  </pre>
  <p>В асинхронной операции с помощью вызова <code>resolve("Hello")</code> промис переводится в состояние <code>fulfilled</code>, то есть выполнение операции 
  успешно завершено. А во вне передается значение "Hello".</p>
  </li>
  
  <li><p>Далее у промиса <code>helloPromise</code> вызывается метод <span class="b">then()</span>:</p>
  <pre class="brush:js;">
  const worldPromise = helloPromise.then(function(value){
      // возвращаем новое значение
      return value + " World";
  });
  </pre>
  <p>В качестве значения параметра <code>value</code> функция обработчика получает строку "Hello" и затем возвращает строку "Hello World". Эта строка затем можно будет получить через метод 
  <code>then()</code> нового промиса, который генерируется вызовом <code>helloPromise.then()</code> и который называется здесь <code>worldPromise</code>.</p>
  </li>
  
  <li><p>Затем аналогичным образом у промиса <code>worldPromise</code> вызывается метод <span class="b">then()</span>:</p>
  <pre class="brush:js;">
  const metanitPromise = worldPromise.then(function(value){
      // возвращаем новое значение
      return value + " from METANIT.COM";
  });
  </pre>
  <p>В качестве значения параметра <code>value</code> функция обработчика получает строку "Hello World" и затем возвращает строку "Hello World from METANIT.COM". 
  Вызов <code>worldPromise.then()</code> возвращает новый промис <code>metanitPromise</code>.</p>
  </li>
  
  <li><p>На последним этапе у промиса <code>metanitPromise</code> вызывается метод <span class="b">then()</span>:</p>
  <pre class="brush:js;">
  metanitPromise.then(function(finalValue){
    console.log(finalValue);	// Hello World from METANIT.COM
  });
  </pre>
  <p>Здесь через параметр <code>finalValue</code> получаем финальное значение - строку "Hello World from METANIT.COM" и выводим на консоль. После этого цепочка завершена.</p>
  </li>
  </ul>
  <p>Для большей краткости и наглядности мы можем упростить цепочку:</p>
  <pre class="brush:js;">
  new Promise(resolve =&gt; resolve("Hello"))
  .then(value =&gt; value + " World")
  .then(value =&gt; value + " from METANIT.COM")
  .then(finalValue =&gt; console.log(finalValue));
  </pre>
  <h3>Обработка ошибок</h3>
  Для обработки ошибок к цепочки в конце добавляется метод <span class="b">catch()</span>, который также возвращет объект Promise. 
  Рассмотрим на простом примере:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
      .then(value =&gt; console.log(value))
      .catch(error =&gt; console.log(error));	
  }
  printNumber("rty");	// Not a number
  printNumber("3");	// 3
  </pre>
  <p>В данном случае функция <code>generateNumber()</code> возвращает промис, в котором получаем извне некоторое значение, 
  пытаемся конвертировать его в число. В функции <code>printNumber()</code> вызываем эту функцию и у полученного промиса создаем небольшую цепочку из 
  методов <code>then()</code> и <code>catch()</code>.</p>
  <p>Если конвертация строки в число в промисе прошла успешно, то распарсенное число передачется в функцию <code>resolve()</code>:</p>
  <pre class="brush:js;">else resolve(parsed)</pre>
  <p>В этом случае при получении этого результата срабатывает метод <span class="b">then()</span>, который в данном случае выводит полученное значение на консоль:</p>
  <pre class="brush:js;">
  .then(value =&gt; console.log(value))
  </pre>
  <p>Метод <span class="b">catch()</span> при отстутствии ошибок не выполняется.</p>
  <p>Однако если передаеваемое значение невозможно конвертировать в число, соответственно в промисе выполняется вызов</p>
  <pre class="brush:js;">if (isNaN(parsed)) reject("Not a number");</pre>
  <p>В этом случае метод <code>then()</code> игнорируется, и выполнение переходит к вызову</p>
  <pre class="brush:js;">.catch(error =&gt; console.log(error));</pre>
  <h4>Обработка ошибок в цепочке промисов</h4>
  <p>Теперь усложним цепочку. Пусть у нас в цепочке выполняется сразу несколько промисов:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
      .then(value =&gt; {
        if (value===4) throw "Несчастливое число";
        return value * value;
      })
      .then(finalValue =&gt; console.log(\`Result: \${finalValue}\`))
      .catch(error =&gt; console.error(error));
  }
  printNumber("rty");	// Not a number
  printNumber("3");	// Result: 9
  printNumber("4");	// Несчастливое число
  printNumber("5");	// Result: 25
  </pre>
  <p>Здесь для простоты весь код вынесен в функцию <code>generateNumber()</code>, которая создает цепочку промисов. В этой цепочке промисов 
  также получаем извне некоторое значение, пытаемся конвертировать его в число, и затем вычисляем его квадрат и выводит на консоль. В конце которой находится метод <code>catch()</code>. В этот метод передается обработчик ощибки, 
  который получает ошибку и выводит ее на консоль. В итоге если в цепочке промисов на одном из этапов генерируется ошибка (в силу внутренней работы кода, например, при генерации ошибки с помощью оператора <code>throw</code>, либо при вызове функции <code>reject()</code>), 
  то все последующие вызовы метода <code>then()</code>, которые содержат только обработку значения, игнорируются, и выполнение цепочки переходит к методу 
  <code>catch()</code>.</p>
  <p>Для примера вызываем функцию <code>printNumber()</code>, передавая в нее различные исходные данные. Например, при выполнении вызова</p>
  <pre class="brush:js;">printNumber("rty");	// Not a number</pre>
  <h4>Возвращаемое Promise из catch</h4>
  <p>При этом стоит отметить, что, поскольку <code>catch()</code> возвращает объект Promise, то далее также можно продолжить цепочку:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
      .then(value =&gt; value * value)
      .then(value =&gt; console.log(\`Result: \${value}\`))
      .catch(error =&gt; console.error(error))
      .then(() =&gt; console.log("Work has been done"));
  }
  printNumber("3");	
  // Result: 9
  // Work has been done
  </pre>
  <p>Причем метод <code>then()</code> после <code>catch()</code> будет вызываться, даже если не произошло ошибок и сам метод <code>catch()</code> не выполнялся.</p>
  <p>И мы даже можем из функции-обработчика ошибки в <code>catch()</code> также можем передавать некоторое значение и получать через последующий метод <code>then()</code>:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
      .then(value =&gt; value * value)
      .then(value =&gt; console.log(\`Result: \${value}\`))
      .catch(error =&gt; {
        console.log(error);
        return 0;
      })
      .then(value =&gt; console.log("Status code:", value));
  }
  printNumber("ert3");	// Not a number
              // Status code: 0
  </pre>
  <h3>Метод finally</h3>
  <p>Кроме методов <code>then()</code> и <code>catch()</code> объект Promise для обработка результата также предоставляет 
  метод <span class="b">finally()</span>. Этот метод выполняется в конце цепочки промисов вне зависимости произошла ошибка или выполнение промиса прошло успешно.</p>
  <p>В качестве параметра метод принимает функцию, которая выполняет некоторые финальные действия по обработке работы промиса:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
    .then(value =&gt; console.log(value))
    .catch(error =&gt; console.log(error))
    .finally(() =&gt; console.log("End"));
  }
  
  printNumber("3");
  printNumber("triuy");
  </pre>
  <p>Здесь мы два раза обращаемся к промису, возвращаемому функцией generateNumber. В одном случае строка удачно сконвертируется в число, в другом же - произойдет ошибка. Однако вне 
  зависимости от отсутствия или наличия ошибки в обоих случаях будет выполняться метод <code>finally()</code>, который выведет на консоль строку "End".</p>
  <p>Метод <code>finally()</code> возвращает объект Promise, поэтому после него можно продолжить продолжить цепочку:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
    .then(value =&gt; console.log(value))
    .catch(error =&gt; console.log(error))
    .finally(() =&gt; console.log("Выполнение промиса завершено"))
    .then(() =&gt; console.log("Промис все еще работает"));
  }
  printNumber("3");
  </pre>
  <p>Консольный вывод:</p>
  <pre class="browser">
  3
  Выполнение промиса завершено
  Промис все еще работает
  </pre>
  <p>Стоит отметить что в метод <code>then()</code> также можно передать данные. Но эти данные передаются не из метода <code>finally()</code>, а из предыдущего метода 
  <code>then()</code> или <code>catch()</code>:</p>
  <pre class="brush:js;">
  function generateNumber(str){
      return new Promise((resolve, reject) =&gt; {
          const parsed = parseInt(str);
          if (isNaN(parsed)) reject("Not a number");
          else resolve(parsed);
      });
  };
  function printNumber(str){
    generateNumber(str)
    .then(value =&gt; {
      console.log(value);
      return "hello from then";
    })
    .catch(error =&gt; {
      console.log(error);
      return "hello from catch";
    })
    .finally(() =&gt; {
      console.log("End");
      return "hello from finally";
    })
    .then(message =&gt; console.log(message));
  }
  printNumber("3");
  </pre>
  <pre class="browser">
  3
  End
  hello from then
  </pre>`;
}

//=====================================================================================
function less164(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Функции Promise.all, Promise.allSettled, Promise.any и Promise.race</h2><div class="date">Последнее обновление: 12.12.2021</div>
  
    <p>Функции <span class="b">Promise.all()</span>, <span class="b">Promise.allSettled()</span> и <span class="b">Promise.race()</span> позволяют сгруппировать выполнение нескольких промисов.</p>
  <h3>Функция Promise.all</h3>
  <p>Функция <span class="b">Promise.all()</span> возвращает единый объект <span class="b">Promise</span>, который объединяет набор промисов.</p>
  <p>Рассмотрим следуюший код:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve,reject) =&gt; {
    setTimeout(resolve, 1000, "Hello");
  });
  const promise2 = new Promise((resolve,reject) =&gt; {
    setTimeout(resolve, 500, "World");
  });
  promise1.then(value =&gt; console.log(value));	// Hello
  promise2.then(value =&gt; console.log(value));	// World
  </pre>
  <p>Здесь определено два промиса. Асинхронная операция первого промиса выполняется через 1000 миллисекунд, действие второго промиса выполняется через 
  500 миллисекунд. Оба этих промиса выполняются независимо друг от друга. Консольный вывод:</p>
  <pre class="browser">
  World
  Hello
  </pre>
  <p>Функция <code>Promise.all()</code> позволяет объединить несколько промисов и выполнять их параллельно, но как единое целое. В качестве параметра 
  функция принимает набор промисов:</p>
  <pre class="brush:js;">Promise.all([промис1, промис2, ... прромисN]);</pre>
  <p>Возвращаемым результатом функции является новый объект <span class="b">Promise</span>.</p>
  <p>Теперь изменим предыдущий пример, использовав функцию <code>Promise.all()</code>:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve,reject) =&gt; {
    setTimeout(resolve, 1000, "Hello");
  });
  const promise2 = new Promise((resolve,reject) =&gt; {
    setTimeout(resolve, 500, "World");
  });
  Promise.all([promise1, promise2])
    .then(values =&gt; {
          const [promise1data, promise2data] = values;
          console.log(promise1data, promise2data);	// Hello World
  });
  </pre>
  <p>Теперь данные обоих промисов возвращаются вместе и доступны в методе <code>then()</code> в виде массива <code>values</code>. Консольный вывод:</p>
  <pre class="browser">
  Hello World
  </pre>
  <p>Значения всех промисов возвращаются только если все они завершились успешно. Но если в асинхронной операции хотя бы одного промиса 
  возникнет ошибка в силу внутренней логики или из-за вызова функции <code>reject()</code>, то все промисы перейдут в состояние <code>rejected</code>, соответственно:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve,reject) =&gt; {
    reject("Непредвиденная ошибка");
    setTimeout(resolve, 500, "Hello");
  });
  const promise2 = new Promise((resolve,reject) =&gt; {
    setTimeout(resolve, 1000, "World");
  });
  
  Promise.all([promise1, promise2])
    .then(values =&gt; {
          const [promise1data, promise2data] = values;
          console.log(promise1data, promise2data);
  })
  .catch(error =&gt; console.log(error));	// Непредвиденная ошибка
  </pre>
  <p>В данном случае мы явным образом переводим переводим первый промис в состояние <code>rejected</code>, соответственно в это состояние переводятся все промисы, 
  переданные в функцию <code>Promise.all()</code>. И далее через метод <code>catch()</code>, как и в обзем случае, мы можем обработать возникшую ошибку.</p>
  <h3>Promise.allSettled</h3>
  <p>Еще одна функция - <span class="b">Promise.allSettled()</span> также как и <code>Promise.all()</code> принимает набор промисов и выполняет их как единое целое, но 
  возвращает объект со статусом и результатом промиса:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve,reject) =&gt; {
      reject("Непредвиденная ошибка");
      setTimeout(resolve, 500, "Hello");
  });
  const promise2 = new Promise((resolve,reject) =&gt; {
      setTimeout(resolve, 1000, "World");
  });
   
  Promise.allSettled([promise1, promise2])
      .then(values =&gt; {
      const [promise1data, promise2data] = values;
      console.log(promise1data);	// {status: "rejected", reason: "Непредвиденная ошибка"}
      console.log(promise2data);	// {status: "fulfilled", value: "World"}
  });
  </pre>
  <p>При этом при возникновении ошибки в одном из промисов (как в случае выше с первым промисом) функция также передается результаты в метод <code>then()</code>, который следует дальше в цепочке. 
  Каждый результат представляет объект. Первое свойство этого объекта - <code>status</code> описывает статус или состояние промиса. Если произошла ошибка, статус <code>rejected</code>, а второе свойство 
  представляет объект ошибки. Если промис успешно завершил выполнение, то статус <code>fulfilled</code>, а второе свойство - <code>value</code> хранит результат промиса.</p>
  <h3>Promise.race</h3>
  <p>Функция <span class="b">Promise.race()</span> также принимает несколько промисов, только возвращает первый завершенный промис (вне зависимости завершился от успешно или с ошибкой):</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve) =&gt; {
    setTimeout(resolve, 500, "Hello");
  });
  const promise2 = new Promise((resolve) =&gt; {
    setTimeout(resolve, 1000, "World");
  });
  Promise.race([promise1, promise2])
    .then(value =&gt; console.log(value))		// Hello
    .catch(error =&gt; console.log(error));
  </pre>
  <p>В данном случае первым выполненным будет промис <code>promise1</code>. Поэтому в метод <code>then(value =&gt; console.log(value))</code> в качестве <code>value</code> 
  будет передана строка "Hello".</p>
  <h3>Promise.any</h3>
  <p>Функция <span class="b">Promise.any()</span> принимает несколько промисов и возвращает первый успешно завершившийся промис:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve, reject) =&gt; {
    reject("error in promise1");
      setTimeout(resolve, 500, "Hello");
  });
  const promise2 = new Promise((resolve) =&gt; {
      setTimeout(resolve, 1000, "World");
  });
  Promise.any([promise1, promise2])
      .then(value =&gt; console.log(value))       // World
      .catch(error =&gt; console.log(error));
  </pre>
  <p>В данном случае первым выполненным будет промис <code>promise1</code>, однако он завершается с ошибкой. Поэтому в метод <code>then(value =&gt; console.log(value))</code> в качестве <code>value</code> 
  будет передана строка "World" - результат промиса promise2, который успешно завершается.</p>
  <p>Может показаться, что <code>Promise.any()</code> делает то же самое, что и <code>Promise.race()</code>, однако эти функции отличаются в отношении того, как они работают с промисами, которые завершились с ошибкой. 
  <code>Promise.race()</code> возвращает первый завершенный промис, вне зависимости завершился он с ошибкой или нет. А <code>Promise.any()</code> возвращает первый успешно завершенный промис (если такой имеется). 
  Если же все промисы завершились с ошибкой, то генерируется исключение типа <span class="b">AggregateError</span>:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve, reject) =&gt; {
    reject("error in promise1");
      setTimeout(resolve, 500, "Hello");
  });
  const promise2 = new Promise((resolve, reject) =&gt; {
    reject("error in promise2");
      setTimeout(resolve, 1000, "World");
  });
  Promise.any([promise1, promise2])
      .then(value =&gt; console.log(value)) 
      .catch(error =&gt; console.log(error));	// AggregateError: All promises were rejected
  </pre>
  <p>С помощью свойства <span class="b">errors</span> типа AggregateError можно получить в виде массива все ошибки, которые возникли в промисах:</p>
  <pre class="brush:js;">
  const promise1 = new Promise((resolve, reject) =&gt; {
    reject("error in promise1");
      setTimeout(resolve, 500, "Hello");
  });
  const promise2 = new Promise((resolve, reject) =&gt; {
    reject("error in promise2");
      setTimeout(resolve, 1000, "World");
  });
  Promise.any([promise1, promise2])
      .then(value =&gt; console.log(value)) 
      .catch(e =&gt; console.log(e.errors));	// ["error in promise1", "error in promise2"]
  </pre>`;
}

//=====================================================================================
function less165(){  
    document.querySelector(".frameCenter0").innerHTML=`<h2>Async и await</h2><div class="date">Последнее обновление: 01.09.2021</div>
  
    <p>Внедение стандарта ES2017 в JavaScript привнесло два новых оператора: <span class="b">async</span> и <span class="b">await</span>, который призваны упростить работу 
  с промисами.</p>
  <p>Оператор <span class="b">async</span> определяет асинхронную функцию, в которой, как предполагается, будет выполняться одна или несколько асинхронных задач:</p>
  <pre class="brush:js;">
  async function название_функции(){
    // асинхронные операции
  }
  </pre>
  <p>Внутри асинхронной функции мы можем применить оператор <span class="b">await</span>. Он ставится перед вызовом асинхронной операции, которая представляет объект Promise:</p>
  <pre class="brush:js;">
  async function название_функции(){
    
    await асинхронная_операция();
  }
  </pre>
  <p>Оператор <span class="b">await</span> приостанавливает выполнение асинхронной функции, пока объект Promise не возвратить результат.</p>
  <p>Стоит учитывать, что оператор <span class="b">await</span> может использоваться только внутри функции, к которой применяется оператор <span class="b">async</span>.</p>
  <p>Сначала рассмотрим самый простейший пример с использованием Promise:</p>
  <pre class="brush:js;">
  function sum(x, y){ 
      return new Promise(function(resolve){
          const result = x + y;
      resolve(result);
      });
  }
  sum(5, 3).then(function(value){ 
    console.log("Результат асинхронной операции:", value);
  });	// Результат асинхронной операции: 8
  </pre>
  <p>В данной случае функция <code>sum()</code> представляет асинхронную задачу. Она принимает два числа и возвращает объект Promise, в котором выполняется сложение этих чисел. Результат сложения передается в функцию <code>resolve()</code>. И далее 
  в методе <code>then()</code> мы можем получить этот результат и выполнить с ним различные действия.</p>
  <p>Теперь перепишем этот пример с использованием <span class="b">async/await</span>:</p>
  <pre class="brush:js;">
  function sum(x, y){ 
      return new Promise(function(resolve){
          const result = x + y;
      resolve(result);
      });
  }
  
  async function calculate(){
    const value = await sum(5, 3);
    console.log("Результат асинхронной операции:", value);
  }
  calculate();	// Результат асинхронной операции: 8
  </pre>
  <p>Здесь мы определили асинхронную функцию <code>calculate()</code>, к которой применяется <span class="b">async</span>:</p>
  <pre class="brush:js;">async function calculate(){ </pre>
  <p>Внутри функции вызывается асинхронная операция <code>sum()</code>, которой передаются некоторые значения. 
  Причем к этой функции применяется оператор <span class="b">await</span>. Благодаря оператору <code>await</code> больше нет надобности вызывать у промиса метод 
  <span class="b">then()</span>. А результат, который возвращает Promise, мы можем получить напрямую из вызова функции sum и, например, присвоить константе или переменной:</p>
  <pre class="brush:js;">const value = await sum(5, 3);</pre>
  <p>Затем мы можем вызвать функцию <code>calculate()</code> как обычную функции и тем самым выполнить все ее действия.</p>
  <pre class="brush:js;">calculate();</pre>
  <h3>Выполнение последовательности асинхронных операций</h3>
  <p>Асинхронная функция может содержать множество асинхронных операций, к которым применяется оператор <span class="b">await</span>. В этом случае все асинхронные операции будут выполняться последовательно:</p>
  <pre class="brush:js;">
  function sum(x, y){ 
      return new Promise(function(resolve){
          const result = x + y;
      resolve(result);
      });
  }
  
  async function calculate(){
    const value1 = await sum(5, 3);
    console.log("Результат 1 асинхронной операции:", value1);
    const value2 = await sum(6, 4);
    console.log("Результат 2 асинхронной операции:", value2);
    const value3 = await sum(7, 5);
    console.log("Результат 3 асинхронной операции:", value3);
  }
  calculate();	
  // Результат 1 асинхронной операции: 8
  // Результат 2 асинхронной операции: 10
  // Результат 3 асинхронной операции: 12
  </pre>
  <h3>Обработка ошибок</h3>
  <p>Для обработки ошибок, которые могут возникнуть в процессе вызова асинхронной операции применяется конструкция <span class="b">try..catch..finally</span>.</p>
  <p>Например, возьмем следующий код с использованием Promise:</p>
  <pre class="brush:js;">
  function square(str){
      return new Promise((resolve, reject) =&gt; {
          const n = parseInt(str);
          if (isNaN(n)) reject("Not a number");
          else resolve(n * n);
      });
  };
  function calculate(str){
    
    square(str)
      .then(value =&gt; console.log("Result: ", value))
      .catch(error =&gt; console.log(error));
  }
  
  calculate("g8");	// Not a number	
  calculate("4");		// Result:  16
  </pre>
  <p>Функция <code>square()</code> получает некоторое значение, в промисе это значение преобразуется в число. И при удачном преобразовании из промиса 
  возвращается квадра числа. Если переданное значение не является числом, то возвращаем ошибку.</p>
  <p>При вызове функции <code>square()</code> с помощью метода <span class="b">catch()</span> можно обработать возникшую ошибку.</p>
  <p>Теперь перепишем пример с использованием <span class="b">async/await</span>:</p>
  <pre class="brush:js;">
  function square(str){
      return new Promise((resolve, reject) => {
          const n = parseInt(str);
          if (isNaN(n)) reject("Not a number");
          else resolve(n * n);
      })
  };
  
  async function calculate(str){
    
    try{
      const value = await square(str);
      console.log("Result: ", value);
    }
    catch(error){
      console.log(error);
    }
  }
  
  calculate("g8");	// Not a number	
  calculate("4");		// Result:  16
  </pre>
  <p>Вызов асинхронной операции помещается в блок <span class="b">try</span>, соответственно в блоке <span class="b">catch</span> можно получить возникшую ошибку и обработать ее.</p>
  `;
}

//=====================================================================================
function less166(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Асинхронные итераторы</h2><div class="date">Последнее обновление: 04.09.2021</div>
  
  <p>Асинхронные итераторы объединяют возможности итераторов и операторов <span class="b">async</span> и <span class="b">await</span>. 
Асинхронные итераторы прежде всего предназначены для обращения к источникам данных данных, которые используют асинхронный API. Это могут быть какие-нибудь данные, которые загружаются по части, 
например, по сети, из файловой системы или из базы данных.</p>
<p>Из статьи про <a href="https://metanit.com/web/javascript/14.1.php">итераторы</a> мы должны помнить, что интератор предоставляет метод <span class="b">next()</span>, который возвращает 
объект с двумя свойствами: <span class="b">{ value, done }</span>. Свойство <code>value</code> хранит некоторое значение, которое, например, можно получить в 
цикле <code>for..of</code> при переборе объекта. А свойство <code>done</code> указывает, есть ли в наборе еще объекты, доступные для перебора (если есть, то значение <code>true</code>, 
если нет - <code>false</code>).</p>
<p>Асинхронный итератор похож на обычный синхронный за тем исключением, что его метод <span class="b">next()</span> возвращает объект 
<span class="b">Promise</span>. А из промиса, в свою очередь, возвращается объект <span class="b">{ value, done }</span>.</p>
<h3>Цикл for-await-of</h3>
<p>Для получения данных с помощью асинхронных итераторов применяется цикл <span class="b">for-await-of</span>:</p>
<pre class="brush:js;">
for await (variable of iterable) {
  // действия 
}
</pre>
<p>В цикле <span class="b">for-await-of</span> после оператора <span class="b">of</span> идет некоторый набор данных, который можно перебрать по элементам. 
Это может асинхронный источник данных, но также может быть и синхронный источник данных, как массивы или, например, встроенные объекты String, Map, Set и т.д.</p>
<p>Стоит отметить, что данная форма цикла может использоваться только в функциях, определенных с оператором <span class="b">async</span>.</p>
<p>Рассмотрим простейший пример, где в качестве источника данных выступает обычный массив:</p>
<pre class="brush:js;">
const dataSource = ["Tom", "Sam", "Bob"];
async function readData(){
  for await (const item of dataSource) {
    console.log(item);
  }
}
readData();
// Tom
// Sam
// Bob
</pre>
<p>Здесь в цикле происходит перебор массива dataSource. При выполнении цикла для источника данных (в данном случае для массива) 
с помощью метода <code>[Symbol.asyncIterator]()</code> неявно создается асинхронный итератор. И при каждом обращении к очередному элементу в этом источнике данных 
неявно из итератора возвращается объект Promise, из которого и получаем текущий элемент массива.</p>
<h3>Создание асинхронного итератора</h3>
<p>В примере выше асинхронный итератор создавался неявно. Но мы также можем его определить явно. Например, определим асинхронный итератор, который возвращает элементы массива:</p>
<pre class="brush:js;">
const generatePerson = {
  [Symbol.asyncIterator]() {
    return {
      index: 0,
    people: ["Tom", "Sam", "Bob"],
      next() {
        if (this.index &lt; this.people.length) {
          return Promise.resolve({ value: this.people[this.index++], done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};
</pre>
<p>Итак, здесь определен объект <span class="b">generatePerson</span>, в котором реализован только один метод - <span class="b">[Symbol.asyncIterator]()</span>, 
который по сути и представляет асинхронный итератор. Реализация асинхронного итератора (как и в случае с синхронным итератором) позволяет сделать объект generatePerson 
перебираемым.</p>
<p>Основные моменты асинхронного итератора:</p>
<ul>
<li><p>Асинхронный итератор реализуется методом <span class="b">[Symbol.asyncIterator]()</span>, который возвращает объект.</p></li>
<li><p>Возвращаемый объект итератора имеет метод <span class="b">next()</span>, который возвращает объект <span class="b">Promise</span>.</p></li>
<li><p>Объект <span class="b">Promise</span>, в свою очередь, возвращает объект с двумя свойстами <span class="b">{ value, done }</span>. Свойство <code>value</code> собственно хранит некоторое значение. 
А свойство <code>done</code> указывает, есть ли в наборе еще объекты, доступные для перебора. Если свойство <code>done</code> равно <code>true</code>, 
то нет смысла указывать свойство <code>value</code></p></li>
</ul>
<p>В данном случае итератор реализует простую задачу - возвращает очереднего пользователя. Для хранения пользователей в объекте итератора определен массив <code>people</code>, а для хранения 
индекса текущего элемента массива определена переменная <code>index</code>.</p>
<pre class="brush:js;">
index: 0,
people: ["Tom", "Sam", "Bob"],
</pre>
<p>В методе <span class="b">next()</span> возвращаем объект Promise. Если текущий индекс меньше длины массивы (то есть в массиве еще имеются для 
перебора элементы), то возвращаем Promise, в котором возвращаем элемент массива по текущему индексу:</p>
<pre class="brush:js;">return Promise.resolve({ value: this.people[this.index++], done: false });</pre>
<p>Если все элементы массива уже получены, то возвращаем Promise с объектом <code>{ done: true }</code>:</p>
<pre class="brush:js;">return Promise.resolve({ done: true });</pre>
<p>Где значение <code>done: true</code> будет указывать внешнему коду, что все значения итератора уже получены.</p>
<p>Теперь посмотрим, как мы можем получить из итератора данные:</p>
<p>Как и с обычным итератором, мы можем обратиться к самому асинхронному итератору:</p>
<pre class="brush:js;">generatePerson[Symbol.asyncIterator](); // получаем асинхронный итератор</pre>
<p>И вызвать явным образом его метод <span class="b">next()</span>:</p>
<pre class="brush:js;">generatePerson[Symbol.asyncIterator]().next(); // Promise</pre>
<p>Этот метод возвращает Promise, у котоого можно вызвать метод <span class="b">then()</span> и обработать его значение:</p>
<pre class="brush:js;">
generatePerson[Symbol.asyncIterator]()
  .next()
  .then((data)=&gt;console.log(data));	// {value: "Tom", done: false}	
</pre>
<p>Полученный из промиса объект представляет объект <code>{value, done}</code>, у которого через свойство <code>value</code> можно получить собственно значение:</p>
<pre class="brush:js;">
generatePerson[Symbol.asyncIterator]()
  .next()
  .then((data)=&gt;console.log(data.value));	// Tom
</pre>
<p>Поскольку метод <code>next()</code> возвращает Promise, то мы можем использовать оператор <code>await</code> для получения значений:</p>
<pre class="brush:js;">
async function printPeople(){
  const peopleIterator = generatePerson[Symbol.asyncIterator]();
  
  while(!(personData = await peopleIterator.next()).done){
    console.log(personData.value);
  }
}
printPeople();
</pre>
<p>Здесь в асинхронной функции цикле while с помощью оператора <code>await</code> последовательно получаем из итератора один за другим объекты Promise, из которых извлекаем данные, пока не достигнем конца данных итератора.</p>
<p>Однако для перебора объекта асинхронного итератора гораздо проще использовать выше рассмотренный цикл <span class="b">for-await-of</span>:</p>
<pre class="brush:js;">
const generatePerson = {
  [Symbol.asyncIterator]() {
    return {
      index: 0,
    people: ["Tom", "Sam", "Bob"],
      next() {
        if (this.index &lt; this.people.length) {
          return Promise.resolve({ value: this.people[this.index++], done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};
async function printPeople(){
  for await (const person of generatePerson) {
    console.log(person);
   }
}
printPeople();
</pre>
<p>Поскольку объект <span class="b">generatePerson</span> реализует метод <span class="b">[Symbol.asyncIterator]()</span>, то мы его можем перебрать с омощью цикла 
<span class="b">for-await-of</span>. Соответственно при каждом обращении в цикле метод <code>next()</code> будет возращать промис с очередным элементом из массива people. 
И в итоге мы получим следующий консольный вывод:</p>
<pre class="brower">
Tom
Sam
Bob
</pre>
<p>Стоит отметить, что мы НЕ можем использовать для перебора объекта с асинхронным итератором обычный цикл <span class="b">for-of</span>.</p>
<p>Еще один простейший пример - получение чисел:</p>
<pre class="brush:js;">
const generateNumber = {
  [Symbol.asyncIterator]() {
    return {
      current: 0,
    end: 10,
      next() {
        if (this.current &lt;= this.end) {
          return Promise.resolve({ value: this.current++, done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};
async function printNumbers(){
  for await (const n of generateNumber) {
    console.log(n);
   }
}
printNumbers();
</pre>
<p>Здесь асинхронный итератор объекта <code>generateNumber</code> возвращает числа от 0 до 10.</p>
`;
}

//=====================================================================================
function less167(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Асинхронные генераторы</h2><div class="date">Последнее обновление: 04.09.2021</div>
  
  <p>Асинхронные итераторы открывают нам путь к созданию асинхронных генераторов. Асинхронные генераторы позволяют нам использовать оператор <span class="b">await</span> и получать и возвращать данные асинхронным образом.</p>
<p>Для определения асинхронного генератора перед функцией генератора ставится оператор <span class="b">async</span></p>
<pre class="brush:js;">
async function* название_функции_генератора(){
  
  yield возвращаемое_значение;
}
</pre>
<p>Рассмотрим простейший генератор:</p>
<pre class="brush:js;">
async function* generatePersonAsync(){
  yield "Tom";	
}
</pre>
<p>Здесь определен асинхронный генератор generatePersonAsync, в котором возвращается одно значение - строка "Tom".</p>
<p>Особенностью асинхронного генератора является то, что при обращении к его методу <span class="b">next()</span> возвращается объект Promise. 
А полученный объект Promise, в свою очередь, возвращает объект с двумя свойствами <code>{ value, done }</code>, где <code>value</code> собственно хранит возвращаемое 
значение, а <code>done</code> указывает, доступны ли в генераторе еще данные.</p>
<p>Например, возьмем выше определенный асинхронный генератор:</p>
<pre class="brush:js;">
async function* generatePersonAsync(){
  yield "Tom";	
}
const personGenerator = generatePersonAsync();
personGenerator.next();	// Promise
</pre>
<p>Здесь с помощью метода <code>next()</code> получаем промис. Далее через метод <code>then()</code> мы можем получить из промиса объект:</p>
<pre class="brush:js;">
const personGenerator = generatePersonAsync();
personGenerator.next()
  .then(data =&gt; console.log(data));	// {value: "Tom", done: false}
</pre>
<p>И при обращении к свойству <code>value</code> полученного из промиса получить сами данные:</p>
<pre class="brush:js;">
const personGenerator = generatePersonAsync();
personGenerator.next()
  .then(data =&gt; console.log(data.value));	// Tom
</pre>
<p>С помощью оператора <span class="b">await</span> из метода <code>next()</code> генератора мы можем получить данные:</p>
<pre class="brush:js;">
async function* generatePersonAsync(){
  yield "Tom";
  yield "Sam";
  yield "Bob";
}
async function printPeopleAsync(){
  const personGenerator = generatePersonAsync();
  while(!(person = await personGenerator.next()).done){
    console.log(person.value);
  }
}

printPeopleAsync();
</pre>
<p>Консольный вывод:</p>
<pre class="browser">
Tom
Sam
Bob
</pre>
<p>Поскольку асинхронный генератор представляет асинхронный итератор, то данные генератора также можно получить через цикл <span class="b">for-await-of</span>:</p>
<pre class="brush:js;">
async function* generatePersonAsync(){
  yield "Tom";
  yield "Sam";
  yield "Bob";
}
async function printPeopleAsync(){
  const personGenerator = generatePersonAsync();
  for await(person of personGenerator){
    console.log(person);
  }
}

printPeopleAsync();
// Tom
// Sam
// Bob
</pre>
<h3>await в асинхронных генераторах</h3>
<p>Главным преимуществом асинхронным генераторов является то, что мы можем использовать в них оператор <span class="b">await</span> и соответственно 
получать данные из источников данных, которые используют асинхронный API.</p>
<pre class="brush:js;">
async function* generatePersonAsync(people){
  for(const person of people)
    yield await new Promise(resolve =&gt; setTimeout(() =&gt; resolve(person), 2000));
}
async function printPeopleAsync(people){
  for await (const item of generatePersonAsync(people)) {
    console.log(item); 
  }
}
printPeopleAsync(["Tom", "Sam", "Bob"]);
</pre>
<p>Здесь для имитации получения данных из асинхронного источника данных применяется промис, который через 2000 секуд возвращает один из элементов массива, который передается в функцию генератора:</p>
<pre class="brush:js;">yield await new Promise(resolve =&gt; setTimeout(() =&gt; resolve(person), 2000));</pre>
`;
}

//=====================================================================================
function less170(){  
  document.querySelector(".frameCenter0").innerHTML=`<h1>Ajax</h1><h2>Объект XMLHttpRequest</h2><div class="date">Последнее обновление: 03.02.2022</div>
  
  <p>Код javascript может взаимодействовать с каким-нибудь ресурсом в сети интернет, например, с каким-нибудь веб-сайтом или веб-сервисом, грубо говоря с сервером. 
Для взаимодействия кода javascript с сервером обычно применяется такая технология как <span class="b">Ajax</span>. 
Ajax представляет технологию для отправки запросов к серверу из клиентского кода JavaScript без перезагрузки страницы. Сам термин расшифровывается 
как <span class="b">Asynchronous JavaScript And XML</span>. То есть изначально AJAX предполагал асинхронное взаимодействие клиента и сервера посредством данных в формате XML. 
Хотя сейчас XML во многом вытеснил формат JSON. В любом случае AJAX революционизировал веб-среду, позволив создавать динамичные отзывчивые веб-приложения.</p>
<p>Для создания приложений, использующих Ajax, применяются различные способы. Но самым распространенным способом является использование объекта 
<span class="b">XMLHttpRequest</span>:</p>
<pre class="brush:js;">const xhr = new XMLHttpRequest();</pre>
<p>После создания объекта XMLHttpRequest можно отправлять запросы к серверу. Но для начала надо вызвать метод <span class="b">open()</span> для 
инициализации:</p>
<pre class="brush:js;">XMLHttpRequest.open(method, url[, async[, user[, password]]])</pre>
<p>Эта функция принимает пять параметров, из которых первые два являются обязательными:</p>
<ul>
<li><p><code>method</code>: тип запроса ("GET", "POST", "PUT", "DELETE" и т.д.)</p></li>
<li><p><code>url</code>: адрес ресурса, к которому отправляется запрос</p></li>
<li><p><code>async</code>: логическое значение, которое указывает, будет ли запрос асинхронным. Если значение <code>true</code> (значение по умолчанию), то запрос асинхронный</p>
<p>Синхронный и асинхронный режим отличаются тем, что запрос в синхронном режиме пока запрос не выполнится, остальной код javascript не может выполняться. 
Если запрос отправляется в асинхронном режиме, то параллельно с выполнением запроса можно выполнять также и другой код javascript. 
И в большинстве случаев, как правило, используется именно асинхронный режим.</p></li>
<li><p><code>user</code>: имя пользователя, которое применяется при его аутентификации на сервере (то есть для определения, какой именно пользователь осуществил запрос), по умолчанию равно null</p></li>
<li><p><code>password</code>: пароль пользователя, который применяется при его аутентификации на сервере, по умолчанию равно null</p></li>
</ul>
<p>Например, запрос типа "GET" по адресу "http://localhost/hello":</p>
<pre class="brush:js;">request.open("GET", "http://localhost/hello");</pre>
<p>После инициализации запроса методом <code>open()</code> можно отправить запрос с помощью метода <span class="b">send()</span>:</p>
<pre class="brush:js;">XMLHttpRequest.send(body)</pre>
<p>В качестве параметра в метод <code>send()</code> передаются данные, которые отправляются на сервер. Если этому параметру не передано никакого значения, то его 
значение по умолчанию null.</p>
<h3>Свойства XMLHttpRequest</h3>
<p>Объект XMLHttpRequest имеет ряд свойств, которые позволяют проконтролировать выполнение запроса:</p>
<ul>
<li><p><span class="b">status</span>: содержит статусный код ответа HTTP, который пришел от сервера. С помощью статусного кода можно судить об успешности запроса или об ошибках, которые могли бы возникнуть при его 
выполнении. Например, статусный код 200 указывает на то, что запрос прошел успешно. Код 403 говорит о необходимости авторизации для выполнения запроса, 
а код 404 сообщает, что ресурс не найден и так далее.</p></li>
<li><p><span class="b">statusText</span>: возвращает текст статуса ответа, например, "200 OK"</p></li>
<li><p><span class="b">responseType</span>: возвращает тип ответа. Есть следующие типы:</p>
<ul>
<li><p><code>""</code>: пустая строка</p></li>
<li><p><code>"arraybuffer"</code>: ответ представляет объект ArrayBuffer, которые содержит бинарные данные</p></li>
<li><p><code>"blob"</code>: ответ представляет объект Blob, которые содержит бинарные данные</p></li>
<li><p><code>"document"</code>: ответ представляет документ HTML/XML</p></li>
<li><p><code>"json"</code>: ответ представляет данные в формате json</p></li>
<li><p><code>"text"</code>: ответ представляет текст</p></li>
</ul></li>
<li><p><span class="b">response</span>: возвращает ответ сервера</p></li>
<li><p><span class="b">responseText</span>: возвращает ответа сервера в виде текста</p></li>
<li><p><span class="b">responseXML</span>: возвращает XML/HTML, если ответ от сервера в формате XML/HTML</p></li>
<li><p><span class="b">readyState</span>: хранит состояния запроса, которое представляет число:</p>
<ul>
<li><p><code>0</code>: объект XMLHttpRequest создан, но метод <code>open()</code> еще не был вызван для инициализации объекта</p></li>
<li><p><code>1</code>: метод <code>open()</code> был вызван, но запрос еще не был отправлен методом <code>send()</code></p></li>
<li><p><code>2</code>: запрос был отправлен, заголовки и статус ответа получены и готовы к использованию</p></li>
<li><p><code>3</code>: ответ получен от сервера</p></li>
<li><p><code>4</code>: выполнение запроса полностью завершено (даже если получен код ошибки, например, 404)</p></li>
</ul>
<p>Соответственно проверив данное свойство, мы можем понять, на какой стадии находится запрос</p>
</li>
</ul>
<p>Для отслеживания состояния запроса можно применять события XMLHttpRequest:</p>
<ul>
<li><p><span class="b">load</span>: срабатывает после выполнения запроса. Для установки обработчика применяется свойство <code>onload</code></p></li>
<li><p><span class="b">readystatechange</span>: возникает каждый раз, когда изменяется значение свойства readyState. Для установки обработчика применяется свойство <code>onreadystatechange</code></p></li>
</ul>
<p>Вначале рассмотрим простейший пример, как выполнять запрос к серверу с помощью XMLHttpRequest</p>
<h3>Определение ресурса на севере</h3> 
<p>Поскольку Ajax предполагает взаимодействие клиента и сервера, то для работы с Ajax нам потребуется некоторый сетевой ресурс, к которому 
мы будем обращаться.  Для эмуляции сетевого ресурса используем локальный веб-сервер. Веб-сервер может быть любым. 
В данном случае воспользуемся самым простым вариантом - Node.js, поэтому перед созданием приложения необходимо <a href="https://metanit.com/web/nodejs/1.1.php">установить Node.js</a>. 
В данном случае не потребуется никаких знаний node.js, весь используемый код подробно описывается. Но опять же вместо node.js это может быть любая другая технология сервера - 
php, asp.net, python и т.д. либо какой-то определенный веб-сервер типа Apache или IIS.</p>
<p>Итак, создадим на жестком диске папку для файлов веб-сервера. Например, в моем случае это папка <span class="b">C:\app</span>. Далее в этой папке 
определим файл сервера. Пусть он будет называться <span class="b">server.js</span> и будет иметь следующий код:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/hello"){
        response.end("XMLHttpRequest на METANIT.COM");
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Это самый примитивный сервер, который достаточен для нашей задачи. Вкратце пробежимся по коду. Сначала подключаются пакеты с функциональностью, которую мы собираемся использовать:</p>
<pre class="brush:js;">
const http = require("http");	// для обработки входящих запросов
const fs = require("fs");		// для чтения с жесткого диска файла index.html
</pre> 
<p>Для создания сервера применяется функция <span class="b">http.createServer()</span>. В эту функцию передается функция-обработчик, которая вызывается каждый раз, когда к серверу приходит запрос. 
Эта функция имеет два параметра: <code>request</code> (содержит данные запроса) и <code>response</code> (управляет отправкой ответа).</p>
<p>В функции-обработчике с помощью свойства <code>request.url</code> мы можем узнать, к какому ресурсу на сервере пришел запрос. Так, в данном случае, 
если пришел запрос по пути "/hello" (условно к ресурсу "/hello"), то оправляем в ответ с помощью метода <code>response.end()</code> текст "XMLHttpRequest на METANIT.COM":</p>
<pre class="brush:js;">
if(request.url == "/hello"){
  response.end("XMLHttpRequest на METANIT.COM");
}
</pre>
<p>Если запрос пришел к какому-то другому ресурсу, то отправляем файл <span class="b">index.html</span>, который мы дальше определим:</p>
<pre class="brush:js;">
else{
  fs.readFile("index.html", (error, data) =&gt; response.end(data));
}
</pre>
<p>Для считывания файлов применяется встроенная функция <span class="b">fs.readFile()</span>. Первый параметр функции - адрес файла 
(в данном случае предполагается, что файл index.html находится в одной папке с файлом сервера server.js). Второй параметр - функция, которая вызывается после считывания файла 
и получет его содержимое через свой второй параметр data. Затем считанное содежимое также может быть отпавлено с помощью функции <code>response.end(data)</code>.</p>
<p>В конце с помощью функции <span class="b">listen()</span> запускаем веб-сервер на 3000 порту. То есть сервер будет запускаться по адресу http://localhost:3000/</p>
<h3>Выполнение ajax-запроса</h3>
<p>Теперь в папке сервера определим простенький файл <span class="b">index.html</span></p>
<img src="./pics/xmlhttprequest1.png" alt="веб-сервер node.js для тестирования XMLHttpRequest в javascript" />
<p>Определим в этом файле следующее содежимое:</p>
<pre class="brush:js;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
const xhr = new XMLHttpRequest();
// GET-запрос к ресурсу /hello
xhr.open("GET", "/hello");

// обработчик получения ответа сервера
xhr.onload = () =&gt; {
    if (xhr.status == 200) {                // если код ответа 200
        console.log(xhr.responseText);      // выводим полученный ответ на консоль браузера
    } else {                                // иначе выводим текст статуса
        console.log("Server response: ", xhr.statusText);
    }
};
xhr.send();     // выполняем запрос
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Здесь в метод <span class="b">xhr.open()</span> в качестве типа запроса передается тип "GET", а в качестве адреса ресурса - "/hello".</p>
<pre class="brush:js;">xhr.open("GET", "/hello");</pre>
<p>Для отслеживания завершения запроса устанавливаем обработчик для события <code>load</code> с помощью свойства <code>xhr.onload</code>:</p>
<pre class="brush:js;">
xhr.onload = () =&gt; {
    if (xhr.status == 200) {                // если код ответа 200
        console.log(xhr.responseText);      // выводим полученный ответ на консоль браузера
    } else {                                // иначе выводим текст статуса
        console.log("Server response: ", xhr.statusText);
    }
};
</pre>
<p>В данном случае в качестве обработчика события выступает лямбда-выражение. И когда запрос завершится, сработает данный обработчик. Если запрос был успешно обрабатан, то по умолчанию 
сервер посылает статусный код 200. Как мы помним из кода сервера, при обращении по адресу "/hello" сервер посылает клиенту строку. 
И чтобы получить данную строку, обращаемся к свойству <code>xhr.responseText</code>. Если же в процессе обращения к серверу возникла какая-то ошибка или статусный код не 200, 
то с помощью свойства <code>xhr.statusText</code> выводит текст статуса ответа.</p>
<p>И в конце собственно выполняем запрос:</p>
<pre class="brush:js;">xhr.send();     // выполняем запрос</pre>
<p>Таким образом, при загрузке данной веб-страницы будет выполняться ajax-запрос к серверу.</p>

<p>Теперь в консоли перейдем к папке сервера с помощью команды <span class="b">cd</span> и запустим сервер с помощью команды</p>
<div class="console"><pre class="consoletext">node server.js</pre></div>
<img src="./pics/xmlhttprequest2.png" alt="Запуск веб-сервера node.js для тестирования XMLHttpRequest" />
<p>После запуска сервера мы можем перейти в браузере по адресу http://localhost:3000, нам отобразится страница, в javascript-коде которой произойдет обращение к ресурсу "/hello":</p>
<img src="./pics/xmlhttprequest3.png" alt="XMLHttpRequest в javascript" />
<p>В итоге при обращении к ресурсу "/hello" сервер отправит отправит строку "XMLHttpRequest на METANIT.COM", которую мы сможем получить на веб-странице.</p>
<p>В примере выше применялся относительный путь, но также можно было бы использовать абсолютный путь с указанием протокола, адреса сервера и порта:</p>
<pre class="brush:js;">
xhr.open("GET", "http://localhost:3000/hello");
</pre>
<p>Вместо события <code>load</code> мы также могли бы обрабатывать событие <span class="b">readystatechange</span> 
объекта XMLHttpRequest, которое возникает каждый раз, когда изменяется значение свойства <span class="b">readyState</span>:</p>
<pre class="brush:js;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
const xhr = new XMLHttpRequest();
// GET-запрос к ресурсу /hello
xhr.open("GET", "/hello");

// обработчик получения ответа сервера
xhr.onreadystatechange = () =&gt; {
    if (xhr.readyState == 4) {                  // если запрос завершен
        if (xhr.status == 200) {                // если код ответа 200
            console.log(xhr.responseText);      // выводим полученный ответ на консоль браузера
        } else {                                // иначе выводим текст статуса
            console.log("Server response: ", xhr.statusText);
        }
    }
};
xhr.send();     // выполняем запрос
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Здесь в обработчике события сначала проверяет состояние запроса - если код состояния равен 4, то обрабатывает ответ от сервера. Остальная логика та же, что и предыдущем случае.</p>
`;
}

//=====================================================================================
function less171(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Отправка данных</h2><div class="date">Последнее обновление: 04.02.2022</div>
  
  <p>Для отправки данных в JavaScript с помощью объекта XMLHttpRequest в его метод <span class="b">send()</span> передаются отправляемые данные.</p>
<p>Для тестирования отправки определим простейший сервер на node.js, который принимает данные:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) =&gt; {
     
  if(request.url == "/user"){
    
      const buffers = [];	// буфер для получаемых данных

     // получаем данные из запроса в буфер
      for await (const chunk of request) {
      buffers.push(chunk);
      }
    // получаем строковое представление ответа
    let userName = Buffer.concat(buffers).toString();
    userName = userName + " Smith";
    response.end(userName);
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В данном случае при обращении по адресу "/user" сервер получает все отправленные данные. Объект запроса предоставляет итератор для извлечения данные. И в коде сервера 
эти данные передаются в специальный массив-буфер:</p>
<pre class="brush:js;">
for await (const chunk of request){
  buffers.push(chunk);
}
</pre>
<p>Затем с помощью метода <code>Buffer.concat()</code> объединяем все полученные данные и формируем из них строку:</p>
<pre class="brush:js;">let userName = Buffer.concat(buffers).toString();</pre>
<p>В данном случае мы предполагаем, что на сервер отправляется простая строка с текстом. Пусть она представляет некоторое имя пользователя. И для примера 
к этому имени добавляется фамилия и измененное имя отправляется обратно клиенту:</p>
<pre class="brush:js;">
userName = userName + " Smith";
response.end(userName);
</pre>
<p>Теперь определим на странице index.html код для отправки данных на этот сервер:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
// данные для отправки
const user = "Tom";

const xhr = new XMLHttpRequest();
// POST-запрос к ресурсу /user
xhr.open("POST", "/user");

// обработчик получения ответа сервера
xhr.onload = () =&gt; {
    if (xhr.status == 200) { 
        console.log(xhr.responseText);
    } else {
        console.log("Server response: ", xhr.statusText);
  }
};
xhr.send(user);     // отправляем значение user в методе send
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Для отправки применяется метод POST. А в качестве отправляемых данных выступает простая строка "Tom". То есть на сервер отправляется простой текст. 
И поскольку сервер в ответ также отправляет текст, то для получения ответа здесь применяется свойство <code>xhr.responseText</code>. 
И при запуске данной веб-страницы будет выполняться отправка данных на сервер, и в консоли браузера можно будет увидеть полученный от сервера ответ:</p>
<img src="./pics/xmlhttprequest4.png" alt="Отправка данных на сервер в функции XMLHttpRequest и javascript на сервер node.js" />
<h3>Отправка json</h3>
<p>Подобным образом можно отправлять более сложные по структуре данные. Например, рассмотрим отправку json. Для этого на строне node.js определим следующий сервер:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) =&gt; {
     
  if(request.url == "/user"){
    
      const buffers = [];
      for await (const chunk of request) {
      buffers.push(chunk);
      }
    
    const data = Buffer.concat(buffers).toString();
    const user = JSON.parse(data); // парсим строку в json
    
    // изменяем данные полученного объекта
    user.name = user.name + " Smith";
    user.age += 1;
    // отправляем измененый объект обратно клиенту
    response.end(JSON.stringify(user));
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В данном случае на сервера ожидаем, что мы получим объект в формате json, который имеет два свойства - name и age. Для примера сервер меняет значения этих свойств и 
отправляет измененный объект обратно клиенту.</p>
<p>На веб-странице установим объект json для отправки и получим обратно данные:</p>
<pre class="brush:js;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
// данные для отправки
const tom = {
    name: "Tom",
    age: 37
};
// кодируем объект в формат json
const data = JSON.stringify(tom);
const xhr = new XMLHttpRequest();

xhr.open("POST", "/user");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () =&gt; {
    if (xhr.status == 200) { 
        const user = JSON.parse(xhr.responseText)
        console.log(user.name, "-", user.age);
    } else {
        console.log("Server response: ", xhr.statusText);
    }
};
xhr.send(data);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Здесь на сервер отправляется объект tom, который имеет два свойства: name и age. Перед отправкой он кодируется в формат json с помощью функции 
<code>JSON.stringify()</code>.</p>
<pre class="brush:js;">const data = JSON.stringify(tom);</pre>
<p>При отправке с помощью метода <span class="b">setRequestHeader()</span> для заголовка "Content-Type" устанавливаем значение "application/json", 
тем самым указывая, что мы отправляем данные в формате json:</p>
<pre class="brush:js;">
xhr.setRequestHeader("Content-Type", "application/json");
</pre>
<p>В обработчике события load сначала парсим текст ответа из формата json в стандартный объект JavaScript:</p>
<pre class="brush:js;">const user = JSON.parse(xhr.responseText)</pre>
<p>Затем выводим данные полученного объекта на консоль браузера:</p>
<img src="./pics/xmlhttprequest5.png" alt="Отправка json на сервер node.js в функции XMLHttpRequest и javascript" />
`;
}

//=====================================================================================
function less172(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Promise в Ajax-запросах</h2><div class="date">Последнее обновление: 04.02.2022</div>
  
  <p>Как видно из примеров прошлых тем для создания ajax-запросов используются фактически повторяющиеся вызовы, которые отличаются лишь деталями - 
строкой запроса, функциями обработки ответа. И вполне было бы не плохо создать для всех действий, связанных с асинхронным ajax-запросом, создать какую-то общую 
абстракцию и затем использовать ее при следующих обращениях к серверу.</p>
<p>Для создания дополнительного уровня абстракции в данном случае удобно применять объект <span class="b">Promise</span>, который обертывает 
асинхронную операцию в один объект, который позволяет определить действия, выполняющиеся при успешном или неудачном выполнении этой операции.</p>
<p>Инкапсулируем асинхронный запрос в объект Promise:</p>
<pre class="brush:js;">
function get(url) {
    return new Promise((succeed, fail) =&gt; {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () =&gt; {
            if (xhr.status &gt;=200 && xhr.status &lt; 400)
                succeed(xhr.response);
            else
                fail(new Error(\`Request failed: \${xhr.statusText}\`));
        });
        xhr.addEventListener("error", () =&gt; fail(new Error("Network error")));
        xhr.send();
  });
}
</pre>
<p>Метод get получает в качестве параметра адрес ресурса сервера и возвращает объект Promise. Конструктор Promise в качестве параметра принимает 
функцию обратного вызова, которая в свою очередь принимает два параметра - две функции: одна выполняется при успешной обработке запроса, а вторая - 
при неудачной.</p>
<p>Допустим, в качестве сервера выступает следующее простенькое приложение на Node.js:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
    
http.createServer(function(request, response){
      
    if(request.url == "/hello"){
        response.end("XMLHttpRequest на METANIT.COM");
    }
    else{
        fs.readFile("index.html", (_error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Теперь вызовем метод get для осуществления запроса к серверу:</p>
<pre class="brush:js;">
get("http://localhost:3000/hello")
    .then(response =&gt;  console.log(response))
    .catch(error =&gt; console.error(error));
</pre>
<p>Для обработки результата объекта Promise вызывается метод <span class="b">then()</span>, который принимает два параметра: функцию, вызываемую при успешном 
выполнении запроса, и функцию, которая вызывается при неудачном выполнении запроса.</p>
<p>В данном случае функция в первом вызове метода then получает ответ сервера и выводит его на консоль.</p>
<p>Для обработки ошибок мы мы можем использовать метод <span class="b">catch()</span>, в который передается функция обработки ошибок.</p>


<p>Подобным образом через Promise можно было бы отправлять данные на сервер:</p>
<pre class="brush:js;">
function post(url, data) {
    return new Promise((succeed, fail) =&gt; {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () =&gt; {
            if (xhr.status &gt;=200 && xhr.status &lt; 400)
                succeed(xhr.response);
            else
                fail(new Error(\`Request failed: \${xhr.statusText}\`));
        });
        xhr.addEventListener("error", () =&gt; fail(new Error("Network error")));
        xhr.send(data);
  });
}
post("http://localhost:3000/user", "Tom")
    .then(response =&gt;  console.log(response))
    .catch(error =&gt; console.error(error));
</pre>
<p>В даннном случае по адресу "http://localhost:3000/user" будет отправляться строка "Tom".</p>
`;
}

//=====================================================================================
function less180(){  
  document.querySelector(".frameCenter0").innerHTML=`<h1>Локализация</h1><div class="date">Последнее обновление: 14.09.2021</div>
  
  <p>Внедрение стандарта ES2021 добавило в язык JavaScript встроенные возможности локализации. Эти возможности представлены главным образом 
следующими объектами:</p>
<ul>
<li><p><span class="b">Intl.ListFormat</span>: применяется для форматирования списков</p></li>
<li><p><span class="b">Intl.DisplayNames</span>: применяется для форматирования некоторых наименований</p></li>
<li><p><span class="b">Intl.DateTimeFormat</span>: применяется для форматирования дат и времени</p></li>
<li><p><span class="b">Intl.NumberFormat</span>: применяется для форматирования чисел</p></li>
</ul>
<p>Рассмотрим применение этих объектов</p>
<h2>Локализация списков и Intl.ListFormat</h2>
<p>Объект <span class="b">Intl.ListFormat</span> позволяет форматировать списки в соответствии с некоторыми локализационными настройками. Его 
конструктор может принимать два параметра:</p>
<pre class="brush:js;">
Intl.ListFormat([locales[, options]])
</pre>
<p>Параметр <span class="b">locales</span> представляет код языка в формате BCP 47 или набор языковых кодов.</p>
<p>Параметр <span class="b">options</span> представляет дополнительный набор опций:</p>
<ul>
<li><p><span class="b">localeMatcher</span>: алгоритм поиска соответствий. Может принимать два значения: <code>"lookup"</code> и <code>"best fit"</code>. 
Значение по умолчанию - <code>"best fit"</code>.</p></li>
<li><p><span class="b">style</span>: длина форматируемой строки. Возможные значения: <code>"long"</code> 
(например, <code>A, B, and C</code>), <code>"short"</code> или <code>"narrow"</code> (например, <code>A, B,C</code>). Значение по умолчанию - <code>"long"</code></p></li>
<li><p><span class="b">type</span>: формат выходной строки. Возможные значения: <code>"conjunction"</code> (предпоследний и последний элементы в списке 
соединяются союзом "и" ("and") - <code>A, B и C</code>), <code>"disjunction"</code> (предпоследний и последний элементы в списке 
соединяются союзом "или" ("or") - <code>A, B или C</code>), <code>"unit"</code> (применяется для списков с числовыми значениями и добавляет к ним единицы измерения). 
Значение по умолчанию - <code>"conjunction"</code></p></li>
</ul>
<p>Для форматирования списка данный объект предоставляет метод <span class="b">format()</code>, в который передается форматируемый список. Метод возвращает отформатированный локализованный список в виде строки.</p>
<p>Рассмотрим несколько примеров. Добавим союз "И":</p>
<pre class="brush:js;">
const people = ["Tom", "Bob", "Sam"];
const andList = new Intl.ListFormat("ru").format(people); // , { style:"long", type: "conjunction" }
console.log(andList);	// Tom, Bob и Sam
</pre>
<p>В данном случае используется локализация с учетом русскоязычной культуры и для этого в качестве параметра <code>locales</code> в конструктор 
<code>Intl.ListFormat</code> передаем код языка <code>ru</code>. В итоге из массива <code>["Tom", "Bob", "Sam"]</code> строку 
<code>Tom, Bob и Sam</code>. В данном случае для второго параметра - <code>options</code> использовались настройки по умолчанию. Однако мы можем их задать и явным образом:</p>
<pre class="brush:js;">
const people = ["Tom", "Bob", "Sam"];
const andList = new Intl.ListFormat("ru" , { style:"long", type: "conjunction" }).format(people);
console.log(andList);	// Tom, Bob и Sam
</pre>
<p>В этом случае мы получим тот же самый результат, так как опция <code>type: "conjunction"</code> предполагает использование союза "и".</p>
<p>Теперь используем союз "или":</p>
<pre class="brush:js;">
const people = ["Tom", "Bob", "Sam"];
const orList = new Intl.ListFormat("ru", { style:"short", type: "disjunction" }).format(people);
console.log(orList);// Tom, Bob или Sam
</pre>
<p>При этом мы не ограничены одной языковой культурой. Так, локализуем список в ряд других языков:</p>
<pre class="brush:js;">
const people = ["Tom", "Bob", "Sam"];

// английский язык
const enList = new Intl.ListFormat("en" , { style:"long", type: "conjunction" }).format(people);
console.log(enList);	// Tom, Bob, and Sam

// немецкий язык
const deList = new Intl.ListFormat("de" , { style:"long", type: "conjunction" }).format(people);
console.log(deList);	// Tom, Bob und Sam

// французский язык
const frList = new Intl.ListFormat("fr" , { style:"long", type: "conjunction" }).format(people);
console.log(frList);	// Tom, Bob et Sam

// китайский язык
const zhList = new Intl.ListFormat("zh" , { style:"long", type: "conjunction" }).format(people);
console.log(zhList);	// Tom、Bob和Sam
</pre>`;
}

//=====================================================================================
function less181(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Локализация дат и времени</h2><div class="date">Последнее обновление: 14.09.2021</div>
  
  <p>Для локализации дат и времени в JavaScript применяется объект <span class="b">Intl.DateTimeFormat</span>. Его 
конструктор может принимать два параметра:</p>
<pre class="brush:js;">
Intl.DateTimeFormat([locales[, options]])
</pre>
<p>Параметр <span class="b">locales</span> представляет код языка в формате BCP 47 или набор языковых кодов.</p>
<p>Параметр <span class="b">options</span> представляет дополнительный набор опций:</p>
<ul>
<li><p><span class="b">dateStyle</span>: определяет стиль форматирования даты. Возможные значения:</p>
<ul>
<li><p><code>"full"</code></p></li>
<li><p><code>"long"</code></p></li>
<li><p><code>"medium"</code></p></li>
<li><p><code>"short"</code></p></li>
</ul>
</li>

<li><p><span class="b">timeStyle</span>: определяет стиль форматирования времени. Возможные значения:</p>
<ul>
<li><p><code>"full"</code></p></li>
<li><p><code>"long"</code></p></li>
<li><p><code>"medium"</code></p></li>
<li><p><code>"short"</code></p></li>
</ul>
</li>

<li><p><span class="b">calendar</span>: задает календарь. Возможные значения: <code> "buddhist", "chinese", " coptic", "ethiopia", "ethiopic", "gregory", " hebrew", "indian", "islamic", "iso8601", 
"japanese", "persian", "roc"</code></p></li>
<li><p><span class="b">numberingSystem</span>: задает применяемую систему чисел. Возможные значения: <code>"arab", "arabext", " bali", "beng", "deva", "fullwide", " gujr", "guru", "hanidec", "khmr", " knda", "laoo", "latn", "limb", "mlym", " mong", "mymr", "orya", "tamldec", " telu", "thai", "tibt"</code></p></li>
<li><p><span class="b">dayPeriod</span>: формат периода суток. Возможные значения: <code>"narrow", "short", " long"</code>.</p></li>
<li><p><span class="b">timeZone</span>: временная зона.</p></li>
<li><p><span class="b">hour12</span>: указывает, будет ли использоваться 12-часовой формат (значение <code>true</code>) или 24-часовой формат (значение <code>false</code>) .</p></li>
<li><p><span class="b">hourCycle</span>: часовой цикл. Возможные значения: <code> "h11", "h12", "h23", "h24"</code>.</p></li>
<li><p><span class="b">formatMatcher</span>: устанавливает алгоритм сопоставления формата даты/времени. Возможные значения: <code>"basic"</code>  и <code>"best fit"</code> (значение по умолчанию).</p></li>

<li><p><span class="b">weekday</span>: определяет формат дня недели. Возможные значения:</p>
<ul>
<li><p><code>"long"</code> (например, Thursday)</p></li>
<li><p><code>"short"</code> (например, Thu)</p></li>
<li><p><code>"narrow"</code> (например, T - сокращение от Thursday)</p></li>
</ul>
</li>


<li><p><span class="b">era</span>: определяет формат вывода эры. Возможные значения:</p>
<ul>
<li><p><code>"long"</code> (например, Anno Domini)</p></li>
<li><p><code>"short"</code> (например, AD)</p></li>
<li><p><code>"narrow"</code> (например, A)</p></li>
</ul>
</li>

<li><p><span class="b">year</span>: определяет формат года. Возможные значения:</p>
<ul>
<li><p><code>"numeric"</code> (число полностью, например, 2021)</p></li>
<li><p><code>"2-digit"</code> (выводит только две последних цифры)</p></li>
</ul>
</li>
</ul>

<li><p><span class="b">month</span>: определяет формат месяца. Возможные значения:</p>
<ul>
<li><p><code>"numeric"</code> (например, 2)</p></li>
<li><p><code>"2-digit"</code> (в виде двухцифрового кода, например, 02)</p></li>
<li><p><code>"long"</code> (например,  March)</p></li>
<li><p><code>"short"</code> (например,  Mar)</p></li>
<li><p><code>"narrow"</code> (например,  M)</p></li>
</ul>
</li>

<li><p><span class="b">day</span>: определяет, как выводится номер дня. Возможные значения:</p>
<ul>
<li><p><code>"numeric"</code> (например, 2)</p></li>
<li><p><code>"2-digit"</code> (в виде двухцифрового кода, например, 02)</p></li>
</ul>
</li>

<li><p><span class="b">hour</span>: задает формат вывода часа. Возможные значения: <code>"numeric"</code> и <code>"2-digit"</code></p></li>
<li><p><span class="b">minute</span>: задает формат вывода минуты. Возможные значения: <code>"numeric"</code> и <code>"2-digit"</code></p></li>
<li><p><span class="b">second</span>: задает формат вывода секунды. Возможные значения: <code>"numeric"</code> и <code>"2-digit"</code></p></li>



<li><p><span class="b">fractionalSecondDigits</span>: определяет формат вывода долей секунды. Возможные значения:</p>
<ul>
<li><p><code>0</code> (доли секунды не выводятся)</p></li>
<li><p><code>1</code> (выводится только первая цифра долей секунды, например, при значении 736 выводится 7)</p></li>
<li><p><code>2</code> (выводятся только две первых цифра долей секунды, например, при значении 736 выводится 73)</p></li>
<li><p><code>3</code> (выводятся три цифры долей секунды, например, при значении 736 выводится 736)</p></li>
</ul>
</li>


<li><p><span class="b">timeZoneName</span>: определяет представление наименования часового пояса. Возможные значения:</p>
<ul>
<li><p><code>"long"</code> (полное название, например, "Pacific Standard Time, Nordamerikanische Westküsten-Normalzeit")</p></li>
<li><p><code>"short"</code> (короткое название, например, PST, GMT-8)</p></li>
<li><p><code>"longOffset"</code> (полное название в формате GMT, например, "GMT-8")</p></li>
<li><p><code>"shortOffset"</code> (короткое название в формате GMT , например, "GMT-0800")</p></li>
<li><p><code>"longGeneric"</code> (полный обобщенный формат, например, "Pacific Time, Nordamerikanische Westküstenzeit")</p></li>
<li><p><code>"shortGeneric"</code> (короткий обобщенный формат, например, "PT, Los Angeles Zeit")</p></li>
</ul>
</li>
</ul>
<p>Для форматирования даты объект <span class="b">Intl.DateTimeFormat</span> предоставляет метод <span class="b">format()</span>, в который передается форматируемая 
дата - объект <span class="b">Date</span>.</p>
<p>Рассмотрим несколько примеров:</p>
<pre class="brush:js;">
const now = new Date();
const ruDate = new Intl.DateTimeFormat("ru").format(now);
console.log(ruDate);	// 12.09.2021
const enDate = new Intl.DateTimeFormat("en").format(now);
console.log(enDate);	// 9/12/2021
</pre>
<p>В данном случае в конструктор <span class="b">Intl.DateTimeFormat</span> передается значение только для первого параметра <code>locales</code>. 
В первом случае это код "ru", который представляет русскоязычную культуру, а во втором случае код "en" - англоязычная культура. И в зависимости от 
переданного кода культуры мы получим разные результаты при форматировании даты.</p>
<h3>Форматирование даты</h3>
<p>По умолчанию метод <code>format()</code> возвращает дату в сокращенном формате, то есть фактически применяя настройку <code>{dateStyle: "short"}</code>. С помощью 
параметра <span class="b">dateStyle</span> мы можем настроить вывод даты. Посмотрим, какие варианты вывода дат нам предоставляет объект Intl.DateTimeFormat на примере русскоязычной культуры:</p>
<pre class="brush:js;">
const now = new Date();
const shortDate = new Intl.DateTimeFormat("ru", {dateStyle: "short"}).format(now);
console.log(shortDate);		// 12.09.2021
const mediumDate = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(now);
console.log(mediumDate);	// 12 сент. 2021 г.
const longDate = new Intl.DateTimeFormat("ru", {dateStyle: "long"}).format(now);
console.log(longDate);		// 12 сентября 2021 г.
const fullDate = new Intl.DateTimeFormat("ru", {dateStyle: "full"}).format(now);
console.log(fullDate);		// воскресенье, 12 сентября 2021 г.
</pre>

<h3>Форматирование времени</h3>
<p>По умолчанию метод <code>format()</code> не выводит время. С помощью параметра <span class="b">timeStyle</span> настроим вывод времени на примере русскоязычной культуры:</p>
<pre class="brush:js;">
const now = new Date();
const shortTime = new Intl.DateTimeFormat("ru", {timeStyle: "short"}).format(now);
console.log(shortTime);		// 20:42
const mediumTime = new Intl.DateTimeFormat("ru", {timeStyle: "medium"}).format(now);
console.log(mediumTime);	// 20:42:08
const longTime = new Intl.DateTimeFormat("ru", {timeStyle: "long"}).format(now);
console.log(longTime);		// 20:42:08 GMT+11
const fullTime = new Intl.DateTimeFormat("ru", {timeStyle: "full"}).format(now);
console.log(fullTime);		// 20:42:08 GMT+11:00
</pre>
<h3>Объединение даты и времени</h3>
<p>Если мы используем только настройку <code>dateStyle</code>, то выводится возвращается только дата. Если применяется настройка <code>timeStyle</code>, 
то возвращается только время. Чтобы возвратить и дату, и время, необходимо установить обе настройки:</p>
<pre class="brush:js;">
const now = new Date();
const shortDateTime = new Intl.DateTimeFormat("ru", {dateStyle: "short", timeStyle: "short"}).format(now);
console.log(shortDateTime);		// 12.09.2021, 20:43
</pre>
<h3>Остальные настройки</h3>
<p>При необходимости мы можем использовать остальные настройки. Например, если необходимо применить арабскую систему чисел, 
то мы можем настроить вывод чисел с помощью параметра <code>numberingSystem</code>:</p>
<pre class="brush:js;">
const now = new Date();
const arDateTime1 = new Intl.DateTimeFormat("ar", {dateStyle: "short", timeStyle: "short"}).format(now);
console.log(arDateTime1);		// 12‏/9‏/2021 8:51 م
const arDateTime2 = new Intl.DateTimeFormat("ar", {dateStyle: "short", timeStyle: "short", numberingSystem: "arab"}).format(now);
console.log(arDateTime2);		// ١٢‏/٩‏/٢٠٢١ ٨:٥٠ م
</pre>
<p>Если приложение рассчитано на среду, где действует другой календарь, то можно задать параметр <code>calendar</code>:</p>
<pre class="brush:js;">
const now = new Date();
const persianDateTime = new Intl.DateTimeFormat("fa", {dateStyle: "long", numberingSystem: "arab", calendar: "persian"}).format(now);
console.log(persianDateTime);		// ٢١ شهریور ١٤٠٠
const zhDateTime = new Intl.DateTimeFormat("zh", {dateStyle: "long", calendar: "chinese"}).format(now);
console.log(zhDateTime);			// 2021辛丑年八月初六
</pre>`;
}

//=====================================================================================
function less182(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Локализация названий и Intl.DisplayNames</h2><div class="date">Последнее обновление: 14.09.2021</div>
  
  <p>Объект <span class="b">Intl.DisplayNames</span> позволяет локализовать названия, в частности, названия стран и регионов, языков, некоторых других наименований. 
Его конструктор может принимать два параметра:</p>
<pre class="brush:js;">
Intl.DisplayNames([locales[, options]])
</pre>
<p>Параметр <span class="b">locales</span> представляет код языка в формате BCP 47 или набор языковых кодов.</p>
<p>Параметр <span class="b">options</span> представляет дополнительный набор опций:</p>
<ul>
<li><p><span class="b">localeMatcher</span>: алгоритм поиска соответствий. Может принимать два значения: <code>"lookup"</code> и <code>"best fit"</code>. 
Значение по умолчанию - <code>"best fit"</code>.</p></li>
<li><p><span class="b">style</span>: длина форматируемой строки. Возможные значения: <code>"long"</code>, <code>"short"</code> и <code>"narrow"</code> (например, <code>A, B,C</code>). Значение по умолчанию - <code>"long"</code></p></li>
<li><p><span class="b">type</span>: тип названий, которые будут локализованы. Возможные значения:</p>
<ul>
<li><p><code>"language"</code>: возвращает название языка</p></li>
<li><p><code>"region"</code>: возвращает название страны/региона</p></li>
<li><p><code>"script"</code>: возвращает название письменного скрипта</p></li>
<li><p><code>"currency"</code>: возвращает название валюты</p></li>
</ul>
</li>
<li><p><span class="b">fallback</span>: задает альтернативнй вариант. Возможные значения: <code>"code"</code> и <code>"none"</code>. 
<code>"code"</code> задает код, который определяет локализуемое название.</p></li>
</ul>
<p>Какое именно название будет локализоваться, задается с помощью метода <span class="b">of()</code>. В этот метод передается код названия. 
Метод возвращает локализованное наименование.</p>
<p>Рассмотрим несколько примеров:</p>
<pre class="brush:js;">
const USAInEnglish = new Intl.DisplayNames("en", {type: "region"}).of("US");
const USAInRussian = new Intl.DisplayNames("ru", {type: "region"}).of("US");

console.log(USAInEnglish);	// United States
console.log(USAInRussian);	// Соединенные Штаты
</pre>
<p>Здесь получаем два названия для одной и той же страны - США. Для константы USAInEnglish применяет код культуры "en", то есть мы будем получать 
название на английском. Параметр <code>type: "region"</code> указывает, что мы хотим получить название страны.региона. Далее у соданного объекта вызываем 
метод <span class="b">of()</span>, в который передается значение "US" - это код, который означает, что мы хотим получить название для USA. 
В итоге мы получим название USA на английском языке - "United States".</p>
<p>А константа USAInRussian также получает название страны по коду "US", только на русском языке.</p>
<h3>Получение название региона</h3>
<p>Для получения названия региона (это может быть название страны или название географического региона) применяется параметр <code>type: "region"</code>. 
Для получения названия региона в метод <span class="b">of()</span> передается код региона. В качестве кода региона может выступать код 
<a href="https://www.iso.org/iso-3166-country-codes.html" rel="nofollow">ISO-3166</a> из двух букв (например, US, RU, DE и т.д.) или 
трехчисловой код <a href="https://unstats.un.org/unsd/methodology/m49/" rel="nofollow">UN M49</a>.</p>
<p>Например, используем код "DE" для получения названия Германии на разных языках:</p>
<pre class="brush:js;">
const GermanyInEnglish = new Intl.DisplayNames("en", {type: "region"}).of("DE");
const GermanyInRussian = new Intl.DisplayNames("ru", {type: "region"}).of("DE");
const GermanyInGerman = new Intl.DisplayNames("de", {type: "region"}).of("DE");

console.log(GermanyInEnglish);	// Germany
console.log(GermanyInRussian);	// Германия
console.log(GermanyInGerman);	// Deutschland
</pre>

<h3>Получение название письменности</h3>
<p>Для получения названия письменного скрипта применяется значение <code>type: "script"</code>. 
Для получения названия письменности в метод <span class="b">of()</span> передается четырехбуквенный код <a href="https://unicode.org/iso15924/iso15924-codes.html" rel="nofollow">ISO-15924</a>. 
Например:</p>
<pre class="brush:js;">
const CyrlInEnglish = new Intl.DisplayNames("en", {type: "script"}).of("Cyrl");
const CyrlInRussian = new Intl.DisplayNames("ru", {type: "script"}).of("Cyrl");

console.log(CyrlInEnglish);	// Cyrillic
console.log(CyrlInRussian);	// кириллица
</pre>

<h3>Получение название языка</h3>
<p>Для получения названия языка применяется значение <code>type: "language"</code>, а в метод <span class="b">of()</span> передается код языка в формате <code>languageCode[-scriptCode][-regionCode](-variant)</code>, 
где компонент <code>languageCode</code> представляет двухбуквенный код языка в формате ISO 639-1 или трехбуквенный код в формате ISO 639-2. Необязательные 
компоненты <code>scriptCode</code> и <code>regionCode</code> - выше рассмотренные коды письменности и региона соответственно.</p>
<p>Например:</p>
<pre class="brush:js;">
const enRussian = new Intl.DisplayNames("en", {type: "language"}).of("ru");
const ruRussian = new Intl.DisplayNames("ru", {type: "language"}).of("ru");
const deRussian = new Intl.DisplayNames("de", {type: "language"}).of("ru");

console.log(enRussian);	// Russian
console.log(ruRussian);	// русский
console.log(deRussian);	// Russisch
</pre>
<p>Используем код языка вместе с кодом региона:</p>
<pre class="brush:js;">
const ruLang = new Intl.DisplayNames("ru", {type: "language"});
const enUS = ruLang.of("en-US");
const enGB = ruLang.of("en-GB");

console.log(enUS);	// американский английский
console.log(enGB);	// британский английский
</pre>

<h3>Получение название валюты</h3>
<p>Для получения названия валюты применяется значение <code>type: "currency"</code>, а в метод <span class="b">of()</span> передается трехбуквенный 
код <a href="https://www.iso.org/iso-4217-currency-codes.html" rel="nofollow">ISO 4217</a>. Например:</p>
<pre class="brush:js;">
const ruLang = new Intl.DisplayNames("ru", {type: "currency"});
const usd = ruLang.of("USD");
const euro = ruLang.of("EUR");
const ruble = ruLang.of("RUB");

console.log(usd);		// доллар США
console.log(euro);		// евро
console.log(ruble);	// российский рубль
</pre>`;
}

//=====================================================================================
function less183(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Форматирование чисел и Intl.NumberFormat</h2><div class="date">Последнее обновление: 14.09.2021</div>
  
  <p>В разных культурах используются различные подходы к отображению чисел. Например, в одних культурах (в частности, в США, Великобритании) 
в качестве разделителя целой и дробной части применяется точка, а в других культурах - запятая. Аналогично разделителем между разрядами может служить как точка, 
так и запятая. И объект <span class="b">Intl.NumberFormat</span> позволяет нам локализовать числительные под нужную культуру.</p>
<p>Конструктор <span class="b">Intl.NumberFormat</span> может принимать два параметра:</p>
<pre class="brush:js;">
Intl.NumberFormat([locales[, options]])
</pre>
<p>Параметр <span class="b">locales</span> представляет код языка в формате BCP 47 или набор языковых кодов.</p>
<p>Параметр <span class="b">options</span> представляет дополнительный набор опций:</p>
<ul>
<li><p><span class="b">localeMatcher</span>: алгоритм поиска соответствий. Может принимать два значения: <code>"lookup"</code> и <code>"best fit"</code>. 
Значение по умолчанию - <code>"best fit"</code>.</p></li>
<li><p><span class="b">compactDisplay</span>: применяется, если параметр <code>notation</code> равен <code>"compact"</code>. 
Возможные значения: <code>"long"</code> и <code>"short"</code> (значение по умолчанию)</p></li>
<li><p><span class="b">currency</span>: задает валюту, которая применяется для форматирования. 
В качестве значения принимает код валюты в формате ISO 4217, например, "USD" (доллар США), "EUR" (евро) и т.д. Этот параметр необходимо обязательно указать, 
если параметр <code>style</code> имеет значение <code>"currency"</code>.</p></li>
<li><p><span class="b">currencyDisplay</span>: указывает, как отображать валюту. Возможные значения:</p>
<ul>
<li><p><code>"symbol"</code>: применяется символ валюты (например, € для евро). Значение по умолчанию</p></li>
<li><p><code>"narrowSymbol"</code>: применяется сокращенное обозначение валюты (например, "$100" вместо "US$100")</p></li>
<li><p><code>"code"</code>: применяется код валюты</p></li>
<li><p><code>"name"</code>: применяется локализованное название валюты (например, "dollar")</p></li>
</ul>
</li>
<li><p><span class="b">currencySign</span>: знак перед числительным, которое представляет валюту. Может принимать значения <code>"standard"</code> 
(значение по умолчанию) и <code>"accounting"</code></p></li>
<li><p><span class="b">notation</span>: задает тип форматирования. Возможные значения:</p>
<ul>
<li><p><code>"standard"</code>: применяется для форматирования обычных чисел. Значение по умолчанию</p></li>
<li><p><code>"scientific"</code>: возвращает порядок величины для форматируемого числа</p></li>
<li><p><code>"engineering"</code>: возвращает значение в экспоненциальной нотации</p></li>
<li><p><code>"compact"</code>: для представления экспоненциальной записи применяется строка</p></li>
</ul>
</li>
<li><p><span class="b">numberingSystem</span>: числовая система. Возможные значения: <code> "arab", "arabext", " bali", "beng", "deva", "fullwide", " gujr", "guru", "hanidec", "khmr", " knda", "laoo", "latn", "limb", "mlym", " mong", "mymr", "orya", "tamldec", " telu", "thai", "tibt"</code></p></li>
<li><p><span class="b">signDisplay</span>: указывает, нужно ли отображать знак перед числом. Возможные значения:</p>
<ul>
<li><p><code>"auto"</code>: знак отображается только для отрицательных чисел. Значение по умолчанию</p></li>
<li><p><code>"never"</code>: знак никогда не отображается</p></li>
<li><p><code>"always"</code>: знак отображается всегда</p></li>
<li><p><code>"exceptZero"</code>: знак отображается для всех чисел, кроме нуля</p></li>
</ul>
</li>
<li><p><span class="b">style</span>: тип форматирования. Возможные значения:</p>
<ul>
<li><p><code>"decimal"</code>: для форматирования обычных чисел. Значение по умолчанию</p></li>
<li><p><code>"currency"</code>: для форматирования валюты</p></li>
<li><p><code>"percent"</code>: для форматирования процентов</p></li>
<li><p><code>"unit"</code>: для форматирования единиц измерения</p></li>
</ul>
</li>
<li><p><span class="b">unit</span>: устанавливает единицу измерения. Применяемые единицы измерения можно найти в <a href="https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier" rel="nofollow">следующей таблице</a>.</p></li>

<li><p><span class="b">unitDisplay</span>: тип отображения единиц измерения. Возможные значения:</p>
<ul>
<li><p><code>"long"</code>: полная форма (например, <code>16 litres</code>)</p></li>
<li><p><code>"short"</code>: сокращенная форма (например, <code>16 l</code>). Значение по умолчанию</p></li>
<li><p><code>"narrow"</code>: сжатая форма (например, <code>16l</code>)</p></li>
</ul>
</li>

<li><p><span class="b">useGrouping</span>: указывает, надо ли использовать разделитель для разрядов числа. Может принимать значения <code>true</code> 
(использовать разделители - значение по умолчанию) и <code>false</code> (не использовать разделители)</p></li>

<li><p><span class="b">minimumIntegerDigits</span>: минимальное количество цифр в числе. Возможные значения: от 1 (значение по умолчанию) до 21</p></li>
<li><p><span class="b">minimumFractionDigits</span>: минимальное количество цифр в дробной части числа. Возможные значения: от 0 (значение по умолчанию) до 20</p></li>
<li><p><span class="b">maximumFractionDigits</span>: максимальное количество цифр в дробной части числа. Возможные значения: от 0 до 20</p></li>
<li><p><span class="b">minimumSignificantDigits</span>: минимальное количество цифр в целой части числа. Возможные значения: от 1 (значение по умолчанию) до 21</p></li>
<li><p><span class="b">maximumSignificantDigits</span>: максимальное количество цифр в целой части числа. Возможные значения: от 1 (значение по умолчанию) до 21</p></li>
</ul>
<p>Для форматирования числа объект <span class="b">Intl.NumberFormat</span> предоставляет метод <span class="b">format()</span>, в который передается форматируемое 
число и который возвращает отформатированное число в виде строки.</p>
<p>Локализуем число <code>5500,67</code> на разные языки:</p>
<pre class="brush:js;">
const amount = 5500.67;

const en = new Intl.NumberFormat("en").format(amount);
const ru = new Intl.NumberFormat("ru").format(amount);
const de = new Intl.NumberFormat("de").format(amount);

console.log(en);	// 5,500.67
console.log(ru);	// 5 500,67
console.log(de);	// 5.500,67
</pre>
<p>По умолчанию для форматирования чисел применяется параметр <code>{style: "decimal"}</code>. Также мы могли бы его явно применить:</p>
<pre class="brush:js;">
const amount = 5500.67;

const ru = new Intl.NumberFormat("ru", {style: "decimal"}).format(amount);
// то же самое, что и
// const ru = new Intl.NumberFormat("ru").format(amount);

console.log(ru);	// 5 500,67
</pre>
<h3>Форматирование процентов</h3>
<p>В разных культурах может отличаться написание процентов. Для локализации процентов применяется значение <code></code></p>
<pre class="brush:js;">
const value = 0.851;

const en = new Intl.NumberFormat("en", {style: "percent"}).format(value);
const ru = new Intl.NumberFormat("ru", {style: "percent"}).format(value);
const tr = new Intl.NumberFormat("tr", {style: "percent"}).format(value);

console.log(en);	// 85%
console.log(ru);	// 85 %
console.log(tr);	// %85
</pre>
<h4>Вывод дробной части</h4>
<p>Однако в примере выше мы видим, что теряется дробная часть. Чтобы исправить положение, мы можем использовать параметр <code>minimumFractionDigits</code>, который задает количество знаков в дробной части:</p>
<pre class="brush:js;">
const value = 0.851;

const en = new Intl.NumberFormat("en", {style: "percent", minimumFractionDigits: 2}).format(value);
const ru = new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 2}).format(value);

console.log(en);	// 85.10%
console.log(ru);	// 85,10 %
</pre>
<h3>Форматирование валюты</h3>
<p>Для форматирования валюты применяется параметр <code>style: "currency"</code>, при этом также надо указать параметр <code>currency</code>, которому передается код валюты:</p>
<pre class="brush:js;">
const value = 85.1;

const en = new Intl.NumberFormat("en", {style: "currency", currency: "USD"}).format(value);
const ru = new Intl.NumberFormat("ru", {style: "currency", currency: "USD"}).format(value);
const tr = new Intl.NumberFormat("tr", {style: "currency", currency: "USD"}).format(value);

console.log(en);	// $85.10
console.log(ru);	// 85,10 $
console.log(tr);	// $85,10
</pre>
<p>Вывод нескольких валют:</p>
<pre class="brush:js;">
const value = 85.1;

const usd = new Intl.NumberFormat("ru", {style: "currency", currency: "USD"}).format(value);
const euro = new Intl.NumberFormat("ru", {style: "currency", currency: "EUR"}).format(value);
const rub = new Intl.NumberFormat("ru", {style: "currency", currency: "RUB"}).format(value);

console.log(usd);	// 85,10 $
console.log(euro);	// 85,10 €
console.log(rub);	// 85,10 ₽
</pre>
<p>По умолчанию выводится символ валюты, однако значение <code>currencyDisplay: "name"</code> позволяет вывести локализованное название валюты:</p>
<pre class="brush:js;">
const value = 85;

const usd = new Intl.NumberFormat("ru", {style: "currency", currency: "USD", currencyDisplay: "name", minimumFractionDigits: 0}).format(value);
const euro = new Intl.NumberFormat("ru", {style: "currency", currency: "EUR", currencyDisplay: "name"}).format(value);
const rub = new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", currencyDisplay: "name"}).format(value);

console.log(usd);	// 85 долларов США
console.log(euro);	// 85,00 евро
console.log(rub);	// 85,00 российского рубля
</pre>
<h3>Форматирование единиц измерения</h3>
<p>Для форматирования единиц измерения применяется значение <code>style: "unit"</code>. При этом также необходимо указать название единицы измерения с 
помощью параметра <code>unit</code>:</p>
<pre class="brush:js;">
const value = 85;

const en = new Intl.NumberFormat("en", {style: "unit", unit: "liter"}).format(value);
const ru = new Intl.NumberFormat("ru", {style: "unit", unit: "liter"}).format(value);
const zh = new Intl.NumberFormat("zh", {style: "unit", unit: "liter"}).format(value);

console.log(en);	// 85 L
console.log(ru);	// 85 л
console.log(zh);	// 85升
</pre>
<p>По умолчанию применяет сокращенная форма наименования валюты. С помощью значения <code>unitDisplay: "long"</code> можно задать вывод полного наименования:</p>
<pre class="brush:js;">
const value = 85;

const longLiter = new Intl.NumberFormat("ru", {style: "unit", unit: "liter", unitDisplay: "long"}).format(value);
const shortLiter = new Intl.NumberFormat("ru", {style: "unit", unit: "liter", unitDisplay: "short"}).format(value);

console.log(longLiter);		// 85 литров
console.log(shortLiter);	// 85 л
</pre>
<p>Еще несколько примеров с форматированием разных единиц измерения:</p>
<pre class="brush:js;">
const value = 85;

const kilobyte = new Intl.NumberFormat("ru", {style: "unit", unit: "kilobyte", unitDisplay: "long"}).format(value);
const meter = new Intl.NumberFormat("ru", {style: "unit", unit: "meter", unitDisplay: "long"}).format(value);
const gram = new Intl.NumberFormat("ru", {style: "unit", unit: "gram", unitDisplay: "long"}).format(value);

console.log(kilobyte);	// 85 килобайт
console.log(meter);		// 85 метров
console.log(gram);		// 85 грамм
</pre>`;
}

//=====================================================================================
function less190(){  
  document.querySelector(".frameCenter0").innerHTML=`<h1>Модули</h1><h2>Введение в модули</h2><div class="date">Последнее обновление: 17.09.2021</div>
  
  <p>Модули позволяют организовать функционал в отдельные блоки, которые затем можно использовать в других приложениях.</p>
<p>Отличие модулей от обычных скриптов:</p>
<ul>
<li><p>Для загрузки модулей применяется политика CORS. Это значит, что мы не можем просто кинуть в браузер html-страницу, которая подключает 
модуль. Модуль загружается с использованием протокола http/https. То есть страница html, которая загружает модуль, должна располагаться на 
каком-нибудь веб-сервере.</p></li>
<li><p>Модули всегда выполняются в режиме <span class="b">strict mode</span>.</p></li>
<li><p>Модули по умолчанию загружаются асинхронно.</p></li>
<li><p>Модули загружаются и выполняются только один раз.</p></li>
<li><p>Модули позволяют использовать выражения <span class="b">await</span> верхнего уровня без определения и вызова асинхронной функции.</p></li>
<li><p>Модули могут имортировать функционал из других модулей и, в свою очередь, экспортировать свою функциональность в другие модули.</p></li>
<li><p>Модули выполняются не в глобальном контексте, а в своей собственной области видимости. 
То есть переменные, константы, функции, классы и т.д., определенные внутри модуля, не доступны извне, пока они не будут явным 
образом экспортированы. А чтобы другой модуль мог их использовать, он должен их импортировать.</p></li>
</ul>
<p>Если файл содержит выражения <span class="b">import</span> или <span class="b">export</span>, он рассматривается как модуль. Так, 
Чтобы сделать из простого скрипта модуль, достаточно добавить в файл:</p>
<pre class="brush:js;">export {};</pre>
<h3>Определение модуля. Экспорт.</h3>
<p>Определим простейший модуль. Для этого создадим файл <span class="b">message.js</span>, в котором определим следующий код:</p>
<pre class="brush:ts;">
export function sayHello() {
  console.log("Hello METANIT.COM");
}
</pre>
<p>Здесь определена обычная функция <code>sayHello()</code>, которая выводит некоторое сообщение на консоль. Но она определена с ключевым словом <span class="b">export</span>, 
а это значит, что данный файл представляет модуль, а функцию <code>sayHello()</code> можно импортировать в другие модули.</p>
<h3>Подключение модуля. Импорт</h3>
<p>Теперь подключим эту функцию в другой файл. Для этого возьмем файл <span class="b">main.js</span>:</p>
<pre class="brush:ts;">
import {sayHello} from "./message.js";
sayHello();
</pre>
<p>Для подключения функционала из другого модуля применяется ключевое слово <span class="b">import</span>, после которого идут названия подключаемых 
компонентов. Все подключаемые из модуля компоненты помещаются в фигурные скобки: <code>import {sayHello}</code> - в данном случае подключается функция sayHello.</p>
<p>Затем после оператора <span class="b">from</span> указывается модуль, из которого идет импорт. В данном случае указываем 
"./message.js". В данном случае предполагается что оба модуля - main.js и message.js будут находиться в одной папке.</p>
<h3>Загрузка модулей</h3>
<p>Для загрузки модулей определим в папке со скомпилированными файлами веб-страницу <span class="b">index.html</span>:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script type="module" src="main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Для загрузки главного модуля приложения - main.js определяется элемент <code>&lt;script&gt;</code>, у которого устанавливается атрибут <code>type="module"</code>.</p>
<p>Загрузка модулей производится через AJAX, поэтому скомпилированные модули должны быть размещены на веб-сервере. 
То есть у нас не получится просто кинуть страницу в веб-браузер и загрузить на нее модули. Такая веб-страница должна быть размещена на веб-сервере. 
Поэтому прежде всего надо определиться с веб-сервером. Веб-сервер может быть любым. 
В данном случае воспользуемся самым простым вариантом - Node.js. Но опять же вместо node.js это может быть любая другая технология сервера - php, asp.net, python и т.д. либо какой-то определенный 
веб-сервер типа Apache или IIS.</p>
<p>Итак, создадим в папке с файлами модулей файл сервера. Пусть он будет называться <span class="b">server.js</span> и будет иметь следующий код:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){
      
    // получаем путь после слеша
    let filePath = request.url.substr(1);
  if(filePath == "") filePath = "index.html";	
    fs.readFile(filePath, function(error, data){
              
        if(error){
                  
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
      if(filePath.endsWith(".js")) response.setHeader("Content-Type", "text/javascript");
            response.end(data);
        }
    });
}).listen(3000, function(){
    console.log("Server started at 3000");
});
</pre>
<p>Это самый примитивный сервер, который отдает пользователю статические файлы. Для создания сервера применяется функция <code>http.createServer()</code>, 
а для считывания и отправки файлов - функция <code>fs.readFile()</code>. Если имя файла не указано, то отправляется файл <code>index.html</code>. 
Сервер будет запускаться по адресу http://localhost:3000/</p>
<p>Стоит отметить, что при отправке модулей js нам надо устанавливать mime-тип отправляемого контента в <code>"text/javascript"</code>:</p>
<pre class="brush:js;">if(filePath.endsWith(".js")) response.setHeader("Content-Type", "text/javascript");</pre>
<p>Структура финального проекта:</p>
<img src="./pics/module2.png" alt="Определение модулей JavaScript" />
<p>Теперь запустим сервер с помощью команды</p>
<div class="console"><pre class="consoletext">node server.js</pre></div>
<img src="./pics/module1.png" alt="Загрузка модулей ES2015 в JavaScript и Node.js" />
<p>После запуска сервера мы можем перейти в браузере по адресу http://localhost:3000, нам отобразится страница, а в консоли браузера мы сможем увидеть 
результат работы модуля main.js:</p>
<img src="./pics/module3.png" alt="Загрузка и выполнение модулей в JavaScript и Node.js" />
`;
}

//=====================================================================================
function less191(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Импорт модуля</h2><div class="date">Последнее обновление: 17.09.2021</div>
  
  <p>Для импорта одного модуля в другом модуле достаточно прописать оператор <span class="b">import</span> и передать ему путь к импортируемому модулю:</p>
<pre class="brush:js;">import "путь_к_модулю";</pre>
<p>Например, пусть у нас будет следующий модуль <span class="b">message.js</span></p>
<pre class="brush:js;">
let messageText = "Hello METANIT.COM";
console.log(messageText);
</pre>
<p>Фактически этот модуль выглядит как обычный скрипт, который определяет переменную и выводит ее значение на консоль с помощью функции <code>console.log()</code>.</p>
<p>И определим в той же папке файл <span class="b">main.js</span>, в котором подключим выше определенный модуль <span class="b">message.js</span>:</p>
<pre class="brush:js;">
import "./message.js";
</pre>
<p>Здесь мы просто испортируем модуль <code>message.js</code>. В данном случае предполагается что оба модуля - main.js и message.js будут находиться в одной папке, поэтому при импорте указан путь "./message.js", 
где "./" указывает на ту же папку, где расположен файл main.js.</p>
<img src="./pics/module2.png" alt="Определение модулей JavaScript" />
<p>Пусть у нас есть html-страница <span class="b">index.html</span>, на которой подключается файл <span class="b">main.js</span>:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script type="module" src="main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>В итоге при выполнении страницы в браузере в его консоли мы увидим результат работы компонентов подключенного модуля:</p>
<pre class="browser">
Hello METANIT.COM
</pre>
<p>При таком подключении будут выполняться все вызовы функций модуля message.js, однако все определенные и не экспортируемые компоненты в этом 
модуле из вне будут недоступны. Так, мы не можем в модулей main.js написать так:</p>
<pre class="brush:js;">
import "./message.js";

console.log(messageText);	// Ошибка ReferenceError: messageText is not defined
</pre>
<p>Хотя мы и подключили модуль message.js, но его переменная <code>messageText</code> нам недоступна. Так как она не экспортируется, и соотвестветвенно здесь 
мы ее не можем импортировать и использовать.</p>
<p>Такой способ импорта может показаться бессмысленным. Тем не менее мы можем воспользоваться преимуществами модуля, например, возможностью использовать 
выражения <span class="b">await</span> без определения асинхронных функций. Например, изменим модуль <span class="b">message.js</span> следующим образом:</p>
<pre class="brush:js;">
const sum = (x, y)=&gt;Promise.resolve(x + y);
 
const value = await sum(5, 3);
console.log("Результат асинхронной операции:", value);
</pre>
<p>Для простоты здесь определена константа <code>sum</code>, которая представляет промис, вычисляющий сумму двух чисел. И модуль позволяет использовать нам выражения 
<span class="b">await</span> верхнего уровня для получения результата из промиса без определения и вызова асинхронной функции.</p>
`;
}

//=====================================================================================
function less192(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Экспорт и импорт компонентов модулей</h2><div class="date">Последнее обновление: 17.09.2021</div>
  
  <h3>Именной экспорт компонентов модуля</h3>
<p>Для того, чтобы какие-то компоненты модуля (переменные/константы/функции/классы) модуля можно было подключить и использовать в другом модулей, 
их надо экспортировать. Мы можем экспортировать какждый компонент по отдельности. Для этого перед определением компонента указывается ключевое слово <span class="b">export</span>. 
Например, пусть у нас будет следующий модуль <span class="b">message.js</span></p>
<pre class="brush:js;">
// экспорт переменной
export let welcome = "Welcome";
// экспорт константы
export const hello = "Hello";

// экспорт функции
export function sayHello() {
  console.log("Hello METANIT.COM");
}

// экспорт класса
export class Messenger {
    send(text){
    console.log("Sending message:", text);
  }
}
</pre>
<p>Здесь экспортируются переменная <code>welcome</code>, константа <code>hello</code>, функция <code>sayHello()</code> и класс <code>Messenger</code>. 
Стоит отметить, что нам необзательно экспортировать все компоненты модуля, какие-то компоненты мы можем не экспортировать и использовать только внутри этого модуля.</p>
<p>В качестве альтернативы мы могли бы экспортировать все компоненты вместе виде списка:</p>
<pre class="brush:js;">
let welcome = "Welcome";
const hello = "Hello";

function sayHello() {
  console.log("Hello METANIT.COM");
}

class Messenger {
    send(text){
    console.log("Sending message:", text);
  }
}

export {welcome, hello, sayHello, Messenger}
</pre>
<p>В данном случае оба способа экспорта будут эквивалентны.</p>
<h3>Именной импорт компонентов модуля</h3>
<p>Все имортируемые компоненты мы можем подключить по отдельности. Для этого после оператора <span class="b">import</span> в фигурных 
скобках указываются названия подключаемых компонентов- переменных/констант/функций/функций. Затем после оператора <span class="b">from</span> указывается модуль, из которого идет импорт.</p>
<pre class="brush:js;">
import {компонент1, компонент2, ... компонентN} from "путь_к_модулю";
</pre>
<p>Например, импортируем в модуле <span class="b">main.js</span> экспортируемые компоненты модуля <span class="b">message.js</span>:</p>
<pre class="brush:js;">
import {sayHello, welcome, Messenger} from "./message.js";

sayHello();

const telegram = new Messenger();
telegram.send(welcome);
</pre>
<p>Итак, здесь подключаются из модуля message.js переменная <code>welcome</code>, функция <code>sayHello()</code> и класс <code>Messenger</code>. При этом нам необязательно 
подключать все компоненты модуля. Мы можем подключить только те компоненты, которые нам непосредственно нужны и которые мы собираемся использовать.</p>
<p>В итоге при выполнении страницы в браузере в его консоли мы увидим результат работы компонентов подключенного модуля main.js:</p>
<pre class="browser">
Hello METANIT.COM
Sending message: Welcome
</pre>
<h3>Импорт всего модуля</h3>
<p>Если в подключаемом модуля очень много компонентов, и мы собираемся использовать все возможности модуля, то 
перечислять все подключаемые компоненты может быть утомительно. В этом случае мы можем подключить весь функционал модуля в виде:</p>
<pre class="brush:js;">import * as псевдоним_модуля from "модуль";</pre>
<p>После оператора <code>import</code> идет знак звездочки, который указывает, что надо подключить все экспортируемые компоненты. А после оператора 
<span class="b">as</span> идет псевдоним модуля, с которым будет сопоставляться подключаемый модуль.</p>
<p>Например, подключим в файле <span class="b">main.js</span> весь модуль <span class="b">message.js</span></p>
<pre class="brush:js;">
import * as MessageModule from "./message.js";

MessageModule.sayHello();

const telegram = new MessageModule.Messenger();
telegram.send(MessageModule.welcome);
</pre>
<p>В даном случае подключаемый модуль message.js сопоставляется с идентификатором <code>MessageModule</code>. В качестве псевдонима модуля может выстуать произвольное название. 
И далее мы можем обращаться ко всем экспортируемым компонентам модуля через псевдним модуля, например, обращении к функции sayHello: <code>MessageModule.sayHello()</code></p>
`;
}

//=====================================================================================
function less193(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Экспорт и импорт по умолчанию</h2><div class="date">Последнее обновление: 17.09.2021</div>
  
  <p>При экспорте мы можем указать компонент, который будет экспортироваться по умолчанию с помощью оператора <span class="b">default</span>. Например, 
определим следующий модуль <span class="b">message.js</span>:</p>
<pre class="brush:js;">
export default function sayHello() {
  console.log("Hello from sayHello function");
}
</pre>
<p>Чтобы сделать экспорт по умолчанию, после оператора <span class="b">export</span> указывается оператор <span class="b">default</span>.</p>
<p>Теперь импортируем эту функцию в модуле <span class="b">main.js</span>:</p>
<pre class="brush:js;">
import sayHello from "./message.js";

sayHello();
</pre>
<p>Для импорта компонента по умолчанию достаточно после оператора <span class="b">import</span> прописать имя этого компонента.</p>
<h4>Совметный экспорт/импорт отдельных компонентов и компонентов по умолчанию</h4>
<p>Модуль может одновременно экспортировать отдельные компоненты и компонент по умолчанию:</p>
<pre class="brush:js;">
export let welcome = "Welcome";
export const hello = "Hello";

export default function sayHello() {
  console.log("Hello METANIT.COM");
}

export class Messenger {
    send(text){
    console.log("Sending message:", text);
  }
}
</pre>
<p>Здесь экспортируются все компоненты, однако только функция sayHello экспортируется по умолчанию. Это определение модуля также эквивалентно следующему определению, где компоненты экспортируются через список:</p>
<pre class="brush:js;">
let welcome = "Welcome";
const hello = "Hello";

function sayHello() {
  console.log("Hello METANIT.COM");
}

class Messenger {
    send(text){
    console.log("Sending message:", text);
  }
}

export {welcome, hello, sayHello as default, Messenger}
</pre>
<p>При импорте такого модуля, все компоненты, за исключением компонента по умолчанию, 
необходимо импортировать по отдельности:</p>
<pre class="brush:js;">
import sayHello, {welcome, Messenger} from "./message.js";

sayHello();

const telegram = new Messenger();
telegram.send(welcome);
</pre>
<h4>Экспорт и импорт по умолчанию всего модуля</h4>
<p>Стоит учитывать, что при экспорте по умолчанию мы можем только один раз использовать оператор <span class="b">default</span>. Мы не можем по отдельности экспортировать 
по умолчанию сразу два компонента. Однако мы можем экспортировать по умолчанию сразу набор компонентов как единое целое. Например, 
определим следующий модуль <span class="b">message.js</span>:</p>
<pre class="brush:js;">
let welcome = "Welcome";
const hello = "Hello";

function sayHello() {
  console.log("Hello METANIT.COM");
}

class Messenger {
    send(text){
    console.log("Sending message:", text);
  }
}

export default {welcome, hello, sayHello, Messenger}
</pre>
<p>Теперь импортируем функционал модуля message.js в модуле <span class="b">main.js</span>:</p>
<pre class="brush:js;">
import MessageModule from "./message.js";

MessageModule.sayHello();

const telegram = new MessageModule.Messenger();
telegram.send(MessageModule.welcome);
</pre>
<p>В данном случае весь экспортированный список компонентов будет сопоставляться с названием <code>MessageModule</code>, которое фактически будет 
представлять модуль. И далее через этот идентификатор можно обратиться к конкреному компоненту, используя имя компонента: <code>MessageModule.sayHello();</code></p>
`;
}

//=====================================================================================
function less194(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Использование псевдонимов при экспорте и импорте</h2><div class="date">Последнее обновление: 17.09.2021</div>
  
  <p>С помощью оператора <span class="b">as</span> экспортируемым/импортируемым компонентам модуля можно назначить псевдоним. Затем для использования подобных компонентов применяется 
не их непосредственное имя, а их псевдоним.</p>
<h3>Псевдонимы в экспорте</h3>
<p>Определим следующий модуль <span class="b">message.js</span>:</p>
<pre class="brush:js;">
let welcome = "Welcome";
const hello = "Hello";

function sayHello() {
  console.log("Hello METANIT.COM");
}

class Messenger {
    send(text){
    console.log("Sending message:", text);
  }
}

export {welcome as simpleMessage, hello, sayHello as printMessage, Messenger}
</pre>
<p>Здесь все компоненты модуля экспортируются в виде списка, в котором можно определить для компонента псевдним в виде:</p>
<pre class="brush:js;">компонент as псевдним</pre>
<p>Так, для константы welcome определен псевдним <code>simpleMessage</code>, а для функции <code>sayHello</code> определен псевдним <code>printMessage()</code>.</p>
<p>В этом случае при импорте модуля message.js данные компоненты будут доступны через свои псевднимы:</p>
<pre class="brush:js;">
import {simpleMessage, printMessage, Messenger} from "./message.js";

printMessage();

const telegram = new Messenger();
telegram.send(simpleMessage);
</pre>
<h3>Псевдонимы при импорте</h3>
<p>Подобным образом можно указать псевдонимы и при импорте. Это может быть актуально, если имя импортируемого компонента довольно велико, и мы хотим установить 
для него более краткий псевдоним. Вторая причина: в модуле уже есть компоненты с таким именем, и чтобы избежать двойственности 
для одноименных компонентов подключаемого модуля установливаются псевдонимы. Третья причина - мы хотим дать компонентам более описательные выразительные имена.</p>
<p>Рассмотрим небольшой пример:</p>
<pre class="brush:js;">
import {simpleMessage as messageText, printMessage as printHello, Messenger} from "./message.js";

const printMessage = ()=&gt;console.log("Hello from main module");

printHello();
printMessage();

const telegram = new Messenger();
telegram.send(messageText);
</pre>
<p>Здесь в модуле импортируемой константе <code>simpleMessage</code> назначается псевдним <code>messageText</code>: <code>simpleMessage as messageText</code></p>
<p>Кроме того, здесь определена функция <code>printMessage()</code>. Однако из модуля также импортируется компонент с таким же именем. И чтобы избежать двойственности, 
импортируемому компоненту назначается псевдним <code>printHello</code>: <code>printMessage as printHello</code></p>
<p>Далее для обращения к импортированным компонентам с псевднимами используются их псевдонимы.</p>
`;
}

//=====================================================================================
function less195(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Динамическая загрузка модулей</h2><div class="date">Последнее обновление: 17.09.2021</div>
  
  <p>Модули можно загружать динамически в любом месте другого модуля. В этом случае надо помнить, что модуль загружается асинхронно, а результат функции 
<span class="b">import</span> будет представлять объект Promise, результатом которого собственно и будет загружаемый модуль.</p>
<pre class="brush:js;">
import("путь_к_модулю").then((module) =&ggt; {
    // действия с модулем
  });
</pre>
<p>Также можно использовать оператор <span class="b">await</span> для получения объекта модуля:</p>
<pre class="brush:js;">
let module = await import("путь_к_модулю");
</pre>
<p>Например, пусть у нас определ следующий модуль <span class="b">message.js</span>:</p>
<pre class="brush:js;">
export const hello = "Hello Work!";

export default function sayHello() {
  console.log("Hello METANIT.COM");
}
</pre>
<p>Здесь экспортируются константа <code>hello</code> и функция <code>sayHello()</code>, причем функция экспортируется по умолчанию.</p>
<p>Динамически подключим этот модуль в другой модуль <span class="b">main.js</span>:</p>
<pre class="brush:js;">
console.log("Main module starts");

import("./message.js").then((module) =&gt; {
    
  module.default();
  console.log(module.hello);
});

console.log("Main module ends");
</pre>
<p>Здесь функция в методе <code>then()</code> в качестве параметра получает загруженный модуль. Далее мы можем обращаться к компонентам модуля по имени. Например, обращение к константе <code>hello</code></p>
<pre class="brush:js;">module.hello</pre>
<p>Однако если какой-то компонент экспортируется по умолчанию, то для обращения к нему применяется ключевое слово <span class="b">default</span>. Так, поскольку 
функция <code>sayHello()</code> экспортируется по умолчанию, то выражение:</p>
<pre class="brush:js;">module.default();</pre>
<p>фактически будет представлять вызов данной функции.</p>
<p>Консольный вывод программы:</p>
<pre class="browser">
Main module starts
Main module ends
Hello METANIT.COM
Hello Work!
</pre>
<p>Также в данном случае можно было бы применить оператор <span class="b">await</span> для получения загруженного модуля:</p>
<pre class="brush:js;">
console.log("Main module starts");

const module = await import("./message.js");

module.default();
console.log(module.hello);

console.log("Main module ends");
</pre>
<p>Динамческая загрузка модулей открывает нам возможность загружать модули в различных ситуациях, в том числе и в функциях, циклических и условных конструкциях и в других 
частях пограммы. Например, мы могли бы загружать модуль в зависимости от условия:</p>
<pre class="brush:js;">
const hour = new Date().getHours();
if(hour &lt; 17){
  const module = await import("./message.js");
  console.log(module.hello);
}
else{
  console.log("Go home");
}
</pre>
<p>В данном случае получаем текущий час. И если он меньше 17, то загружаем модуль и выводим значение константы hello из загруженного модуля. Иначе выводим некоторую строку.</p>
`;
}

//=====================================================================================
function less200(){  
  document.querySelector(".frameCenter0").innerHTML=`<h1>Fetch API</h1><h2>Функция fetch</h2><div class="date">Последнее обновление: 02.12.2021</div>
  
  <p><span class="b">Fetch API</span> предоставляет упрощенный и в тоже время гибкий и мощный инструмент для обращения к сетевым ресурсам по сравнению со стандартным <span class="b">XMLHttpRequest</span>.</p>
<p>Ключевым элементом этого Fetch API является функция <span class="b">fetch()</span>. Она реализована в различных контекстах. В частности, в браузере она реализована 
интерфейсом Windows.</p>
<p>Функция <span class="b">fetch</span> имеет следующий синтаксис:</p>
<pre class="brush:js;">const fetchPromise = fetch(resource [, init])</pre>
<p>В качестве обязательного параметра - <code>resource</code> функция принимает параметры ресурса, к которому функция будет обращаться. В качестве необязательного 
параметра - <code>init</code> функция может принимать объект с дополнительными настройками запроса.</p>
<p>Функция <span class="b">fetch()</span> возвращает объект Promise, который получает ответ после завершения запроса к сетевому ресурсу.</p>
<h3>Определение ресурса на севере</h3> 
<p>Рассмотрим простейший пример. Итак, прежде всего нам потребуется некоторый сетевой ресурс, к которому мы будем обращаться. 
Для эмуляции сетевого ресурса используем локальный веб-сервер. Веб-сервер может быть любым. 
В данном случае воспользуемся самым простым вариантом - Node.js, поэтому перед созданием приложения необходимо <a href="https://metanit.com/web/nodejs/1.1.php">установить Node.js</a>. Но опять же вместо node.js это может быть любая другая технология сервера - 
php, asp.net, python и т.д. либо какой-то определенный веб-сервер типа Apache или IIS.</p>
<p>Итак, создадим на жестком диске папку для файлов веб-сервера. Например, в моем случае это папка <span class="b">C:\app</span>. Далее в этой папке 
определим файл сервера. Пусть он будет называться <span class="b">server.js</span> и будет иметь следующий код:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/hello"){
        response.end("Fetch на METANIT.COM");
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Это самый примитивный сервер, который достаточен для нашей задачи. Вкратце пробежимся по коду. Сначала подключаются пакеты с функциональностью, которую мы собираемся использовать:</p>
<pre class="brush:js;">
const http = require("http");	// для обработки входящих запросов
const fs = require("fs");		// для чтения с жесткого диска файла index.html
</pre> 
<p>Для создания сервера применяется функция <span class="b">http.createServer()</span>. В эту функцию передается функция-обработчик, которая вызывается каждый раз, когда к серверу приходит запрос. 
Эта функция имеет два параметра: <code>request</code> (содержит данные запроса) и <code>response</code> (управляет отправкой ответа).</p>
<p>В функции-обработчике с помощью свойства <code>request.url</code> мы можем узнать, к какому ресурсу на сервере пришел запрос. Так, в данном случае, 
если пришел запрос по пути "/hello" (условно к ресурсу "/hello"), то оправляем в ответ с помощью метода <code>response.end()</code> текст "Fetch на METANIT.COM":</p>
<pre class="brush:js;">
if(request.url == "/hello"){
  response.end("Fetch на METANIT.COM");
}
</pre>
<p>Если запрос пришел к какому-то другому ресурсу, то отправляем файл <span class="b">index.html</span>, который мы дальше определим:</p>
<pre class="brush:js;">
else{
  fs.readFile("index.html", (error, data) =&gt; response.end(data));
}
</pre>
<p>Для считывания файлов применяется встроенная функция <span class="b">fs.readFile()</span>. Первый параметр функции - адрес файла 
(в данном случае предполагается, что файл index.html находится в одной папке с файлом сервера server.js). Второй параметр - функция, которая вызывается после считывания файла 
и получет его содержимое через свой второй параметр data. Затем считанное содежимое также может быть отпавлено с помощью функции <code>response.end(data)</code>.</p>
<p>В конце с помощью функции <span class="b">listen()</span> запускаем веб-сервер на 3000 порту. То есть сервер будет запускаться по адресу http://localhost:3000/</p>
<h3>Вызов функции fetch()</h3>
<p>Теперь в папке сервера определим простенький файл <span class="b">index.html</span></p>
<img src="./pics/fetch3.png" alt="веб-сервер node.js для тестирования fetch api в javascript" />
<p>Определим в этом файле следующее содежимое:</p>
<pre class="brush:js;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
fetch("/hello")
  .then(response =&gt; response.text())
  .then(responseText =&gt; console.log(responseText));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>В функцию <span class="b">fetch()</span> передается адрес ресурса - в данном случае "/hello".</p>
<pre class="brush:js;">fetch("/hello")</pre>
<p>Поскольку <span class="b">fetch()</span> возвращает объект Promise, то для получения результата запроса мы можем вызвать метод <span class="b">then()</span></p>
<pre class="brush:js;">fetch("/hello").then(response =&gt; response.text())</pre>
<p>В метод <span class="b">then()</span> передается функция-колбек. которая в качестве параметра <code>response</code> получает ответ от сервера. 
Однако ответ сервера представляет комплексный объект, который инкапсулирует много различной информации. Пока нас интересует только текст, который 
посылает сервер. И для получения этого текста у объекта response вызывается метод <span class="b">response.text()</span>.</p>
<p>Метод <span class="b">response.text()</span> также возвращает Promise. И чтобы получить собственно текст ответа, подсоединяем второй метод 
<span class="b">then()</span>, в котором в функции-колбеке получаем текст ответа:</p>
<pre class="brush:js;">.then(responseText =&gt; console.log(responseText));</pre>

<p>Теперь в консоли перейдем к папке сервера с помощью команды <span class="b">cd</span> и запустим сервер с помощью команды</p>
<div class="console"><pre class="consoletext">node server.js</pre></div>
<img src="./pics/fetch1.png" alt="Запуск веб-сервера node.js для тестирования fetch api" />
<p>После запуска сервера мы можем перейти в браузере по адресу http://localhost:3000, нам отобразится страница, в javascript-коде которой с помощью 
функции <span class="b">fetch()</span> произойдет обращение к ресурсу "/hello":</p>
<img src="./pics/fetch2.png" alt="функция fetch в javascript" />
<p>В итоге при обращении к ресурсу "/hello" сервер отправит отправит строку "Fetch на METANIT.COM", которую мы сможем получить на веб-странице.</p>
<p>В примере выше применялся относительный путь, но также можно было бы использовать абсолютный путь с указанием протокола, адреса сервера и порта:</p>
<pre class="brush:js;">
fetch("http://localhost:3000/hello")
  .then(response =&gt; response.text())
  .then(responseText =&gt; console.log(responseText));
</pre>
<h3>fetch с async/await</h3>
<p>Поскольку функция <span class="b">fetch()</span> возвращает Promise, то вместо нанизывания методов <span class="b">then()</span> мы можем использовать 
операторы <span class="b">async/await</span> для извлечения ответа. Например, перепишем предыдущий пример:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
getText();
async function getText() {
  // получаем объект ответа
  const response = await fetch("/hello");
  // из объекта ответа извлекаем текст ответа
  const responseText = await response.text();
  console.log(responseText);
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
`;
}

//=====================================================================================
function less201(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Получение ответа. Объект Response и его свойства</h2><div class="date">Последнее обновление: 04.12.2021</div>
  
  <p>Для представления ответа от сервера в Fetch API применяется интерфейс <span class="b">Response</span>. Функция <span class="b">fetch()</span> возвращает 
объект Promise, функция-коллбек в котором в качестве параметра получает объект Response с полученным от сервера ответом:</p>
<pre class="brush:js;">
fetch("/hello").then(response =&gt; /* действия с response */ )
</pre>
<p>Либо можно использовать async/await для получения объекта Response</p>
<pre class="brush:js;">
async function getText() {
  // получаем объект ответа
  const response = await fetch("http://localhost:3000/hello");
  // действия с объектом response .......
}
</pre>
<p>С помощью свойств объекта Response можно получить из полученного ответа различную информацию. Объект Response имеет следующие свойства:</p>
<ul>
<li><p><span class="b">body</span>: содержимое ответа в виде объекта <span class="b">ReadableStream</span></p></li>
<li><p><span class="b">bodyUsed</span>: хранит булевое значение, которое указывает, было ли содержимое ответа уже использовано.</p></li>
<li><p><span class="b">headers</span>: набор заголовков ответа в виде объекта <span class="b">Headers</span></p></li>
<li><p><span class="b">ok</span>: хранит булевое значение, которое указывает, завершился ли запрос успешно (то есть если статусной код ответа находится в диапазоне 200-299)</p></li>
<li><p><span class="b">redirected</span>: хранит булевое значение, которое указывает, является ли ответ результатом переадресации</p></li>
<li><p><span class="b">status</span>: хранит статусный код ответа</p></li>
<li><p><span class="b">statusText</span>: хранит сообщение статуса, которое соответствует статусному коду</p></li>
<li><p><span class="b">type</span>: хранит тип ответа</p></li>
<li><p><span class="b">url</span>: хранит адрес URL. Если в процессе запроса происходит ряд переадресаций, то хранит конечный адрес URL после всех переадресаций</p></li>
</ul>
<p>Стоит отметить, что все эти свойства доступны только для чтения. Например, используем ряд свойств для получения информации об ответа сервера. 
Для этого определим следующий сервер на Node.js, который обрабатывает запросы:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/hello"){
        response.end("Fetch на METANIT.COM");
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>На странице index.html вызовем функцию fetch и получим информацию об ответе:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
fetch("/hello")
  .then(response =&gt; {
    console.log(response.status);		// 200
    console.log(response.statusText);	// OK
    console.log(response.url);			// http://localhost:3000/hello
  });
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Аналогичный пример с async/await:</p>
<pre class="brush:js;">
getResponse();
async function getResponse() {

  const response = await fetch("/hello");
  console.log(response.status);		// 200
  console.log(response.statusText);	// OK
  console.log(response.url);			// http://localhost:3000/hello
}
</pre>
<p>Свойство <span class="b">ok</span> возвращает <code>true</code>, если статусный код ответа в диапазоне от 200 до 299, что обычно говорит о том, что запрос успешно выполнен. 
И мы можем проверять это свойство перед ббработкой ответа:</p>
<pre class="brush:js;">
fetch("/hello").then(response =&gt; {
  if(response.ok){
    // обработка ответа
  }
});
</pre>
<h3>Получение заголовков</h3>
<p>С помощью свойства <span class="b">headers</span> можно получить заголовки ответа, которые представляют интерфейс <span class="b">Headers</span>.</p>
<p>Для получения данных из заголовков мы можем воспользоваться один из следующих методов интерфейса Headers:</p>
<ul>
<li><p><span class="b">entries()</span>: возвращает итератор, который позволяет пройтись по всем заголовкам</p></li>
<li><p><span class="b">forEach()</span>: осуществляет перебор заголовков</p></li>
<li><p><span class="b">get()</span>: возвращает значение определенного заголовка</p></li>
<li><p><span class="b">has()</span>: возвращает <code>true</code>, если установлен определенный заголовок</p></li>
<li><p><span class="b">keys()</span>: получает все названия установленных заголовков</p></li>
<li><p><span class="b">values()</span>: получает все значения установленных заголовков</p></li>
</ul>
<p>Например, получим все заголовки ответа:</p>
<pre class="brush:js;">
fetch("/hello").then(response =&gt; {
  
  for(header of response.headers){
      
     console.log(header[0],":",header[1]);
  }
});
</pre>
<p>Каждый заголовок представляет массив из двух элементов, где первый элемент - название заголовка, а второй - его значение.</p>
<p>Вывод консоли браузера в моем случае:</p>
<pre class="browser">
connection : keep-alive
content-length : 22
date : Fri, 03 Dec 2021 17:09:34 GMT
keep-alive : timeout=5
</pre>
<p>Другой пример - проверка заголовка и при его наличии вывод его значения:</p>
<pre class="brush:js;">
fetch("/hello").then(response =&gt; {
  
  const headerTitle = "date";		// название заголовка
  if(response.headers.has(headerTitle)){	// если заголовок есть
    console.log(response.headers.get(headerTitle));		// получаем его значение
  }
});
</pre>
<p>Таким образом, мы можем получать и кастомные заголовки, которые устанавливаются на стороне сервера. Например, пусть сервер node.js устанавливает 
заголовок "Secret-Code":</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/hello"){
    response.setHeader("Secret-Code", 124);
        response.end("Fetch на METANIT.COM");
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Для установки заголовка в node.js применяется метод <code>response.setHeader()</code>, первый параметр которого - название заголовка, а второй его значение.</p>
<p>Получим этот заголовок на веб-странице:</p>
<pre class="brush:js;">
fetch("/hello").then(response =&gt; {
  
  console.log(response.headers.get("Content-Type"));		// null - заголовок не установлен
  console.log(response.headers.get("Secret-Code"));		// 124
});
</pre>
<p>Если заголовок не установлен, то метод <code>response.headers.get()</code> возвращает null.</p>
<h3>Переадресация</h3>
<p>Если в процессе запроса произошла переадресация, то свойство <span class="b">redirected</span> равно <code>true</code>, а свойство 
<span class="b">url</span> хранит адрес, на который произошла переадресация. Например, пусть сервер на node.js выполняет переадресацию с адреса "/hello" 
на адрес "/newpage":</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/hello"){
    response.statusCode = 302; // 302 - код временной переадресации
        response.setHeader("Location", "/newpage"); // переадресация на адрес localhost:3000/newpage
        response.end();
    }
  else if(request.url == "/newpage"){
    response.setHeader("Secret-Code", "New Page Code: 567"); // для теста устанавливаем заголовок
        response.end("This is a new page");
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Выполним запрос по адресу "/hello" на веб-странице:</p>
<pre class="brush:js;">
fetch("/hello").then(response =&gt;{
  
  if (response.redirected) {
    console.log("Произошел редирект на адрес", response.url);
    console.log(response.headers.get("Secret-Code"));
  }
});
</pre>
<p>Вывод консоли браузера:</p>
<pre class="browser">
Произошел редирект на адрес http://localhost:3000/newpage
New Page Code: 567	
</pre>
<p>По консольному выводу, а именно по заголовку Secret-Code мы видим, что функция fetch получила ответ от нового адреса - "/newpage".</p>
`;
}

//=====================================================================================
function less202(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Получение данных из ответа</h2><div class="date">Последнее обновление: 05.12.2021</div>
  
  <p>Все данные, которые отправил сервер, доступны в объекте <span class="b">Response</span> через свойство <span class="b">body</span>, которое представляет 
объект <span class="b">ReadableStream</span>, но гораздо проще воспользоваться одним из методов объекта <span class="b">Response</span>. Интерфейс <span class="b">Response</span> предоставляет следующие методы:</p>
<ul>
<li><p><span class="b">arrayBuffer()</span>: возвращает promise, который получает содержимое ответа в виде объекта <span class="b">ArrayBuffer</span></p></li>
<li><p><span class="b">blob()</span>: возвращает promise, который получает содержимое ответа в виде объекта <span class="b">Blob</span></p></li>
<li><p><span class="b">clone()</span>: возвращает копию текущего объекта Response</p></li>
<li><p><span class="b">error()</span>: возвращает новый объект Response, который ассоциирован с возникшей ошибкой сети</p></li>
<li><p><span class="b">formData()</span>: возвращает promise, который получает содержимое ответа в виде объекта <span class="b">FormData</span></p></li>
<li><p><span class="b">json()</span>: возвращает promise, который получает содержимое ответа в виде объекта JSON</p></li>
<li><p><span class="b">redirect()</span>: возвращает новый объект Response с другим адресом URL</p></li>
<li><p><span class="b">text()</span>: возвращает promise, который получает содержимое ответа в виде строки текста</p></li>
</ul>
<h3>Получение ответа в виде текста</h3>
<p>Для получения ответа в виде текста применяется метод <span class="b">text()</span>. Например, сервер на Node.js отправляет в ответ клиенту некоторый текст:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/hello"){
        response.end("Fetch на METANIT.COM");
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В данном случае при обращении по адресу "/hello" сервер будет отправлять в ответ клиенту строку текста "Fetch на METANIT.COM".</p>
<p>На странице index.html с помощью метода <span class="b">text()</span> получим эту строку</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
fetch("/hello")
    .then(response =&gt; response.text())
    .then(responseText =&gt; console.log(responseText));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Для получения отправленного текста у объекта response вызывается метод response.text(), который возвращает Promise. И чтобы получить собственно 
текст ответа, подсоединяем второй метод then(), в котором в функции-колбеке получаем текст ответа:</p>
<pre class="brush:js;">then(responseText =&gt; console.log(responseText));</pre>
<p>Либо можно использовать async/await</p>
<pre class="brush:js;">
getText();
async function getText() {
  // получаем объект ответа
  const response = await fetch("/hello");
  // из объекта ответа извлекаем текст ответа
  const responseText = await response.text();
  console.log(responseText);
}
</pre>
<h3>Получение ответа в виде json</h3>
<p>Пусть сервер отправляет некоторый json-объект:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/user"){
    const user = {name: "Tom", age: 37};
        response.end(JSON.stringify(user));
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В данном случае сервер при обращении по адресу "/user" отправляет объект user в виде кода json.</p>
<p>Получим этот объект:</p>
<pre class="brush:js;">
fetch("/user")
  .then(response =&gt; response.json())
    .then(user =&gt; console.log(user.name, " - ", user.age));
</pre>
<p>Метод <span class="b">json()</span> возвращает объект Promise, поэтому во втором методе <code>then()</code> можно получить собственно отправленный объект json и 
обратиться к его свойствам:</p>
<pre class="brush:js;">
.then(user =&gt; console.log(user.name, "-", user.age));
</pre>
<p>Тот же пример с применением async/await:</p>
<pre class="brush:js;">
getUser();
async function getUser() {
  // получаем объект ответа
  const response = await fetch("/user");
  // из объекта ответа извлекаем json
  const user = await response.json();
  console.log(user.name, "-", user.age);
}
</pre>
<h4>Отправка набора данных</h4>
<p>Аналогичым образом можно получать набор объектов в формате json. Допустим, сервер на node.js отправляет массив объектов:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/users.json"){
    const users = [
      {name: "Tom", age: 37},
      {name: "Sam", age: 25},
      {name: "Bob", age: 41}
    ];
        response.end(JSON.stringify(users));
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Получим эти данные на веб-странице:</p>
<pre class="brush:js;">
fetch("/users.json")
  .then(response =&gt; response.json())
    .then(users =&gt; users.forEach(user=&gt; console.log(user.name, " - ", user.age)));
  
// аналог с async/await
getUsers();
async function getUsers() {

  const response = await fetch("/users.json");
  const users = await response.json();
  users.forEach(user=&gt; console.log(user.name, " - ", user.age))
}
</pre>
<h4>Отправка файла json</h4>
<p>Пусть в папке сервера определен файл <span class="b">users.json</span> со следующим содержимым:</p>
<pre class="brush:js;">
[
  {"name": "Tom", "age": 37},
  {"name": "Sam", "age": 25},
  {"name": "Bob", "age": 41}
]
</pre>
<img src="./pics/fetch4.png" alt="Получение файла json в fetch и javascript" />
<p>В случае с сервером node.js мы могли бы в качестве варианта отправить данный файл следующим образом:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/users.json"){
    fs.readFile("users.json", (error, data) =&gt; response.end(data));
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В зависимости от конкретной технологии сервера отправка файлов может отличаться. Здесь же, как и в случае с отправкой файла index.html, считываем данные из файла users.json с 
помощью функции <code>fs.readFile()</code> и отправляем в ответ.</p>
<p>На стороне клиента был бы тот же код, что и в предыдущем случае:</p>
<pre class="brush:js;">
fetch("/users.json")
  .then(response =&gt; response.json())
    .then(users =&gt; users.forEach(user=&gt; console.log(user.name, " - ", user.age)));
</pre>
<h3>Загрузка бинарных данных</h3>
<p>С помощью метода <span class="b">blob()</span> можно загрузить бинарные данные. Рассмотрим на примере изображений. Допустим, на сервере есть файл <span class="b">forest.png</span></p>
<img src="./pics/fetch5.png" alt="blob и загрузка бинарных данных в fetch и javascript" />
<p>Пусть сервер node.js отправляет данный файл при обращении по адресу "forest.png":</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
     
  if(request.url == "/forest.png"){
    fs.readFile("forest.png", (error, data) =&gt; response.end(data));
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>На веб-странице index.html для обращения к серверу определим следующий код:</p>
<pre class="brush:js;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
 &lt;img /&gt;
&lt;script&gt;
const img = document.querySelector("img");
fetch("/forest.png")
  .then(response =&gt; response.blob())
    .then(data =&gt; img.src = URL.createObjectURL(data));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Для показа изображения на веб-странице определен элемент <code>&lt;img &gt;</code></p>
<p>Метод <span class="b">blob()</span> возвращает объект Promise, который получает данные ответа в виде объекта <span class="b">Blob</span>. И во 
втором методе <code>then()</code> получаем этот объект:</p>
<pre class="brush:js;">
then(data =&gt; img.src = URL.createObjectURL(data));
</pre>
<p>Здесь нам надо для html-элемента <code>&lt;img &gt;</code> в качестве источника изображения установить полученный файл. Для этого вызывается функция 
<span class="b">URL.createObjectURL()</span>, в которую передается объект Blob. Эта функция создает адрес URL, на который проецируется загруженный файл. 
Соответственно после выполнения запроса html-элемент <code>&lt;img &gt;</code> отобразит загруженное изображение:</p>
<img src="./pics/fetch6.png" alt="загрузка файлов в fetch и javascript с помощью метода response.blob" />
<p>Аналогичый пример с применением async/await:</p>
<pre class="brush:js;">
const img = document.querySelector("img");
getImage();
async function getImage() {
  const response = await fetch("/forest.png");
  const imgBlob = await response.blob();
  img.src = URL.createObjectURL(imgBlob);
}
</pre>
<p>Подобным образом можно получать и использовать другие типы файлов, например, аудио и видеофайлы.</p>
`;
}

//=====================================================================================
function less203(){  
  document.querySelector(".frameCenter0").innerHTML=`<h2>Настройка параметров запроса. Отправка данных</h2><div class="date">Последнее обновление: 05.12.2021</div>
  
  <p>Функция <span class="b">fetch()</span> может дополнительно принимать опции запроса в виде второго необязательного параметра:</p>
<pre class="brush:js;">fetch(resource [, init])</pre>
<p>Параметр <code>init</code> представляет сложный объект, который может имеет большой набор опций:</p>
<ul>
<li><p><span class="b">method</span>: метод запроса, например, GET, POST, PUT и т.д.</p></li>
<li><p><span class="b">headers</span>: устанавливаемые в запросе заголовки
<li><p><span class="b">body</span>: тело запроса - данные, которые добавляются в запрос.</p></li>
<li><p><span class="b">mode</span>: режим запроса, например, <code>cors</code>, <code>no-cors</code> и <code>same-origin</code>
<li><p><span class="b">credentials</span>: определяет действия с учетными данными (куки, данные HTTP-аутентификации и сертификаты клиента TLS). 
Принимает одно из следующих значений:</p>
<ul><li><code>omit</code>: учетные данные исключаются из запроса, а любые учетные данные, присланные в ответе от сервера, игнорируются</p></li>
<li><code>same-origin</code>: учетные данные включаются только в те запросы и принимаются в ответах только на те запросы, адрес которых принадлежит 
к тому же домену, что и адрес клиента.</p></li>
<li><code>include</code>: учетные данные включаются в любые запросы и принимаются в ответах на любые запросы</p></li></ul>
<li><p><span class="b">cache</span>: устанавливает принцип взаимодействия с кэшем браузера. Возможные значения: <code>default, no-store, reload, no-cache, force-cache</code> и 
<code>only-if-cached</code></p></li>
<li><p><span class="b">redirect</span>: устанавливает, как реагировать на редиректы. Может принимать следующие значения:</p>
<ul><li><code>follow</code>: автоматически применять редирект</p></li>
<li><code>error</code>: при редиректе генерировать ошибку</p></li>
<li><code>manual</code>: обрабатывать ответ в другом контексте</p></li>
</ul>
<li><p><span class="b">referrer</span>: определяет реферера запроса</p></li>
<li><p><span class="b">referrerPolicy</span>: определяет политику реферера - как информация о реферере будет передаваться в запросе. 
Может принимать следующие значения: <code>no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, 
strict-origin-when-cross-origin</code> и <code>unsafe-url</code></p></li>
<li><p><span class="b">integrity</span>: содержит контрольное значение ресурса</p></li>
<li><p><span class="b">keepalive</span>: позволяет запросу существовать дольше, чем время жизни веб-страницы.</p></li>
<li><p><span class="b">signal</span>: предоставляет объект <code>AbortSignal</code> и позволяет отменить выполнение запроса.</p></li>
</ul>
<p>Пример настройки опций:</p>
<pre class="brush:js;">
fetch("/user", {
        method: "GET",
        headers: { "Accept": "application/json" }
    })
  .then(response =&gt; response.json())
    .then(user =&gt; console.log(user));
</pre>
<p>В данном случае устанавливаем метод запроса - "GET" и заголовок "Accept" - его значение "application/json" говорит, что клиент принимает данные в формате json.</p>
<p>Стоит отметить, что свойство <code>headers</code> представляет объект <span class="b">Headers</span>. Мы можем применять методы данного объекта для установки заголовков:</p>
<pre class="brush:js;">
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
fetch("/user", {
        method: "GET",
        headers: myHeaders
    })
  .then(response =&gt; response.json())
    .then(user =&gt; console.log(user));
</pre>
<p>Метод <span class="b">append()</span> добавляет определенный заголовок, название которого передается через первый параметр, а значение заголовка - через второй параметр.</p>
<p>Также можно использовать метод <span class="b">set()</span> для установки заголовка, а если заголовок уже ранее добавлен, то метод <code>set()</code> заменяет его значение. 
Если же надо удалить ранее добавленный заголовок, то можно использовать метод <span class="b">delete()</span>, который получает имя удаляемого заголовка:</p>
<pre class="brush:js;">
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");	// добавляем заголовок Accept
myHeaders.set("Accept", "text/xml");		// Изменяем значение заголовка
myHeaders.delete("Accept");					// Удаляем заголовок
</pre>
<h3>Отправка данных в запросе</h3>
<p>Для отправки данных в запросе в функции <span class="b">fetch()</span> применяется в рамках второго параметра применяется опция <span class="b">body</span>. 
Эти данные могут представлять типы <code>Blob, BufferSource, FormData, URLSearchParams, USVString</code> и <code>ReadableStream</code>. Стоит учитывать, что в запросах с методом <code>GET</code> и <code>HEAD</code> 
для запроса нельзя установить эту опцию.</p>
<p>Для тестирования отправки определим простейший сервер на node.js, который принимает данные:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) =&gt; {
     
  if(request.url == "/user"){
    
      const buffers = [];	// буфер для получаемых данных

     // получаем данные из запроса в буфер
      for await (const chunk of request) {
      buffers.push(chunk);
      }
    // получаем строковое представление ответа
    let userName = Buffer.concat(buffers).toString();
    userName = userName + " Smith";
    response.end(userName);
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В данном случае при обращении по адресу "/user" сервер получает все отправленные данные. Объект запроса предоставляет итератор для извлечения данные. И в коде сервера 
эти данные передаются в специальный массив-буфер:</p>
<pre class="brush:js;">
for await (const chunk of request){
  buffers.push(chunk);
}
</pre>
<p>Затем с помощью метода <code>Buffer.concat()</code> объединяем все полученные данные и формируем из них строку:</p>
<pre class="brush:js;">let userName = Buffer.concat(buffers).toString();</pre>
<p>В данном случае мы предполагаем, что на сервер отправляется простая строка с текстом. Пусть она представляет некоторое имя пользователя. И для примера 
к этому имени добавляется фамилия и измененное имя отправляется обратно клиенту:</p>
<pre class="brush:js;">
userName = userName + " Smith";
response.end(userName);
</pre>
<p>Теперь определим на странице index.html код для отправки данных на этот сервер:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
fetch("/user", { method: "POST", body: "Tom" })
  .then(response =&gt; response.text())
    .then(userName =&gt; console.log(userName));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Для отправки применяется метод POST. А в качестве отправляемых данных выступает простая строка "Tom". Таким образом, мы отправляем простой текст. 
И поскольку сервер в ответ также отправляет текст, то для получения ответа здесь применяется метод <code>response.text()</code>. 
И при запуске данной веб-страницы будет выполняться отправка данных на сервер, и в консоли браузера мы сможем лицезреть полученный от сервера ответ:</p>
<img src="./pics/fetch7.png" alt="Отправка данных на сервер в функции fetch и javascript на сервер node.js" />
<h3>Отправка json</h3>
<p>Подобным образом можно отправлять более сложные по структуре данные. Например, рассмотрим отправку json. Для этого на строне node.js определим следующий сервер:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) =&gt; {
     
  if(request.url == "/user"){
    
      const buffers = [];
      for await (const chunk of request) {
      buffers.push(chunk);
      }
    
    const data = Buffer.concat(buffers).toString();
    const user = JSON.parse(data); // парсим строку в json
    
    // изменяем данные полученного объекта
    user.name = user.name + " Smith";
    user.age += 1;
    // отправляем измененый объект обратно клиенту
    response.end(JSON.stringify(user));
    }
    else{
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>В данном случае на сервера ожидаем, что мы получим объект в формате json, который имеет два свойства - name и age. Для примера сервер меняет значения этих свойств и 
отправляет измененный объект обратно клиенту.</p>
<p>На веб-странице установим объект json для отправки и получим обратно данные с помощью метода <code>respose.json()</code>:</p>
<pre class="brush:js;">
fetch("/user", { 
    method: "POST", 
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
            name: "Tom",
            age: 37
        })
  })
  .then(response =&gt; response.json())
    .then(user =&gt; console.log(user.name, "-", user.age));
</pre>
<img src="./pics/fetch8.png" alt="Отправка json на сервер node.js в функции fetch и javascript" />
`;
}

//=====================================================================================
function less204(){  
  document.querySelector(".frameCenter0").innerHTML=` <h2>Создание клиента для REST API</h2><div class="date">Последнее обновление: 05.12.2021</div>
  
  <p>Используя <span class="b">Fetch API</span> в JavaScript, можно реализовать полноценный клиент для Web API в стиле REST 
для взаимодействия с пользователем. Архитектура REST предполагает применение следующих методов или типов запросов HTTP для взаимодействия с сервером:</p>
<ul><li><p>GET</p></li><li><p>POST</p></li><li><p>PUT</p></li><li><p>DELETE</p></li></ul>
<p>Рассмотрим, как создать свой клиент на javascript для API.</p>
<h3>Создание сервера на node.js</h3>
<p>Для начала определим сервер, который будет и будет собственно представлять Web API. В качестве примера возьмем Node.js. 
Для обработки запросов определим следующий файл <span class="b">server.js</span>:</p>
<pre class="brush:js;">
const http = require("http");
const fs = require("fs");

// данные, с которыми работает клиент
const users = [
  { id:1, name:"Tom", age:24}, 
  { id:2, name:"Bob", age:27},
  { id:3, name:"Alice", age:"23"}
]
// обрабатываем полученные от клиента данные
function getReqData(req) {
    return new Promise(async (resolve, reject) =&gt; {
        try {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const data = JSON.parse(Buffer.concat(buffers).toString());
      resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

http.createServer(async (request, response) =&gt; {
     
   // получение всех пользователей
   if (request.url === "/api/users" && request.method === "GET") {
        response.end(JSON.stringify(users));
    }
  // получение одного пользователя по id
   else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === "GET") {
        // получаем id из адреса url
        const id = request.url.split("/")[3];
        // получаем пользователя по id
        const user = users.find((u) =&gt; u.id === parseInt(id));
    // если пользователь найден, отправляем его
    if(user) 
      response.end(JSON.stringify(user));
    // если не найден, отправляем статусный код и сообщение об ошибке
    else{
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Пользователь не найден" }));
    }
    }
  // удаление пользователя по id	
  else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === "DELETE") {
        // получаем id из адреса url
        const id = request.url.split("/")[3];
        // получаем индекс пользователя по id
        const userIndex = users.findIndex((u) =&gt; u.id === parseInt(id));
    // если пользователь найден, удаляем его из массива и отправляем клиенту
    if(userIndex &gt; -1) {
      const user = users.splice(userIndex, 1)[0];
      response.end(JSON.stringify(user));
    }
    // если не найден, отправляем статусный код и сообщение об ошибке
    else{
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Пользователь не найден" }));
    }
    }
    // добавление пользователя
    else if (request.url === "/api/users" && request.method === "POST") {
    try{
      // получаем данные пользователя
      const userData = await getReqData(request);
      // создаем нового пользователя
      const user = {name: userData.name, age: userData.age};
      // находим максимальный id
      const id = Math.max.apply(Math,users.map(function(u){return u.id;}))
      // увеличиваем его на единицу
      user.id = id + 1;
      // добавляем пользователя в массив
      users.push(user);
      response.end(JSON.stringify(user));
    }
    catch(error){
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Некорректный запрос" }));
    }
    }
    // изменение пользователя
    else if (request.url === "/api/users" && request.method === "PUT") {
    try{
      const userData = await getReqData(request);
      // получаем пользователя по id
      const user = users.find((u) =&gt; u.id === parseInt(userData.id));
      // если пользователь найден, изменяем его данные и отправляем обратно клиенту
      if(user) {
        user.age = userData.age;
        user.name = userData.name;
        response.end(JSON.stringify(user));
      }
      // если не найден, отправляем статусный код и сообщение об ошибке
      else{
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Пользователь не найден" }));
      }
    }
    catch(error){
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Некорректный запрос" }));
    }
    }
    else if (request.url === "/" || request.url === "/index.html") {
    fs.readFile("index.html", (error, data) =&gt; response.end(data));
    }
  else{
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Ресурс не найден" }));
  }
}).listen(3000, ()=&gt;console.log("Сервер запущен по адресу http://localhost:3000"));
</pre>
<p>Разберем в общих чертах этот код. Вначале идет определение данных, с которыми будет работать клиент:</p>
<pre class="brush:js;">
const users = [
  { id:1, name:"Tom", age:24}, 
  { id:2, name:"Bob", age:27},
  { id:3, name:"Alice", age:"23"}
]
</pre>
<p>Для упрошения данные определены в виде обычного массива объектов, но в реальной ситуации обычно подобные данные извлекаются из какой-нибудь базы данных.</p>
<p>Далее определена функция <code>getReqData()</code>, которая извлекает из запроса присланные от клиента данные и конвертирует их в формат json 
(предполагается, что клиент будет присылать данные в формате json):</p>
<pre class="brush:js;">
function getReqData(req) {
    return new Promise(async (resolve, reject) =&gt; {
        try {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const data = JSON.parse(Buffer.concat(buffers).toString());
      resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}
</pre>
<p>Причем результат функции определен в виде промиса. Если данные успешно распарсены, то передаем через промис распарсенный объект. Если же произошла ошибка, 
то передаем сообщение об ошибке.</p>
<p>Далее для каждого типа запросов определен определенный сценарий.</p>
<p>Когда приложение получает запрос типа GET по адресу "api/users", то срабатывает следующий код:</p>
<pre class="brush:js;">
if (request.url === "/api/users" && request.method === "GET") {
  response.end(JSON.stringify(users));
}
</pre>
<p>Здесь просто отправляем выше определенный массив users.</p>
<p>Когда клиент обращается к приложению для получения одного объекта по id в запрос типа GET по адресу "api/users/", то срабатывает следующий код:</p>
<pre class="brush:js;">
else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === "GET") {
  // получаем id из адреса url
  const id = request.url.split("/")[3];
  // получаем пользователя по id
  const user = users.find((u) =&gt; u.id === parseInt(id));
  // если пользователь найден, отправляем его
  if(user) 
    response.end(JSON.stringify(user));
  // если не найден, отправляем статусный код и сообщение об ошибке
  else{
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Пользователь не найден" }));
  }
}
</pre>
<p>В этом случае нам надо найти нужного пользователя по id в массиве, а если он не был найден, возвратить статусный код 404 с некоторым сообщением в формате JSON.</p>
<p>При получении DELETE-запроса по адресу "/api/users/:id" находим индекс объекта в массива. И если объект найден, то удаляем его из массива и отправляем клиенту:</p>
<pre class="brush:js;">
// удаление пользователя по id	
else if (request.url.match(/\/api\/users\/([0-9]+)/) && request.method === "DELETE") {
  // получаем id из адреса url
  const id = request.url.split("/")[3];
  // получаем индекс пользователя по id
  const userIndex = users.findIndex((u) =&gt; u.id === parseInt(id));
  // если пользователь найден, удаляем его из массива и отправляем клиенту
  if(userIndex &gt; -1) {
    const user = users.splice(userIndex, 1)[0];
    response.end(JSON.stringify(user));
  }
  // если не найден, отправляем статусный код и сообщение об ошибке
  else{
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Пользователь не найден" }));
  }
}
</pre>
<p>Если объект не найден, возвращаем статусный код 404.</p>
<p>При получении запроса с методом POST по адресу "/api/users" используем функцию <code>getReqData()</code> для извлечения данных из запроса:</p>
<pre class="brush:js;">
else if (request.url === "/api/users" && request.method === "POST") {
  try{
    // получаем данные пользователя
    const userData = await getReqData(request);
    // создаем нового пользователя
    const user = {name: userData.name, age: userData.age};
    // находим максимальный id
    const id = Math.max.apply(Math,users.map(function(u){return u.id;}))
    // увеличиваем его на единицу
    user.id = id + 1;
    // добавляем пользователя в массив
    users.push(user);
    response.end(JSON.stringify(user));
  }
  catch(error){
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Некорректный запрос" }));
  }
}
</pre>
<p>Поскольку при выполнении функции промис может передавать ошибку (например, в результате парсинга в JSON), оборачиваем весь код в <code>try..catch</code>. 
После получения данных нам надо создать новый объект и добавить его в массив объектов.</p>
<p>Если приложению приходит PUT-запрос, то также с помощью функции <code>getReqData()</code> получаем отправленные клиентом данные. Если объект найден в массиве, то изменяем его, иначе отправляем статусный код 404:</p>
<pre class="brush:js;">
// изменение пользователя
else if (request.url === "/api/users" && request.method === "PUT") {
  try{
    const userData = await getReqData(request);
    // получаем пользователя по id
    const user = users.find((u) =&gt; u.id === parseInt(userData.id));
    // если пользователь найден, изменяем его данные и отправляем обратно клиенту
    if(user) {
      user.age = userData.age;
      user.name = userData.name;
      response.end(JSON.stringify(user));
    }
    // если не найден, отправляем статусный код и сообщение об ошибке
    else{
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Пользователь не найден" }));
    }
  }
  catch(error){
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Некорректный запрос" }));
  }
}
</pre>
<p>Таким образом, мы определили простейший API. Теперь добавим код клиента.</p>
<h3>Определение клиента</h3>
<p>При обращении к корню веб-приложению или по адресу "/index.html", сервер будет отдавать файл index.html. 
Поэтому в одной папке с файлом сервера определим файл <span class="b">index.html</span> со следующим кодом:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;meta name="viewport" content="width=device-width" /&gt;
    &lt;title&gt;Список пользователей&lt;/title&gt;
    &lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" /&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Список пользователей&lt;/h2&gt;
    &lt;form name="userForm"&gt;
        &lt;input type="hidden" name="id" value="0" /&gt;
        &lt;div class="form-group"&gt;
            &lt;label for="name"&gt;Имя:&lt;/label&gt;
            &lt;input class="form-control" name="name" /&gt;
        &lt;/div&gt;
        &lt;div class="form-group"&gt;
            &lt;label for="age"&gt;Возраст:&lt;/label&gt;
            &lt;input class="form-control" name="age" /&gt;
        &lt;/div&gt;
        &lt;div class="panel-body"&gt;
            &lt;button type="submit" class="btn btn-sm btn-primary"&gt;Сохранить&lt;/button&gt;
            &lt;a id="reset" class="btn btn-sm btn-primary"&gt;Сбросить&lt;/a&gt;
        &lt;/div&gt;
    &lt;/form&gt;
    &lt;table class="table table-condensed table-striped table-bordered"&gt;
        &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Id&lt;/th&gt;&lt;th&gt;Имя&lt;/th&gt;&lt;th&gt;возраст&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
        &lt;tbody&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
  
    &lt;script&gt;
  // Получение всех пользователей
        async function getUsers() {
            // отправляет запрос и получаем ответ
            const response = await fetch("/api/users", {
                method: "GET",
                headers: { "Accept": "application/json" }
            });
            // если запрос прошел нормально
            if (response.ok === true) {
                // получаем данные
                const users = await response.json();
                let rows = document.querySelector("tbody"); 
                users.forEach(user =&gt; {
                    // добавляем полученные элементы в таблицу
                    rows.append(row(user));
                });
            }
        }
        // Получение одного пользователя
        async function getUser(id) {
            const response = await fetch("/api/users/" + id, {
                method: "GET",
                headers: { "Accept": "application/json" }
            });
            if (response.ok === true) {
                const user = await response.json();
                const form = document.forms["userForm"];
                form.elements["id"].value = user.id;
                form.elements["name"].value = user.name;
                form.elements["age"].value = user.age;
            }
        }
        // Добавление пользователя
        async function createUser(userName, userAge) {
 
            const response = await fetch("api/users", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: userName,
                    age: parseInt(userAge, 10)
                })
            });
            if (response.ok === true) {
                const user = await response.json();
                reset();
                document.querySelector("tbody").append(row(user));
            }
        }
        // Изменение пользователя
        async function editUser(userId, userName, userAge) {
            const response = await fetch("api/users", {
                method: "PUT",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: userId,
                    name: userName,
                    age: parseInt(userAge, 10)
                })
            });
            if (response.ok === true) {
                const user = await response.json();
                reset();
                document.querySelector("tr[data-rowid='" + user.id + "']").replaceWith(row(user));
            }
        }
        // Удаление пользователя
        async function deleteUser(id) {
            const response = await fetch("/api/users/" + id, {
                method: "DELETE",
                headers: { "Accept": "application/json" }
            });
            if (response.ok === true) {
                const user = await response.json();
                document.querySelector("tr[data-rowid='" + user.id + "']").remove();
            }
        }
 
        // сброс формы
        function reset() {
            const form = document.forms["userForm"];
            form.reset();
            form.elements["id"].value = 0;
        }
        // создание строки для таблицы
        function row(user) {
 
            const tr = document.createElement("tr");
            tr.setAttribute("data-rowid", user.id);
 
            const idTd = document.createElement("td");
            idTd.append(user.id);
            tr.append(idTd);
 
            const nameTd = document.createElement("td");
            nameTd.append(user.name);
            tr.append(nameTd);
 
            const ageTd = document.createElement("td");
            ageTd.append(user.age);
            tr.append(ageTd);
             
            const linksTd = document.createElement("td");
 
            const editLink = document.createElement("a");
            editLink.setAttribute("data-id", user.id);
            editLink.setAttribute("style", "cursor:pointer;padding:15px;");
            editLink.append("Изменить");
            editLink.addEventListener("click", e =&gt; {
 
                e.preventDefault();
                getUser(user.id);
            });
            linksTd.append(editLink);
 
            const removeLink = document.createElement("a");
            removeLink.setAttribute("data-id", user.id);
            removeLink.setAttribute("style", "cursor:pointer;padding:15px;");
            removeLink.append("Удалить");
            removeLink.addEventListener("click", e =&gt; {
 
                e.preventDefault();
                deleteUser(user.id);
            });
 
            linksTd.append(removeLink);
            tr.appendChild(linksTd);
 
            return tr;
        }
        // сброс значений формы
        document.getElementById("reset").addEventListener("click", e =&gt; {
 
            e.preventDefault();
            reset();
        })
 
        // отправка формы
        document.forms["userForm"].addEventListener("submit", e =&gt; {
            e.preventDefault();
            const form = document.forms["userForm"];
            const id = form.elements["id"].value;
            const name = form.elements["name"].value;
            const age = form.elements["age"].value;
            if (id == 0)
                createUser(name, age);
            else
                editUser(id, name, age);
        });
 
        // загрузка пользователей
        getUsers();
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Основная логика здесь заключена в коде javascript. При загрузке страницы в браузере получаем все объекты из БД с помощью функции getUsers:</p>
<pre class="brush:js;">
async function getUsers() {
  // отправляет запрос и получаем ответ
  const response = await fetch("/api/users", {
    method: "GET",
    headers: { "Accept": "application/json" }
  });
  // если запрос прошел нормально
  if (response.ok === true) {
    // получаем данные
    const users = await response.json();
    let rows = document.querySelector("tbody"); 
    users.forEach(user =&gt; {
      // добавляем полученные элементы в таблицу
      rows.append(row(user));
    });
  }
}
</pre>
<p>Для добавления строк в таблицу используется функция <code>row()</code>, которая возвращает строку. В этой строке будут определены ссылки для изменения и удаления пользователя.</p>
<p>Ссылка для изменения пользователя с помощью функции <code>getUser()</code> получает с сервера выделенного пользователя:</p>
<pre class="brush:js;">
async function getUser(id) {
  const response = await fetch("/api/users/" + id, {
    method: "GET",
    headers: { "Accept": "application/json" }
  });
  if (response.ok === true) {
    const user = await response.json();
    const form = document.forms["userForm"];
    form.elements["id"].value = user.id;
    form.elements["name"].value = user.name;
    form.elements["age"].value = user.age;
  }
}
</pre>
<p>И выделенный пользователь добавляется в форму над таблицей. Эта же форма применяется и для добавления объекта. С помощью скрытого поля, которое хранит id пользователя, мы можем узнать, какое действие выполняется - добавление или редактирование. Если id равен 0, то выполняется функция createUser, которая отправляет данные в POST-запросе:</p>
<pre class="brush:js;">
async function createUser(userName, userAge) {
 
  const response = await fetch("api/users", {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      name: userName,
      age: parseInt(userAge, 10)
    })
  });
  if (response.ok === true) {
    const user = await response.json();
    reset();
    document.querySelector("tbody").append(row(user));
  }
}
</pre>
<p>Если же ранее пользователь был загружен на форму, и в скрытом поле сохранился его id, то выполняется функция editUser, которая отправляет PUT-запрос:</p>
<pre class="brush:js;">
async function editUser(userId, userName, userAge) {
  const response = await fetch("api/users", {
    method: "PUT",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      id: userId,
      name: userName,
      age: parseInt(userAge, 10)
    })
  });
  if (response.ok === true) {
    const user = await response.json();
    reset();
    document.querySelector("tr[data-rowid='" + user.id + "']").replaceWith(row(user));
  }
}
</pre>
<p>В конце запустим файл сервера server.js командой:</p>
<div class="console"><pre class="consoletext">node server.js</pre></div>
<img src="./pics/fetch9.png" alt="сервер node.js с API для функции fetch в JavaScript" />
<p>И обратимся в браузере по адресу "http://localhost:3000" и мы сможем управлять пользователями, которые хранятся в файле json:</p>
<img src="./pics/fetch10.png" alt="REST и API и функция fetch в JavaScript" />
`;
}

//=====================================================================================
function less2100(){  
  document.querySelector(".frameCenter0").innerHTML=`<h1>Остальные статьи</h1><h2>JavaScript в CSS</h2><div class="date">Последнее обновление: 19.07.2021</div>
  
  <p>CSS позволяет хранить в переменных код javascript. И хотя такие переменные и вообще хранение js-кода могут показаться бессмысленными, но 
но тем не менее такой код может выполняться браузером как любой стандартный код JavaScript. Рассмотрим простейший пример:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;style&gt;
  :root {
    --script: console.log("Hello from CSS");
  }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
// получаем стили документа
const style = getComputedStyle(document.documentElement);
// получаем значение свойства --script
const script = style.getPropertyValue("--script");
// Выполняем код в свойстве --script
new Function(script)();

// альтернативный вариант выполнения
// eval(script);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Здесь свойство или переменная CSS <code>--script</code> хранит js-код, который выводит на консоль браузера сообщение.</p>
<p>Чтобы выполнить этот код, сначала получаем стили документа:</p>
<pre class="brush:js;">const style = getComputedStyle(document.documentElement);</pre>
<p>Затем получаем среди этих стилей определение свойства <code>--script</code>:</p>
<pre class="brush:js;">const script = style.getPropertyValue("--script");</pre>
<p>Далее выполняем код:</p>
<pre class="brush:js;">new Function(script)();</pre>
<p>В качестве альтернативы для выполнения кода можно вызвать функцию <span class="b">eval()</span>:</p>
<pre class="brush:js;">eval(script);</pre>
<p>В итоге на консоль браузера будет выведено соответствующее сообщение:</p>
<img src="./pics/js_in_css1.png" alt="JavaScript в CSS" />
<p>В качестве хранимого кода могут применяться более сложные выражения JavaScript. Например, используем конструкцию <span class="b">if</span>:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;style&gt;
  :root {
    --script: if (x &gt; 5) document.body.style.background = "blue";
  }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
let x = 10;

const style = getComputedStyle(document.documentElement);
const script = style.getPropertyValue("--script");
eval(script);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Здесь если значение переменной x больше 5, то окрашиваем пространство элемента body в синий цвет.</p>
<img src="./pics/js_in_css2.png" alt="JavaScript in CSS" />
<p>В каких ситуациях подобные возможности могут иметь практическую пользу? На первый взгляд таких ситуаций не так много. И навскидку единственное, что приходит в голову, 
это какое-то логгирование, которое так или иначе связано с настройками в CSS. Например, мы хотим логгировать минимальную ширину окна браузера, который используется 
пользователем. В этом случае мы могли написать что-то вроде следующего:</p>
<pre class="brush:xml;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;METANIT.COM&lt;/title&gt;
  &lt;style&gt;
  :root{
    --log: localStorage["minwidth"] = 0;
  }
  @media (min-width:500px) {
    :root{
      --log: localStorage["minwidth"] = 500;
    }
  }
  @media (min-width:800px) {
    :root{
      --log: localStorage["minwidth"] = 800;
    }
  }
  @media (min-width:1200px) {
    :root{
      --log: localStorage["minwidth"] = 1200;
    }
  }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
window.onload = window.onresize =()=&gt;{
    const log = getComputedStyle(document.documentElement).getPropertyValue("--log");
  eval(log);
};
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Здесь в localStorage записываем элемент с ключом "minwidth", значение которого зависит от значений <code>media-query</code>. А в коде javascript 
определяем обработчик событий <code>window.onresize</code> и <code>window.onload</code>, чтобы при загрузке страницы, а также при изменении ширины окна браузера значение в localStorage перезаписывалось.</p>
<img src="./pics/js_in_css3.png" alt="Логгирование в css через javascript" />
`;
}

//=====================================================================================
