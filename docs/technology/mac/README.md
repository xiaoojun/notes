## 1. USB接口不稳定的解决命令

```bash
sudo killall -STOP -c usbd
```

## 2. brew每次执行前不要自动更新

```markdown
# 第一种方式:
export HOMEBREW_NO_AUTO_UPDATE=true

# 第二种方式: 临时的
按住 control + c 取消本次更新操作

# 第三种方式:使用 Alibaba 的 Homebrew 镜像源进行加速
https://learnku.com/articles/18908
```

## 3. 打开任何来源，解决Mac提示文件“已损坏”的问题

```bash
sudo spctl --master-disable
```

## 4、给xcode添加脚本文件 方便打开终端

-  新建脚本文件 terminal.sh

```bash
#!/bin/sh
if [ -n "$XcodeProjectPath" ]; then
  open -a Terminal "$XcodeProjectPath"/..
else
  open -a Terminal "$XcodeWorkspacePath"/..
fi
```

-  将脚本文件设置为可执行文件

```bash
chmod +x terminal.sh
```

-  配置xcode

```markdowm
Xcode -> preference -> Behaviors -> Custom -> Run : 选择terminal.sh
```

