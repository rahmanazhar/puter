import chalk from 'chalk';
                s += chalk.blueBright(`@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@\n`);
                            s += chalk.greenBright(`${line}\n`);
                            s += chalk.redBright(`${line}\n`);