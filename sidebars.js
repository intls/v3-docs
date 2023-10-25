/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // getstartedSidebar: [{type: 'autogenerated', dirName: '.'}],
  
  getstartedSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Why Hyperlane', 
    },
    {
      type: 'doc',
      id: 'get-started',
      label: 'Get Started', 
    },
    {
      type: 'doc',
      id: 'deploy-warp-route',
      label: 'Deploy Warp Route',
    },
    {
      type: 'category',
      label: 'Quick Starts',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'quick-start/messaging-quick-start',
          label: 'Messaging', 
        },    
        {
          type: 'doc',
          id: 'quick-start/warp-route-quick-start',
          label: 'Warp Route', 
        },
        {
          type: 'doc',
          id: 'quick-start/explorer',
          label: 'Explorer',
        },
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
  ],

  protocolSidebar: [
    {
      type: 'doc',
      id: 'protocol/protocol-overview',
      label: 'Overview', 
    },
    {
      type: 'doc',
      id: 'protocol/mailbox',
      label: 'Mailbox', 
    },
    {
      type: 'doc',
      id: 'protocol/warp-routes',
      label: 'Warp Routes',
    },
    {
      type: 'category',
      label: 'Interchain Security Modules',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'protocol/ISM/multisig-ISM',
          label: 'Multisig', 
        },    
        {
          type: 'doc',
          id: 'protocol/ISM/routing-ISM',
          label: 'Routing', 
        },
        {
          type: 'doc',
          id: 'protocol/ISM/aggregation-ISM',
          label: 'Aggregation',
        },
        {
          type: 'doc',
          id: 'protocol/ISM/specify-your-ISM',
          label: 'Specifying your ISM',
        },
        {
          type: 'doc',
          id: 'protocol/ISM/create-your-own',
          label: 'Create your own ISM',
        },
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'protocol/agents/validators',
          label: 'Validators', 
        },    
        {
          type: 'doc',
          id: 'protocol/agents/relayer',
          label: 'Relayer', 
        },
        {
          type: 'doc',
          id: 'protocol/agents/watchtowers',
          label: 'Watchtowers',
        },
      ],
    },
    {
      type: 'doc',
      id: 'protocol/economic-security',
      label: 'Economic Security',
    },
    {
      type: 'doc',
      id: 'protocol/components',
      label: 'Components',
    },
  ],
};

module.exports = sidebars;