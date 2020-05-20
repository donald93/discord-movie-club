import { SelectMovie } from "./commands/select-movie";
import { AddMovie } from "./commands/add-movie";
import { AddCategory } from "./commands/add-category";
import { CreateCategoryPoll } from "./commands/create-category-poll";
import { EndCategory } from "./commands/end-category";
import { GetTheme as GetCategory } from "./commands/get-theme";
import { SelectCategory } from "./commands/select-category";

export function getCommands() {
  const commands = [];

  //Category commands
  commands.push(new CreateCategoryPoll());
  commands.push(new AddCategory());
  commands.push(new SelectCategory());
  commands.push(new EndCategory());
  commands.push(new GetCategory());

  //Movie commands
  commands.push(new AddMovie());
  commands.push(new SelectMovie());

  return commands;
}
