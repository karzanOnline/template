
(function(Window){
    
    /**
     * template主函数体
     * 
     * @param {any} html
     * @param {any} options
     * @returns string
     */
    var templateEngine = function(html,options){
        //剥去<% this.name %>的外壳
        var re = /<%([^%>]+)?%>/g, 
            reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, 
            code = 'var r=[];\n', 
            cursor = 0;
        //根据正则匹配
        var add = function(line, js) {
            js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }

        while(match = re.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor));
        code += 'return r.join("");';
        return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    }

    Window.prototype.templateEngine = templateEngine
})(Window)

