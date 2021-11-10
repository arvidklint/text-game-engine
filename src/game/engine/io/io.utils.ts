import { Command } from '.';

export function extractCommand(
  text: string,
  commands: Array<string>,
): [Command, string] {
  if (text.length === 0) return [false, text];

  const command = commands.find((possibleCommand) => {
    return text.startsWith(possibleCommand);
  });
  if (!command) return [false, text];

  const restOfText = text.slice(command.length).trim();

  return [command, restOfText];
}
