var search_data = {"index":{"searchIndex":["bigdecimal","bigmath","float","function","integer","jacobian","kernel","lusolve","newton","object","rational","string","%()","*()","**()","+()","+@()","-()","-@()","/()","<()","<=()","<=>()","==()","===()",">()",">=()","bigdecimal()","e()","pi()","_dump()","_load()","abs()","add()","atan()","ceil()","coerce()","cos()","dfdxi()","div()","divmod()","double_fig()","eql?()","exp()","exponent()","finite?()","fix()","floor()","frac()","hash()","infinite?()","inspect()","isequal()","jacobian()","limit()","log()","ludecomp()","lusolve()","mode()","modulo()","mult()","nan?()","new()","nlsolve()","nonzero?()","power()","precs()","quo()","remainder()","round()","save_exception_mode()","save_limit()","save_rounding_mode()","sign()","sin()","split()","sqrt()","sqrt()","sub()","to_d()","to_d()","to_d()","to_d()","to_d()","to_digits()","to_f()","to_i()","to_int()","to_r()","to_s()","truncate()","ver()","zero?()","gem.build_complete","gem_make.out","mkmf.log","makefile","readme","bigdecimal-i386-mingw32.def","depend"],"longSearchIndex":["bigdecimal","bigmath","float","function","integer","jacobian","kernel","lusolve","newton","object","rational","string","bigdecimal#%()","bigdecimal#*()","bigdecimal#**()","bigdecimal#+()","bigdecimal#+@()","bigdecimal#-()","bigdecimal#-@()","bigdecimal#/()","bigdecimal#<()","bigdecimal#<=()","bigdecimal#<=>()","bigdecimal#==()","bigdecimal#===()","bigdecimal#>()","bigdecimal#>=()","kernel#bigdecimal()","bigmath#e()","bigmath#pi()","bigdecimal#_dump()","bigdecimal::_load()","bigdecimal#abs()","bigdecimal#add()","bigmath#atan()","bigdecimal#ceil()","bigdecimal#coerce()","bigmath#cos()","jacobian#dfdxi()","bigdecimal#div()","bigdecimal#divmod()","bigdecimal::double_fig()","bigdecimal#eql?()","bigmath::exp()","bigdecimal#exponent()","bigdecimal#finite?()","bigdecimal#fix()","bigdecimal#floor()","bigdecimal#frac()","bigdecimal#hash()","bigdecimal#infinite?()","bigdecimal#inspect()","jacobian#isequal()","jacobian#jacobian()","bigdecimal::limit()","bigmath::log()","lusolve#ludecomp()","lusolve#lusolve()","bigdecimal::mode()","bigdecimal#modulo()","bigdecimal#mult()","bigdecimal#nan?()","bigdecimal::new()","newton#nlsolve()","bigdecimal#nonzero?()","bigdecimal#power()","bigdecimal#precs()","bigdecimal#quo()","bigdecimal#remainder()","bigdecimal#round()","bigdecimal::save_exception_mode()","bigdecimal::save_limit()","bigdecimal::save_rounding_mode()","bigdecimal#sign()","bigmath#sin()","bigdecimal#split()","bigdecimal#sqrt()","bigmath#sqrt()","bigdecimal#sub()","bigdecimal#to_d()","float#to_d()","integer#to_d()","rational#to_d()","string#to_d()","bigdecimal#to_digits()","bigdecimal#to_f()","bigdecimal#to_i()","bigdecimal#to_int()","bigdecimal#to_r()","bigdecimal#to_s()","bigdecimal#truncate()","bigdecimal::ver()","bigdecimal#zero?()","","","","","","",""],"info":[["BigDecimal","","BigDecimal.html","","<p>BigDecimal extends the native Numeric class to provide the #to_digits and\n#to_d methods.\n<p>When you require …\n"],["BigMath","","BigMath.html","","<p>Provides mathematical functions.\n<p>Example:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&quot;bigdecimal/math&quot;</span>\n\n<span class=\"ruby-identifier\">include</span> <span class=\"ruby-constant\">BigMath</span>\n\n<span class=\"ruby-identifier\">a</span> = <span class=\"ruby-constant\">BigDecimal</span>((<span class=\"ruby-constant\">PI</span>(<span class=\"ruby-value\">100</span>)<span class=\"ruby-operator\">/</span><span class=\"ruby-value\">2</span>).<span class=\"ruby-identifier\">to_s</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["Float","","Float.html","","<p>BigDecimal extends the native Float class to provide the #to_d method.\n<p>When you require BigDecimal in …\n"],["Function","","Function.html","",""],["Integer","","Integer.html","","<p>BigDecimal extends the native Integer class to provide the #to_d method.\n<p>When you require the BigDecimal …\n"],["Jacobian","","Jacobian.html","","<p>require &#39;bigdecimal/jacobian&#39;\n<p>Provides methods to compute the Jacobian matrix of a set of equations …\n"],["Kernel","","Kernel.html","",""],["LUSolve","","LUSolve.html","","<p>Solves a*x = b for x, using LU decomposition.\n<p>Solves a*x = b for x, using LU decomposition.\n<p>Solves a*x …\n"],["Newton","","Newton.html","","<p>newton.rb\n<p>Solves the nonlinear algebraic equation system f = 0 by Newton&#39;s\nmethod. This program is …\n"],["Object","","Object.html","",""],["Rational","","Rational.html","","<p>BigDecimal extends the native Rational class to provide the #to_d method.\n<p>When you require BigDecimal …\n"],["String","","String.html","","<p>BigDecimal extends the native String class to provide the #to_d method.\n<p>When you require BigDecimal in …\n"],["%","BigDecimal","BigDecimal.html#method-i-25","(p1)","<p>Returns the modulus from dividing by b.\n<p>See BigDecimal#divmod.\n"],["*","BigDecimal","BigDecimal.html#method-i-2A","(p1)","<p>Multiply by the specified value.\n<p>e.g.\n\n<pre>c = a.mult(b,n)\nc = a * b</pre>\n"],["**","BigDecimal","BigDecimal.html#method-i-2A-2A","(p1)","<p>Returns the value raised to the power of n.\n<p>See BigDecimal#power.\n"],["+","BigDecimal","BigDecimal.html#method-i-2B","(p1)","<p>Add the specified value.\n<p>e.g.\n\n<pre>c = a.add(b,n)\nc = a + b</pre>\n"],["+@","BigDecimal","BigDecimal.html#method-i-2B-40","()","<p>Return self.\n<p>e.g.\n\n<pre>b = +a  # b == a</pre>\n"],["-","BigDecimal","BigDecimal.html#method-i-2D","(p1)","<p>Subtract the specified value.\n<p>e.g.\n\n<pre>c = a - b</pre>\n"],["-@","BigDecimal","BigDecimal.html#method-i-2D-40","()","<p>Return the negation of self.\n<p>e.g.\n\n<pre>b = -a\nb == a * -1</pre>\n"],["/","BigDecimal","BigDecimal.html#method-i-2F","(p1)","<p>Divide by the specified value.\n<p>e.g.\n\n<pre>c = a.div(b,n)</pre>\n"],["<","BigDecimal","BigDecimal.html#method-i-3C","(p1)","<p>Returns true if a is less than b.\n<p>Values may be coerced to perform the comparison (see ==, BigDecimal#coerce\n…\n"],["<=","BigDecimal","BigDecimal.html#method-i-3C-3D","(p1)","<p>Returns true if a is less than or equal to b.\n<p>Values may be coerced to perform the comparison (see ==, …\n"],["<=>","BigDecimal","BigDecimal.html#method-i-3C-3D-3E","(p1)","<p>The comparison operator. a &lt;=&gt; b is 0 if a == b, 1 if a &gt; b, -1 if\na &lt; b.\n"],["==","BigDecimal","BigDecimal.html#method-i-3D-3D","(p1)","<p>Tests for value equality; returns true if the values are equal.\n<p>The == and === operators and the eql? …\n"],["===","BigDecimal","BigDecimal.html#method-i-3D-3D-3D","(p1)","<p>Tests for value equality; returns true if the values are equal.\n<p>The == and === operators and the eql? …\n"],[">","BigDecimal","BigDecimal.html#method-i-3E","(p1)","<p>Returns true if a is greater than b.\n<p>Values may be coerced to perform the comparison (see ==, BigDecimal#coerce\n…\n"],[">=","BigDecimal","BigDecimal.html#method-i-3E-3D","(p1)","<p>Returns true if a is greater than or equal to b.\n<p>Values may be coerced to perform the comparison (see …\n"],["BigDecimal","Kernel","Kernel.html#method-i-BigDecimal","(*args)","<p>See also BigDecimal.new\n"],["E","BigMath","BigMath.html#method-i-E","(prec)","<p>Computes e (the base of natural logarithms) to the specified number of\ndigits of precision, <code>numeric</code>. …\n"],["PI","BigMath","BigMath.html#method-i-PI","(prec)","<p>Computes the value of pi to the specified number of digits of precision,\n<code>numeric</code>.\n\n<pre>BigMath.PI(10).to_s ...</pre>\n"],["_dump","BigDecimal","BigDecimal.html#method-i-_dump","(p1 = v1)","<p>Method used to provide marshalling support.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">inf</span> = <span class=\"ruby-constant\">BigDecimal</span>.<span class=\"ruby-identifier\">new</span>(<span class=\"ruby-string\">&#39;Infinity&#39;</span>)\n  <span class=\"ruby-comment\">#=&gt; #&lt;BigDecimal:1e16fa8,&#39;Infinity&#39;,9(9)&gt; ...</span>\n</pre>\n"],["_load","BigDecimal","BigDecimal.html#method-c-_load","(p1)","<p>Internal method used to provide marshalling support. See the Marshal\nmodule.\n"],["abs","BigDecimal","BigDecimal.html#method-i-abs","()","<p>Returns the absolute value, as a BigDecimal.\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">BigDecimal</span>(<span class=\"ruby-string\">&#39;5&#39;</span>).<span class=\"ruby-identifier\">abs</span> <span class=\"ruby-comment\">#=&gt; 5</span>\n<span class=\"ruby-constant\">BigDecimal</span>(<span class=\"ruby-string\">&#39;-3&#39;</span>).<span class=\"ruby-identifier\">abs</span> <span class=\"ruby-comment\">#=&gt; 3</span>\n</pre>\n"],["add","BigDecimal","BigDecimal.html#method-i-add","(p1, p2)","\n<pre>+</pre>\n<p>Add the specified value.\n<p>e.g.\n"],["atan","BigMath","BigMath.html#method-i-atan","(x, prec)","<p>Computes the arctangent of <code>decimal</code> to the specified number of\ndigits of precision, <code>numeric</code>.\n<p>If <code>decimal</code> …\n"],["ceil","BigDecimal","BigDecimal.html#method-i-ceil","(p1 = v1)","<p>Return the smallest integer greater than or equal to the value, as a\nBigDecimal.\n\n<pre>BigDecimal(&#39;3.14159&#39;).ceil ...</pre>\n"],["coerce","BigDecimal","BigDecimal.html#method-i-coerce","(p1)","<p>The coerce method provides support for Ruby type coercion. It is not\nenabled by default.\n<p>This means that …\n"],["cos","BigMath","BigMath.html#method-i-cos","(x, prec)","<p>Computes the cosine of <code>decimal</code> to the specified number of\ndigits of precision, <code>numeric</code>.\n<p>If <code>decimal</code> is …\n"],["dfdxi","Jacobian","Jacobian.html#method-i-dfdxi","(f,fx,x,i)","<p>Computes the derivative of f at x. fx is the value of f at x.\n"],["div","BigDecimal","BigDecimal.html#method-i-div","(p1, p2 = v2)",""],["divmod","BigDecimal","BigDecimal.html#method-i-divmod","(p1)","<p>Divides by the specified value, and returns the quotient and modulus as\nBigDecimal numbers. The quotient …\n"],["double_fig","BigDecimal","BigDecimal.html#method-c-double_fig","()","<p>The BigDecimal.double_fig class method returns the number of digits a Float\nnumber is allowed to have. …\n"],["eql?","BigDecimal","BigDecimal.html#method-i-eql-3F","(p1)","<p>Tests for value equality; returns true if the values are equal.\n<p>The == and === operators and the eql? …\n"],["exp","BigMath","BigMath.html#method-c-exp","(p1, p2)","<p>Computes the value of e (the base of natural logarithms) raised to the\npower of <code>decimal</code>, to the specified …\n"],["exponent","BigDecimal","BigDecimal.html#method-i-exponent","()","<p>Returns the exponent of the BigDecimal number, as an Integer.\n<p>If the number can be represented as 0.xxxxxx …\n"],["finite?","BigDecimal","BigDecimal.html#method-i-finite-3F","()","<p>Returns True if the value is finite (not NaN or infinite).\n"],["fix","BigDecimal","BigDecimal.html#method-i-fix","()","<p>Return the integer part of the number, as a BigDecimal.\n"],["floor","BigDecimal","BigDecimal.html#method-i-floor","(p1 = v1)","<p>Return the largest integer less than or equal to the value, as a\nBigDecimal.\n\n<pre>BigDecimal(&#39;3.14159&#39;).floor ...</pre>\n"],["frac","BigDecimal","BigDecimal.html#method-i-frac","()","<p>Return the fractional part of the number, as a BigDecimal.\n"],["hash","BigDecimal","BigDecimal.html#method-i-hash","()","<p>Creates a hash for this BigDecimal.\n<p>Two BigDecimals with equal sign, fractional part and exponent have …\n"],["infinite?","BigDecimal","BigDecimal.html#method-i-infinite-3F","()","<p>Returns nil, -1, or +1 depending on whether the value is finite, -Infinity,\nor +Infinity.\n"],["inspect","BigDecimal","BigDecimal.html#method-i-inspect","()","<p>Returns debugging information about the value as a string of\ncomma-separated values in angle brackets …\n"],["isEqual","Jacobian","Jacobian.html#method-i-isEqual","(a,b,zero=0.0,e=1.0e-8)","<p>Determines the equality of two numbers by comparing to zero, or using the\nepsilon value\n"],["jacobian","Jacobian","Jacobian.html#method-i-jacobian","(f,fx,x)","<p>Computes the Jacobian of f at x. fx is the value of f at x.\n"],["limit","BigDecimal","BigDecimal.html#method-c-limit","(p1 = v1)","<p>Limit the number of significant digits in newly created BigDecimal numbers\nto the specified value. Rounding …\n"],["log","BigMath","BigMath.html#method-c-log","(p1, p2)","<p>Computes the natural logarithm of <code>decimal</code> to the specified\nnumber of digits of precision, <code>numeric</code>.\n<p>If …\n"],["ludecomp","LUSolve","LUSolve.html#method-i-ludecomp","(a,n,zero=0,one=1)","<p>Performs LU decomposition of the n by n matrix a.\n"],["lusolve","LUSolve","LUSolve.html#method-i-lusolve","(a,b,ps,zero=0.0)","<p>Solves a*x = b for x, using LU decomposition.\n<p>a is a matrix, b is a constant vector, x is the solution …\n"],["mode","BigDecimal","BigDecimal.html#method-c-mode","(p1, p2 = v2)","<p>Controls handling of arithmetic exceptions and rounding. If no value is\nsupplied, the current value is …\n"],["modulo","BigDecimal","BigDecimal.html#method-i-modulo","(p1)","<p>Returns the modulus from dividing by b.\n<p>See BigDecimal#divmod.\n"],["mult","BigDecimal","BigDecimal.html#method-i-mult","(p1, p2)","<p>Multiply by the specified value.\n<p>e.g.\n\n<pre>c = a.mult(b,n)\nc = a * b</pre>\n"],["nan?","BigDecimal","BigDecimal.html#method-i-nan-3F","()","<p>Returns True if the value is Not a Number.\n"],["new","BigDecimal","BigDecimal.html#method-c-new","(*args)","<p>Create a new BigDecimal object.\n<p>initial &mdash; The initial value, as an Integer, a Float, a Rational, a BigDecimal …\n"],["nlsolve","Newton","Newton.html#method-i-nlsolve","(f,x)","<p>See also Newton\n"],["nonzero?","BigDecimal","BigDecimal.html#method-i-nonzero-3F","()","<p>Returns self if the value is non-zero, nil otherwise.\n"],["power","BigDecimal","BigDecimal.html#method-i-power","(p1, p2 = v2)","<p>Returns the value raised to the power of n.\n<p>Note that n must be an Integer.\n<p>Also available as the operator …\n"],["precs","BigDecimal","BigDecimal.html#method-i-precs","()","<p>Returns an Array of two Integer values.\n<p>The first value is the current number of significant digits in …\n"],["quo","BigDecimal","BigDecimal.html#method-i-quo","(p1)","<p>Divide by the specified value.\n<p>e.g.\n\n<pre>c = a.div(b,n)</pre>\n"],["remainder","BigDecimal","BigDecimal.html#method-i-remainder","(p1)","<p>Returns the remainder from dividing by the value.\n<p>x.remainder(y) means x-y*(x/y).truncate\n"],["round","BigDecimal","BigDecimal.html#method-i-round","(p1 = v1, p2 = v2)","<p>Round to the nearest integer (by default), returning the result as a\nBigDecimal.\n\n<pre>BigDecimal(&#39;3.14159&#39;).round ...</pre>\n"],["save_exception_mode","BigDecimal","BigDecimal.html#method-c-save_exception_mode","()","<p>Execute the provided block, but preserve the exception mode\n\n<pre>BigDecimal.save_exception_mode do\n  BigDecimal.mode(BigDecimal::EXCEPTION_OVERFLOW, ...</pre>\n"],["save_limit","BigDecimal","BigDecimal.html#method-c-save_limit","()","<p>Execute the provided block, but preserve the precision limit\n\n<pre>BigDecimal.limit(100)\nputs BigDecimal.limit ...</pre>\n"],["save_rounding_mode","BigDecimal","BigDecimal.html#method-c-save_rounding_mode","()","<p>Execute the provided block, but preserve the rounding mode\n\n<pre>BigDecimal.save_rounding_mode do\n  BigDecimal.mode(BigDecimal::ROUND_MODE, ...</pre>\n"],["sign","BigDecimal","BigDecimal.html#method-i-sign","()","<p>Returns the sign of the value.\n<p>Returns a positive value if &gt; 0, a negative value if &lt; 0, and a zero\n…\n"],["sin","BigMath","BigMath.html#method-i-sin","(x, prec)","<p>Computes the sine of <code>decimal</code> to the specified number of digits\nof precision, <code>numeric</code>.\n<p>If <code>decimal</code> is Infinity …\n"],["split","BigDecimal","BigDecimal.html#method-i-split","()","<p>Splits a BigDecimal number into four parts, returned as an array of values.\n<p>The first value represents …\n"],["sqrt","BigDecimal","BigDecimal.html#method-i-sqrt","(p1)","<p>Returns the square root of the value.\n<p>Result has at least n significant digits.\n"],["sqrt","BigMath","BigMath.html#method-i-sqrt","(x, prec)","<p>Computes the square root of <code>decimal</code> to the specified number of\ndigits of precision, <code>numeric</code>.\n\n<pre>BigMath.sqrt(BigDecimal.new(&#39;2&#39;), ...</pre>\n"],["sub","BigDecimal","BigDecimal.html#method-i-sub","(p1, p2)","<p>Subtract the specified value.\n<p>e.g.\n\n<pre>c = a.sub(b,n)</pre>\n"],["to_d","BigDecimal","BigDecimal.html#method-i-to_d","()","<p>Returns self.\n"],["to_d","Float","Float.html#method-i-to_d","(precision=nil)","<p>Convert <code>flt</code> to a BigDecimal and return it.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;bigdecimal&#39;</span>\n<span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;bigdecimal/util&#39;</span>\n\n<span class=\"ruby-value\">0.5</span>.<span class=\"ruby-identifier\">to_d</span>\n<span class=\"ruby-comment\"># ...</span>\n</pre>\n"],["to_d","Integer","Integer.html#method-i-to_d","()","<p>Convert <code>int</code> to a BigDecimal and return it.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;bigdecimal&#39;</span>\n<span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;bigdecimal/util&#39;</span>\n\n<span class=\"ruby-value\">42</span>.<span class=\"ruby-identifier\">to_d</span>\n<span class=\"ruby-comment\"># =&gt; ...</span>\n</pre>\n"],["to_d","Rational","Rational.html#method-i-to_d","(precision)","<p>Converts a Rational to a BigDecimal.\n<p>The required <code>precision</code> parameter is used to determine the\namount …\n"],["to_d","String","String.html#method-i-to_d","()","<p>Convert <code>string</code> to a BigDecimal and return it.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;bigdecimal&#39;</span>\n<span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">&#39;bigdecimal/util&#39;</span>\n\n<span class=\"ruby-string\">&quot;0.5&quot;</span>.<span class=\"ruby-identifier\">to_d</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["to_digits","BigDecimal","BigDecimal.html#method-i-to_digits","()","<p>Converts a BigDecimal to a String of the form “nnnnnn.mmm”. This method is\ndeprecated; use …\n"],["to_f","BigDecimal","BigDecimal.html#method-i-to_f","()","<p>Returns a new Float object having approximately the same value as the\nBigDecimal number. Normal accuracy …\n"],["to_i","BigDecimal","BigDecimal.html#method-i-to_i","()","<p>Returns the value as an integer (Fixnum or Bignum).\n<p>If the BigNumber is infinity or NaN, raises FloatDomainError …\n"],["to_int","BigDecimal","BigDecimal.html#method-i-to_int","()","<p>Returns the value as an integer (Fixnum or Bignum).\n<p>If the BigNumber is infinity or NaN, raises FloatDomainError …\n"],["to_r","BigDecimal","BigDecimal.html#method-i-to_r","()","<p>Converts a BigDecimal to a Rational.\n"],["to_s","BigDecimal","BigDecimal.html#method-i-to_s","(p1 = v1)","<p>Converts the value to a string.\n<p>The default format looks like  0.xxxxEnn.\n<p>The optional parameter s consists …\n"],["truncate","BigDecimal","BigDecimal.html#method-i-truncate","(p1 = v1)","<p>Truncate to the nearest integer (by default), returning the result as a\nBigDecimal.\n\n<pre>BigDecimal(&#39;3.14159&#39;).truncate ...</pre>\n"],["ver","BigDecimal","BigDecimal.html#method-c-ver","()","<p>Returns the BigDecimal version number.\n"],["zero?","BigDecimal","BigDecimal.html#method-i-zero-3F","()","<p>Returns True if the value is zero.\n"],["gem.build_complete","","__/__/extensions/x86-mingw32/2_1_0/bigdecimal-1_2_7/gem_build_complete.html","",""],["gem_make.out","","__/__/extensions/x86-mingw32/2_1_0/bigdecimal-1_2_7/gem_make_out.html","","<p>C:/RailsInstaller/Ruby2.1.0/bin/ruby.exe extconf.rb checking for labs() in\nstdlib.h… yes checking for …\n"],["mkmf.log","","__/__/extensions/x86-mingw32/2_1_0/bigdecimal-1_2_7/mkmf_log.html","","<p>have_func: checking for labs() in stdlib.h… ——————– yes\n<p>“gcc -o conftest.exe\n-IC:/RailsInstaller/Ruby2.1.0/include/ruby-2.1.0/i386-mingw32 …\n"],["Makefile","","Makefile.html","","<p>SHELL = /bin/sh\n<p># V=0 quiet, V=1 verbose.  other values don&#39;t work. V = 0 Q1 = $(V:1=)\nQ = $(Q1:0=@) …\n"],["README","","README.html","","\n<pre>Ruby BIGDECIMAL(Variable Precision) extension library.\nCopyright (C) 1999  by Shigeo Kobayashi(shigeo@tinyforest.gr.jp)</pre>\n"],["bigdecimal-i386-mingw32.def","","bigdecimal-i386-mingw32_def.html","","<p>EXPORTS Init_bigdecimal\n"],["depend","","depend.html","","<p># AUTOGENERATED DEPENDENCIES START bigdecimal.o: $(RUBY_EXTCONF_H)\nbigdecimal.o: $(arch_hdrdir)/ruby/config.h …\n"]]}}