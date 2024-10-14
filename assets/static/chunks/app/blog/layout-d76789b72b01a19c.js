(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[768, 332], { 880: function (e, t, a) { Promise.resolve().then(a.bind(a, 248)), Promise.resolve().then(a.t.bind(a, 231, 23)) }, 248: function (e, t, a) { "use strict"; a.d(t, { Navigation: function () { return x } }); var s = a(7437), r = a(7138), n = a(2265), l = a(6648), i = a(7055), o = a(6463); let d = [{ name: "Resume", href: "/resume" }, { name: "Projects", href: "/projects" }, { name: "Blog", href: "/blog" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }]; var c = a(2012), m = a.n(c), u = { src: "/assets/static/media/favicon-32x32.a13d0491.png", height: 32, width: 32, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEWLPOuLPeyNPu6LPOuLPeuMPO2OPvCJPOiMPe6MPeyQO+6KPOqNPu+PPvGVQfwmj53tAAAADXRSTlP+9ZrIYIyoQ3TaNeLiYeaNowAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwVyskRgEAMA8GR7T1Bzj9cin43gp7RAuiKBmzdIeP35LppqFVrNOSOOf+TFTrbQnnssZ8PM0oBgcr5cwQAAAAASUVORK5CYII=", blurWidth: 8, blurHeight: 8 }, f = a(8865), h = a(120), b = a(7440); let x = e => { let { gitTheme: t = !1 } = e, a = (0, n.useRef)(null), c = (0, o.usePathname)(), [x, p] = (0, n.useState)(!0); return (0, n.useEffect)(() => { if (!a.current) return; let e = new IntersectionObserver(e => { let [t] = e; return p(t.isIntersecting) }); return e.observe(a.current), () => e.disconnect() }, []), (0, s.jsx)("header", { ref: a, className: "mb-[calc(2rem_+_0.55rem)] lg:mb-[calc(3rem_+_0.55rem)]", children: (0, s.jsx)("div", { className: (0, b.cn)("fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b", x ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500  border-zinc-800"), children: (0, s.jsxs)("div", { className: "container max-w-[90%] flex flex-row items-center justify-between p-2 mx-auto", children: [(0, s.jsxs)(r.default, { href: "/", className: "flex gap-2 duration-200 text-zinc-300 hover:text-zinc-100", children: [(0, s.jsx)(l.default, { src: u, alt: "Logo", width: 24, height: 24 }), (0, s.jsx)("span", { className: m().className, children: "Ajay" })] }), (0, s.jsxs)("div", { className: "flex gap-16 items-center", children: [(0, s.jsx)("nav", { className: "animate-fade-in duration-75", children: (0, s.jsx)("ul", { className: "flex items-center justify-center gap-4", children: d.map(e => (0, s.jsx)("li", { children: (0, s.jsx)(r.default, { href: e.href, className: (0, b.cn)("duration-500 text-zinc-500 hover:text-zinc-300", c.includes(e.href) ? "text-purple-600/80 hover:text-purple-600" : ""), children: e.name }) }, e.href)) }) }), (0, s.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, s.jsx)(r.default, { href: t ? "".concat(f.L.github.theme) : "".concat(f.L.github.href, "/").concat(f.L.github.domain), target: "_blank", rel: "noopener noreferrer", className: "duration-200 text-zinc-300 hover:text-zinc-100", children: (0, s.jsx)(i.Z, { className: "h-5 w-5" }) }), (0, s.jsx)(h.ModeToggle, {})] })] })] }) }) }) } }, 120: function (e, t, a) { "use strict"; a.d(t, { ModeToggle: function () { return y } }); var s = a(7437), r = a(2265), n = a(8296), l = a(2699), i = a(9512), o = a(1538), d = a(2218), c = a(7440); let m = (0, d.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", { variants: { variant: { default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90", destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90", outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50", secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80", ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50", link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }), u = r.forwardRef((e, t) => { let { className: a, variant: r, size: n, asChild: l = !1, ...i } = e, d = l ? o.g7 : "button"; return (0, s.jsx)(d, { className: (0, c.cn)(m({ variant: r, size: n, className: a })), ref: t, ...i }) }); u.displayName = "Button"; var f = a(9789), h = a(7592), b = a(2468), x = a(8165); let p = f.fC, g = f.xz; f.ZA, f.Uv, f.Tr, f.Ee, r.forwardRef((e, t) => { let { className: a, inset: r, children: n, ...l } = e; return (0, s.jsxs)(f.fF, { ref: t, className: (0, c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800", r && "pl-8", a), ...l, children: [n, (0, s.jsx)(h.Z, { className: "ml-auto h-4 w-4" })] }) }).displayName = f.fF.displayName, r.forwardRef((e, t) => { let { className: a, ...r } = e; return (0, s.jsx)(f.tu, { ref: t, className: (0, c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", a), ...r }) }).displayName = f.tu.displayName; let k = r.forwardRef((e, t) => { let { className: a, sideOffset: r = 4, ...n } = e; return (0, s.jsx)(f.Uv, { children: (0, s.jsx)(f.VY, { ref: t, sideOffset: r, className: (0, c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", a), ...n }) }) }); k.displayName = f.VY.displayName; let j = r.forwardRef((e, t) => { let { className: a, inset: r, ...n } = e; return (0, s.jsx)(f.ck, { ref: t, className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50", r && "pl-8", a), ...n }) }); function y(e) { let { className: t, variant: a } = e, { setTheme: r } = (0, i.F)(); return (0, s.jsxs)(p, { children: [(0, s.jsx)(g, { asChild: !0, children: (0, s.jsxs)(u, { variant: a, size: "icon", className: t, children: [(0, s.jsx)(n.Z, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), (0, s.jsx)(l.Z, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), (0, s.jsx)("span", { className: "sr-only", children: "Toggle theme" })] }) }), (0, s.jsxs)(k, { align: "end", children: [(0, s.jsx)(j, { onClick: () => r("light"), className: "hover:cursor-pointer", children: "Light" }), (0, s.jsx)(j, { onClick: () => r("dark"), className: "hover:cursor-pointer", children: "Dark" }), (0, s.jsx)(j, { onClick: () => r("system"), className: "hover:cursor-pointer", children: "System" })] })] }) } j.displayName = f.ck.displayName, r.forwardRef((e, t) => { let { className: a, children: r, checked: n, ...l } = e; return (0, s.jsxs)(f.oC, { ref: t, className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50", a), checked: n, ...l, children: [(0, s.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, s.jsx)(f.wU, { children: (0, s.jsx)(b.Z, { className: "h-4 w-4" }) }) }), r] }) }).displayName = f.oC.displayName, r.forwardRef((e, t) => { let { className: a, children: r, ...n } = e; return (0, s.jsxs)(f.Rk, { ref: t, className: (0, c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50", a), ...n, children: [(0, s.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, s.jsx)(f.wU, { children: (0, s.jsx)(x.Z, { className: "h-2 w-2 fill-current" }) }) }), r] }) }).displayName = f.Rk.displayName, r.forwardRef((e, t) => { let { className: a, inset: r, ...n } = e; return (0, s.jsx)(f.__, { ref: t, className: (0, c.cn)("px-2 py-1.5 text-sm font-semibold", r && "pl-8", a), ...n }) }).displayName = f.__.displayName, r.forwardRef((e, t) => { let { className: a, ...r } = e; return (0, s.jsx)(f.Z0, { ref: t, className: (0, c.cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", a), ...r }) }).displayName = f.Z0.displayName }, 8865: function (e, t, a) { "use strict"; a.d(t, { L: function () { return s } }); let s = { facebook: { href: "https://www.facebook.com/ajaykumarsingh.np", label: "Facebook", handle: "@ajaykumarsingh.np" }, instagram: { href: "https://www.instagram.com/ajaykumarsingh.np", label: "Instagram", handle: "@ajaykumarsingh.np" }, twitter: { href: "https://x.com/singh_ajaykumar", label: "Twitter", handle: "@singh_ajaykumar" }, linkedin: { href: "https://linkedin.com/in/ajaysingh.com.np", label: "LinkedIn", handle: "@singh_ajaykumar" }, email: { href: "mailto:admin@ajaysingh.com.np", label: "Email", handle: "admin@ajaysingh.com.np" }, youtube: { href: "https://www.youtube.com/@ajay__singh", label: "YouTube", handle: "ajay__singh" }, github: { handle: "mentormaya", label: "Github", href: "https://github.com/mentormaya", domain: "mentormaya.github.io", custom_domain: "ajaysingh.com.np", theme: "https://github.com/mentormaya/jekyll-theme" } } }, 7440: function (e, t, a) { "use strict"; a.d(t, { cn: function () { return n } }); var s = a(4839), r = a(6164); function n() { for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)t[a] = arguments[a]; return (0, r.m6)((0, s.W)(t)) } } }, function (e) { e.O(0, [957, 231, 868, 587, 633, 971, 23, 744], function () { return e(e.s = 880) }), _N_E = e.O() }]);