<template>
  <section class="container articles">
    <div class="row  my-5">
      <h1 class="text-center">Drupal Site Essentials: "Config Split", Spliting Configurations between dev and stage sites.</h1>
      <small class="mx-auto">posted: 2020-04-10</small>
    </div>
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 article-content">
        <h2>Why we need it?</h2>
        <hr>
        <p class="content"><strong>While developing a Drupal website,</strong> it is often that we would encounter situations to separate the environment between development and online stage sites. Here is where we leverage the benefit of <a href="https://www.drupal.org/project/config_split"><i>config_split</i></a> module.</p>
        <p>Config_split module allows us to separate specific modules or configurations using Drupal 8's config export/import feature into destinated folders for each environment to export/import.</p>
        <p> For example, <a href="https://www.drupal.org/project/devel"><i>devel and kint</i></a> are modules normally enabled in the dev site for frontend developments, it is not required in the staging site. On the other hand, <a href="https://www.drupal.org/project/shield"><i>shield</i></a> module is enabled on the staging site to prevent your staging website being crawled by search engines. Therefore, we can make use of config_split module to allow each module to take it's config relavent to the setup environments (dev/stage).</p>
        <h2>How to use it?</h2>
        <hr>
        <ul>
          <li><h3>step.1</h3></li>
          <p>Install and enable your module</p>
          <pre><code>composer require drupal/config_split</code></pre>
          <pre><code>drush en confin_split</code></pre>
          <li><h3>step.2</h3></li>
          <p>open the config page at <mark><i>admin/config/development/configuration/config-split</i></mark>, add two settings for dev and stage sites relatively.</p>
          <p class="reminder text-danger"><span>&#9888;</span> Don't forget to create the folder at the location you wrote!</p>
          <pre><code>//your website directory should look like this if you follow the same config as below.
      - config
      -- dev
      -- stage
      - webroot
      composer.json
      composer.lock
          </code></pre>
          <img src="/articles/config-split/dev_config.png" alt="dev config image" class="img-fluid">
          <li>
            <h3>step.3</h3>
          </li>
          <p>Once you have created the config folders in your environment. let's split settings for our <strong>dev</strong> first using <i>devel and kint</i> module as a demo. Assure your dev settings are active, not the Stage settings.</p>
          <img src="/articles/config-split/dev_prod_config_active.png" alt="separate config" class="img-fluid">
          <li>
            <h3>step.4</h3>
          </li>
          <p>Download devel and enable both <i>devel and kint</i> modules</p>
          <pre><code>composer require drupal/devel</code></pre>
          <pre><code>drush en devel kint -y</code></pre>
          <li>
            <h3>step.5</h3>
          </li>
          <p>Select <i>devel and kint</i> modules from your <i>dev</i> settings list in the config_split configuration page.</p>
          <p class="text-danger reminder"><span>&#9888;</span> hold on key Ctrl to multiselect list items.</p>
          <img src="/articles/config-split/select_split_modules.png" alt="select module image" class="img-fluid">
          <li><h3>step.6</h3></li>
          <p>Export config, you'll see the selected config files exported into your destination folder.</p>
          <pre><code>drush cex -y</code></pre>
          <img src="/articles/config-split/folder_structure_1.png" alt="folder structure" class="img-fluid">
          <li>
            <h3>step.7</h3>
          </li>
          <p>Now let's setup a module for stage environment. Downland and enable <a href="https://www.drupal.org/project/shield"><i>shield</i></a>. Setup your credentials for shield at <mark><i>admin/config/system/shield</i></mark>.</p>
          <pre><code>composer require drupal/shield</code></pre>
          <pre><code>drush en shield</code></pre>
          <li><h3>step.8</h3></li>
          <p>switch off your dev config, and activate stage config settigns in config_split configuration page.</p>
          <p class="text-danger reminder"><span>&#9888;</span> Make sure you selected shield module in the split list.</p>
          <img src="/articles/config-split/stage_active.png" alt="active stage settings" class="img-fluid">
          <li><h3>step.9</h3></li>
          <p>Export your config for stage.</p>
          <pre><code>drush cex -y</code></pre>
          <img src="/articles/config-split/folder_structure_2.png" alt="folder structure" class="img-fluid">
          <li>
            <h3>step.10</h3>
          </li>
          <p>Now all you need to do is override the active state of config settings within your settings.php file. Add these two lines to your settings.php file and settings.local.php file to take effect.</p>
          <p class="text-danger reminder"><span>&#9888;</span> Remember to clear cache to let new settings to take effect.</p>
          <pre><code>--sites/default/settings.local.php</code></pre>
          <pre><code>$config['config_split.config_split.stage_site']['status'] = FALSE;
$config['config_split.config_split.dev_site']['status'] = TRUE;</code></pre>
          <pre><code>--sites/default/settings.php</code></pre>
          <pre><code>$config['config_split.config_split.stage_site']['status'] = TRUE;
$config['config_split.config_split.dev_site']['status'] = FALSE;</code></pre>
          <pre><code>//clear cache
  drush cr</code></pre>
          <img src="/articles/config-split/config_override.png" alt="config overriding" class="img-fluid">
          <li><h3>step.11</h3></li>
          <p>Clear cache and run import config to let the magic happen!</p>
          <pre><code>drush cim -y</code></pre>
          <p><span>&#9888;</span> Do note that when you first push your config code to the stage sites, you need to run config import twice to: </p>
          <p>First, install the config_split module.</p>
          <p>Second, read the config in stage folder, and don't forget to <strong>CLEAR CACHE</strong> afterwards!</p>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
</style>