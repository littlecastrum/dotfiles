# dotfiles

```
# Install `brew`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install `chezmoi`
brew install chezmoi

# Pull `dotfiles`
chezmoi init https://github.com/$GITHUB_USERNAME/dotfiles.git

# Apply the dotfiles locally
chezmoi apply -v

# Install dependencies
bash laptop.local

```



